# Cleanthelawn Landscaping Website

## Email Configuration Setup
Professional landscaping website built with React, TypeScript, and Tailwind CSS.
To enable email functionality, you need to configure EmailJS:
# EmailJS Configuration
### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Create a free account
3. Create a new service (Gmail, Outlook, etc.)
VITE_EMAILJS_SERVICE_ID=your_service_id
### 2. Create Email Templates
VITE_EMAILJS_TEMPLATE_ID_CLIENT=your_client_template_id
#### Business Notification Template (for receiving leads):
```
Subject: New Quote Request from {{fullName}}

New landscaping quote request received:

CLIENT INFORMATION:
Name: {{fullName}}
Email: {{email}}
Phone: {{phone}}
Address: {{fullAddress}}

SERVICE DETAILS:
Service Type: {{serviceType}}
Service Request: {{serviceRequest}}
Service Interest: {{serviceInterest}}
Description: {{serviceDescription}}

ADDITIONAL INFO:
How they heard about us: {{howDidYouHear}}
Has images: {{hasImages}} ({{imageCount}} files)
Submitted: {{submissionDate}}

Please follow up within 24 hours.
```
VITE_EMAILJS_TEMPLATE_ID_BUSINESS=your_business_template_id
#### Client Confirmation Template:
```
Subject: Thank you for your quote request - Cleanthelawn Landscaping

Dear {{firstName}},
VITE_EMAILJS_PUBLIC_KEY=your_public_key
Thank you for your interest in Cleanthelawn Landscaping! We've received your request for:
SERVICE REQUESTED: {{serviceInterest}}
SERVICE TYPE: {{serviceType}} - {{serviceRequest}}
WHAT HAPPENS NEXT:
✓ Our team will review your request within 24 hours
✓ We'll contact you to schedule a free consultation
✓ You'll receive a detailed, no-obligation quote
✓ We'll answer any questions you may have
YOUR REQUEST DETAILS:
Address: {{fullAddress}}
Phone: {{phone}}
Description: {{serviceDescription}}
Submitted: {{submissionDate}}
If you have any immediate questions, please don't hesitate to call us at {{businessPhone}}.
Best regards,
The Cleanthelawn Team
{{businessEmail}}
```
### 3. Update Environment Variables
Update your `.env` file with your EmailJS credentials:
```
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID_CLIENT=your_client_template_id
VITE_EMAILJS_TEMPLATE_ID_BUSINESS=your_business_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```
### 4. Test the Integration
1. Fill out the contact form
2. Check that both emails are sent
3. Verify email delivery and formatting
## Features
- ✅ Responsive design
- ✅ Contact form with email notifications
- ✅ Service showcase
- ✅ Interactive before/after carousel
- ✅ Google Maps integration
- ✅ SEO optimized
- ✅ Performance optimized images
## Development
```bash
npm install
npm run dev
```
## Build
```bash
npm run build
```