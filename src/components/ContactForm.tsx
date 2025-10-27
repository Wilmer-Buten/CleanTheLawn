import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapPin, Phone, Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  serviceType: string;
  serviceRequest: string;
  serviceDescription: string;
  images: FileList | null;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    serviceType: '',
    serviceRequest: '',
    serviceDescription: '',
    images: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [imagePreview, setImagePreview] = useState<string[]>([]);
  const [compressedImages, setCompressedImages] = useState<string[]>([]);

  // Initialize EmailJS
  React.useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Function to compress image
  const compressImage = (file: File, maxWidth: number = 300, quality: number = 0.5): Promise<string> => {
    return new Promise((resolve) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      
      img.onload = () => {
        // Calculate new dimensions
        let { width, height } = img;
        
        // More aggressive resizing for production
        const isProduction = !import.meta.env.DEV;
        const targetWidth = isProduction ? Math.min(maxWidth, 250) : maxWidth;
        const targetQuality = isProduction ? Math.min(quality, 0.4) : quality;
        
        if (width > targetWidth) {
          height = (height * targetWidth) / width;
          width = targetWidth;
        }
        
        canvas.width = width;
        canvas.height = height;
        
        // Draw and compress
        ctx?.drawImage(img, 0, 0, width, height);
        const compressedDataUrl = canvas.toDataURL('image/jpeg', targetQuality);
        
        console.log(`🖼️ Image compressed: ${file.name}`, {
          originalSize: file.size,
          compressedSize: compressedDataUrl.length,
          dimensions: `${width}x${height}`,
          quality: targetQuality,
          isProduction
        });
        
        resolve(compressedDataUrl);
      };
      
      img.src = URL.createObjectURL(file);
    });
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    setFormData(prev => ({
      ...prev,
      images: files
    }));

    // Create preview URLs and convert to base64
    if (files) {
      const previewUrls: string[] = [];
      const processImages = async () => {
        const compressed: string[] = [];
        
        for (const file of Array.from(files)) {
          if (file.type.startsWith('image/')) {
            const url = URL.createObjectURL(file);
            previewUrls.push(url);
            
            // Compress image
            const compressedImage = await compressImage(file);
            compressed.push(compressedImage);
          }
        }
        
        setImagePreview(previewUrls);
        setCompressedImages(compressed);
      };
      
      processImages();
    } else {
      setImagePreview([]);
      setCompressedImages([]);
    }
  };

  // Cleanup preview URLs when component unmounts or images change
  React.useEffect(() => {
    return () => {
      imagePreview.forEach(url => URL.revokeObjectURL(url));
    };
  }, [imagePreview]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Debug logs para producción
    console.log('🔍 Debug Info:');
    console.log('Environment:', {
      isDev: import.meta.env.DEV,
      mode: import.meta.env.MODE,
      serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ? 'Set' : 'Missing',
      templateBusiness: import.meta.env.VITE_EMAILJS_TEMPLATE_ID_BUSINESS ? 'Set' : 'Missing',
      templateClient: import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CLIENT ? 'Set' : 'Missing',
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ? 'Set' : 'Missing'
    });
    console.log('Images info:', {
      hasFiles: formData.images ? formData.images.length : 0,
      compressedCount: compressedImages.length,
      totalSize: compressedImages.reduce((total, img) => total + img.length, 0)
    });

    try {
      // Prepare data for emails
      const currentDate = new Date();
      
      // Prepare image data for email
      const imageAttachments = compressedImages.map((base64, index) => ({
        name: `image_${index + 1}.jpg`,
        data: base64
      }));
      
      // Create image HTML for email display (only if images are small enough)
      let imageHtml = '';
      const totalImageSize = compressedImages.reduce((total, img) => total + img.length, 0);
      
      console.log('📊 Image processing:', {
        imageCount: compressedImages.length,
        totalSize: totalImageSize,
        sizeLimit: 25000,
        willIncludeImages: compressedImages.length > 0 && totalImageSize < 25000
      });
      
      // Only include images if total size is less than 25KB (more conservative limit)
      if (compressedImages.length > 0 && totalImageSize < 25000) {
        imageHtml = compressedImages.map((base64, index) => 
          `<img src="${base64}" alt="Client Image ${index + 1}" style="max-width: 200px; max-height: 150px; border-radius: 8px; margin: 10px; border: 2px solid #10b981; object-fit: cover; display: inline-block;">`
        ).join('');
        console.log('✅ Images will be included in email');
      } else {
        console.log('❌ Images too large or none available:', {
          hasImages: compressedImages.length > 0,
          exceedsLimit: totalImageSize >= 25000
        });
      }
      
      const emailData = {
        fullName: `${formData.firstName} ${formData.lastName}`,
        firstName: formData.firstName,
        email: formData.email,
        phone: formData.phone,
        fullAddress: `${formData.address}, ${formData.city}, MD ${formData.zipCode}`,
        serviceType: formData.serviceType,
        serviceRequest: formData.serviceRequest,
        serviceDescription: formData.serviceDescription,
        hasImages: (formData.images && formData.images.length > 0) ? 'Yes' : 'No',
        imageCount: formData.images ? formData.images.length.toString() : '0',
        submissionDate: currentDate.toLocaleDateString(),
        submissionTime: currentDate.toLocaleTimeString(),
        businessPhone: '(240) 810-6798',
        businessEmail: 'cleanthelawnlandscaping@gmail.com',
        imageHtml: imageHtml,
        showImages: compressedImages.length > 0 ? 'true' : 'false'
      };

      console.log('📧 Email data prepared:', {
        ...emailData,
        imageHtml: imageHtml ? `${imageHtml.length} characters` : 'Empty',
        totalDataSize: JSON.stringify(emailData).length
      });

      // Send email to business
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_BUSINESS,
        emailData
      );

      // Send confirmation email to client
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CLIENT,
        emailData
      );

      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zipCode: '',
        serviceType: '',
        serviceRequest: '',
        serviceDescription: '',
        images: null,
      });

      // Reset file input
      const fileInput = document.getElementById('images') as HTMLInputElement;
      if (fileInput) {
        fileInput.value = '';
        setImagePreview([]);
        setCompressedImages([]);
      }

    } catch (error) {
      console.error('Error sending emails:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-6">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <Mail className="mr-3" />
              Contact Information
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            {/* Personal Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Phone className="mr-2 text-green-600" />
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    placeholder="Enter your last name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    placeholder="(240) 123-4567"
                  />
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <MapPin className="mr-2 text-green-600" />
                Property Address
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    placeholder="123 Main Street"
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    placeholder="Bowie"
                  />
                </div>
                <div>
                  <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-2">
                    ZIP Code *
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    placeholder="20715"
                  />
                </div>
              </div>
            </div>

            {/* Service Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Category *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a service category</option>
                    <option value="Lawn Care">Lawn Care</option>
                    <option value="Landscaping">Landscaping</option>
                    <option value="Tree Services">Tree Services</option>
                    <option value="Hardscaping">Hardscaping</option>
                    <option value="Maintenance">Maintenance</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="serviceRequest" className="block text-sm font-medium text-gray-700 mb-2">
                    Specific Service *
                  </label>
                  <input
                    type="text"
                    id="serviceRequest"
                    name="serviceRequest"
                    value={formData.serviceRequest}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    placeholder="e.g., Weekly lawn mowing, Garden design"
                  />
                </div>
              </div>
            </div>

            {/* Project Description */}
            <div>
              <label htmlFor="serviceDescription" className="block text-sm font-medium text-gray-700 mb-2">
                Project Description *
              </label>
              <textarea
                id="serviceDescription"
                name="serviceDescription"
                value={formData.serviceDescription}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-none"
                placeholder="Please describe your project in detail. Include any specific requirements, preferences, or questions you have."
              />
            </div>

            {/* File Upload */}
            <div>
              <label htmlFor="images" className="block text-sm font-medium text-gray-700 mb-2">
                Upload Images (Optional)
              </label>
              <input
                type="file"
                id="images"
                name="images"
                onChange={handleFileChange}
                multiple
                accept="image/*"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
              />
              <p className="text-sm text-gray-500 mt-2">
                Upload photos of your current landscape or inspiration images (Max 10MB per file)
              </p>
              
              {/* Image Preview */}
              {imagePreview.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Image Preview:</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {imagePreview.map((url, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={url}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-20 object-cover rounded-lg border border-gray-300 shadow-sm"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            const newPreviews = imagePreview.filter((_, i) => i !== index);
                            setImagePreview(newPreviews);
                            
                            // Update image data
                            const newCompressedImages = compressedImages.filter((_, i) => i !== index);
                            setCompressedImages(newCompressedImages);
                            
                            // Update form data
                            const fileInput = document.getElementById('images') as HTMLInputElement;
                            if (fileInput && fileInput.files) {
                              const dt = new DataTransfer();
                              Array.from(fileInput.files).forEach((file, i) => {
                                if (i !== index) {
                                  dt.items.add(file);
                                }
                              });
                              fileInput.files = dt.files;
                              setFormData(prev => ({
                                ...prev,
                                images: dt.files
                              }));
                            }
                            
                            // Revoke the URL
                            URL.revokeObjectURL(url);
                          }}
                          className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-red-600 transition-colors opacity-0 group-hover:opacity-100"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-green-700 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Sending Request...
                  </>
                ) : (
                  <>
                    <Send className="mr-3" />
                    Get My Free Quote
                  </>
                )}
              </button>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 flex items-start">
                <CheckCircle className="text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-green-800 font-semibold mb-2">Quote Request Sent Successfully!</h4>
                  <p className="text-green-700 mb-3">
                    Thank you for choosing Cleanthelawn Landscaping! We've received your request and will contact you within 24 hours.
                  </p>
                  <div className="text-sm text-green-600">
                    <p className="mb-1">✓ Confirmation email sent to your inbox</p>
                    <p className="mb-1">✓ Our team has been notified</p>
                    <p>✓ Expect a call within 24 hours</p>
                  </div>
                  <div className="mt-4 p-3 bg-green-100 rounded-lg">
                    <p className="text-sm text-green-800">
                      <strong>Need immediate assistance?</strong><br />
                      Call us directly at <a href="tel:240-810-6798" className="font-semibold underline">(240) 810-6798</a>
                    </p>
                  </div>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 flex items-start">
                <AlertCircle className="text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-red-800 font-semibold mb-2">Unable to Send Request</h4>
                  <p className="text-red-700 mb-3">
                    We're experiencing technical difficulties. Please try again or contact us directly.
                  </p>
                  <div className="mt-4 p-3 bg-red-100 rounded-lg">
                    <p className="text-sm text-red-800">
                      <strong>Contact us directly:</strong><br />
                      Phone: <a href="tel:240-810-6798" className="font-semibold underline">(240) 810-6798</a><br />
                      Email: <a href="mailto:cleanthelawnlandscaping@gmail.com" className="font-semibold underline">cleanthelawnlandscaping@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;