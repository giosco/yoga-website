# Serene Yoga Website

A complete, deployment-ready website for a home-based yoga practice, designed to showcase yoga services offered at home, outdoors, and at venues. The website features a clean, calming aesthetic aligned with yoga principles.

## Table of Contents

- [Features](#features)
- [File Structure](#file-structure)
- [Setup & Deployment](#setup--deployment)
- [Customization Guide](#customization-guide)
- [Resources Used](#resources-used)
- [Browser Compatibility](#browser-compatibility)
- [License](#license)

## Features

- Responsive design that works on all devices (mobile, tablet, desktop)
- Clean navigation with intuitive user experience
- Comprehensive information about yoga services, pricing, and instructor background
- Contact/booking form for client inquiries
- Image gallery and testimonials section
- Fast loading and optimized for SEO

## File Structure

```
serene-yoga-website/
│
├── index.html                  # Home page
├── README.md                   # Project documentation (this file)
│
├── css/
│   └── styles.css              # Main stylesheet
│
├── js/
│   └── main.js                 # JavaScript functionality
│
├── images/                     # Folder for your images (add your own)
│
└── pages/
    ├── about.html              # About page
    ├── services.html           # Services page
    ├── pricing.html            # Pricing page
    ├── gallery.html            # Gallery & testimonials page
    └── contact.html            # Contact & booking page
```

## Setup & Deployment

### Local Setup

1. Download or clone this repository to your local machine.
2. Replace placeholder images with your own images in the `/images` folder.
3. Customize the content in the HTML files to reflect your specific services, pricing, and background.
4. Test the website locally by opening `index.html` in your browser.

### GitHub Pages Deployment

1. Create a new GitHub repository.
2. Upload all files to your repository.
3. Go to the repository settings.
4. Scroll down to the "GitHub Pages" section.
5. Select the branch you want to deploy (usually `main` or `master`).
6. Click "Save". GitHub will provide you with a published URL.

Detailed steps:

1. **Create a GitHub account** (if you don't already have one) at [github.com](https://github.com/).
2. **Create a new repository**:
   - Click the "+" icon in the top-right corner and select "New repository."
   - Name your repository (e.g., `yoga-website` or `your-username.github.io` for a user site).
   - Choose public visibility.
   - Click "Create repository."

3. **Upload your files**:
   - You can either upload files directly through the GitHub interface or use Git commands.
   
   **Option 1: Upload through GitHub interface**
   - In your new repository, click "Add file" > "Upload files."
   - Drag and drop all your website files, including folders.
   - Commit the changes by adding a commit message and clicking "Commit changes."
   
   **Option 2: Using Git commands**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/your-username/your-repository-name.git
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - Go to your repository's settings (click the "Settings" tab).
   - Scroll down to the "GitHub Pages" section.
   - Under "Source", select the branch you want to deploy (usually "main" or "master").
   - Click "Save".
   - GitHub will provide you with a published URL (typically `https://your-username.github.io/your-repository-name/`).

5. **Verify deployment**:
   - It may take a few minutes for your site to be published.
   - Visit the provided URL to make sure your website is deployed correctly.

## Customization Guide

### General Content

1. Replace all placeholder content with your actual information:
   - Update all text sections, service details, pricing, etc.
   - Replace "Serene Yoga" with your actual business name throughout the site.
   - Update contact information, service areas, and business hours.

### Images

1. Replace all placeholder images with your own high-quality images:
   - The website uses placeholder images with the URL pattern `/api/placeholder/width/height`.
   - Replace these with your own images by:
     - Adding your images to the `/images` folder.
     - Updating the image paths in the HTML files (e.g., change `/api/placeholder/600/400` to `/images/your-image.jpg`).

### Color Scheme

1. To change the color scheme, edit the CSS variables in the `css/styles.css` file:
   - Look for the `:root` section at the beginning of the file.
   - Update the color values to match your preferred palette.
   - Main colors to change:
     - `--primary-color` (Currently a sage green)
     - `--secondary-color` (Currently a warm sand)
     - `--accent-color` (Currently a soft rose)

### Fonts

1. To change the fonts:
   - Update the Google Fonts link in the `<head>` section of each HTML file.
   - Update the font-family variables in the CSS `:root` section:
     - `--heading-font` (Currently 'Playfair Display')
     - `--body-font` (Currently 'Raleway')

### Adding New Pages

1. To add a new page:
   - Create a new HTML file in the `/pages` folder.
   - Copy the structure from an existing page, including the header and footer.
   - Update the navigation menu in all HTML files to include a link to your new page.

### Integrating Scheduling Tools

1. To integrate a scheduling tool like Calendly:
   - Sign up for a Calendly account (or similar service).
   - Replace the "View Availability Calendar" button on the contact page with your scheduling link or embed code.
   - For embedding, add the provided embed code to the "calendly-widget" section.

## Resources Used

- **Fonts**: Google Fonts (Playfair Display, Raleway)
- **Icons**: Font Awesome 6.0.0
- **CSS Framework**: None (custom CSS)
- **JavaScript Libraries**: None (vanilla JavaScript)

## Browser Compatibility

This website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## License

This template is provided for your personal use. You may modify and customize it for your yoga practice. If distributing or using commercially, please ensure you have the right to use all components.

---

## Need Help?

If you need any assistance with this template or have questions about customization:

1. Refer to the comments in the code for guidance.
2. Check online resources for HTML, CSS, and JavaScript help:
   - [W3Schools](https://www.w3schools.com/)
   - [MDN Web Docs](https://developer.mozilla.org/)
   - [Stack Overflow](https://stackoverflow.com/)

---

Happy teaching and namaste! 🧘‍♀️
