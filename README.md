# I-Pro Solutions - Jekyll Website

A professional Jekyll website for I-Pro Solutions IP consulting firm, ready for deployment on GitHub Pages.

## Features

- **Modern Jekyll architecture** with includes and layouts
- **Responsive design** with mobile-first approach
- **Dark navy professional theme** with turquoise accents
- **Google Analytics** and **Microsoft Clarity** tracking
- **WhatsApp integration** for customer communication
- **Smooth animations** and interactive elements
- **SEO optimized** with proper meta tags
- **GitHub Pages ready**

## Local Development

### Prerequisites

- Ruby 2.7 or higher
- Bundler gem

### Setup

1. Clone this repository:
```bash
git clone https://github.com/yourusername/ipro-solutions.git
cd ipro-solutions
```

2. Install dependencies:
```bash
bundle install
```

3. Serve locally:
```bash
bundle exec jekyll serve
```

4. Visit `http://localhost:4000` in your browser

## GitHub Pages Deployment

### Option 1: Direct Repository Deployment

1. **Create a new repository** on GitHub named `yourusername.github.io` (or any name)

2. **Push your code** to the repository:
```bash
git add .
git commit -m "Initial Jekyll site"
git push origin main
```

3. **Enable GitHub Pages**:
   - Go to repository **Settings** → **Pages**
   - Set **Source** to "Deploy from a branch"
   - Select **Branch**: `main` and **Folder**: `/ (root)`
   - Click **Save**

4. **Your site will be available at**: `https://yourusername.github.io/repository-name`

### Option 2: Custom Domain

1. Add a `CNAME` file to your repository root:
```
your-domain.com
```

2. Configure DNS with your domain provider:
   - Add CNAME record pointing to `yourusername.github.io`

3. Enable custom domain in GitHub Pages settings

## Configuration

### Update Site Information

Edit `_config.yml` to customize:

```yaml
# Site settings
title: "Your Company Name"
description: "Your description"
url: "https://yourdomain.com"

# Company info
company:
  name: "Your Company Name"
  email: "your-email@company.com"
  phone: "+1234567890"
```

### Analytics Setup

Update tracking IDs in `_config.yml`:

```yaml
# Analytics
google_analytics: "YOUR-GA-ID"
microsoft_clarity: "YOUR-CLARITY-ID"
```

### Social Media Links

Update social links in `_config.yml`:

```yaml
social:
  linkedin: "your-linkedin-url"
  facebook: "your-facebook-url"
  whatsapp: "your-whatsapp-url"
```

## File Structure

```
├── _config.yml           # Jekyll configuration
├── _layouts/
│   └── default.html      # Main layout template
├── _includes/
│   ├── head.html         # HTML head with analytics
│   ├── navigation.html   # Navigation component
│   └── footer.html       # Footer component
├── assets/
│   ├── css/
│   │   └── style.scss    # Main stylesheet
│   └── js/
│       └── app.js        # JavaScript functionality
├── index.html            # Main page content
├── Gemfile              # Ruby dependencies
└── README.md            # This file
```

## Customization

### Colors

Modify colors in `assets/css/style.scss`:

```scss
:root {
  --color-background-primary: #1A202C;
  --color-accent-turquoise: #38D9A9;
  // ... other colors
}
```

### Content

- Edit `index.html` for page content
- Modify `_includes/navigation.html` for menu items  
- Update `_includes/footer.html` for footer content

### Functionality

- JavaScript functionality is in `assets/js/app.js`
- Animations and interactions are preserved from the original

## SEO Features

- Automatic sitemap generation
- SEO-friendly URLs
- Meta tags for social sharing
- Google Analytics integration
- Microsoft Clarity heatmaps

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Touch-friendly interactions

## Performance

- Optimized CSS with SCSS
- Efficient JavaScript loading
- Lazy loading for smooth animations
- Compressed assets for fast loading

## Support

For questions or support, contact help@iprosolutions.co.in

## License

© 2025 I-Pro Solutions. All rights reserved.

---

**Ready for GitHub Pages deployment! 🚀**