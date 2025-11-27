# Dr. Yi Pan - Personal Research Website

## Tech Stack

- **HTML5** - Semantic structure
- **CSS3** - Custom properties, animations, responsive design
- **JavaScript (Vanilla)** - Intersection Observer API, scroll effects
- **Tailwind CSS** (CDN) - Utility-first styling
- **Lucide Icons** (CDN) - Beautiful icon set
- **Google Fonts** - Inter typeface

## Project Structure

```
personal-website/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All custom styles
├── js/
│   └── main.js         # All JavaScript functionality
└── images/             # Publication covers, headshot
├── ...
├── package.json            # Dependencies and scripts
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/richardmpan/personal-website.git
   ```

2. Navigate to the project directory:
   ```bash
   cd personal-website
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

Start the development server:
```bash
npm start
```

The website will automatically open at `http://localhost:8080`

### Deployment

Simply deploy the project folder to any static hosting service:
- **GitHub Pages** - Free hosting for GitHub repositories
- **Netlify** - Continuous deployment with Git integration
- **Vercel** - Optimized for frontend frameworks
- **AWS S3** - Scalable cloud storage with CloudFront CDN

## Customization

### Update Colors

Edit CSS variables in [css/styles.css](css/styles.css):

```css
:root {
    --primary-bg: #0d0d0d;      /* Main background */
    --secondary-bg: #1c1c1c;    /* Card backgrounds */
    --accent-color: #00bcd4;    /* Links, highlights */
    --text-light: #ffffff;      /* Primary text */
    --text-muted: #a0a0a0;      /* Secondary text */
}
```

### Update Content

Edit content directly in [index.html](index.html):
- **Bio Section** - Lines ~248-297 (profile information)
- **Publications** - Lines ~300-461 (add/edit publications)
- **Research Projects** - Lines ~464-556 (ongoing research)
- **Awards** - Lines ~559-647 (fellowships and recognition)

### Update Images

Replace images in `images/`:
- `Headshot.jpg` - Your profile photo (recommended: 400x400px, square)
- Publication cover images - Journal covers or graphical abstracts (recommended: 200x280px)

### Update External Links

Update social media links in the footer (lines ~667-683):
- GitHub profile
- X (Twitter) profile
- LinkedIn profile
- Email address

## File Overview

### [index.html](index.html)
Main HTML structure containing:
- Fixed navigation header
- Hero section with bio
- Publications list with cards
- Research projects grid
- Academic timeline
- Awards section
- Footer with social links

### [css/styles.css](css/styles.css)
Organized custom styles:
1. CSS Variables
2. Base Styles
3. Scroll Animations (reveal, slide-up, slide-left, slide-right)
4. Layout & Sections
5. Components (cards, navbar, buttons)
6. Typography & Content
7. Responsive Design

### [js/main.js](js/main.js)
JavaScript functionality:
- Lucide icons initialization
- Intersection Observer for scroll animations
- Back-to-top button behavior
- Smooth scrolling

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Minimal external dependencies (CDN-hosted)
- CSS and JS are separated for browser caching
- Optimized animations using CSS transforms
- Lazy loading for scroll-triggered animations
- Fast initial page load

## License

MIT License - feel free to use this template for your own research website!

## Contact

**Dr. Yi Pan**
Email: richard.m.pan@gmail.com
GitHub: [@richardmpan](https://github.com/richardmpan)
X: [@yipan98](https://x.com/yipan98)
LinkedIn: [yi-pan-924a091b3](https://www.linkedin.com/in/yi-pan-924a091b3/)

---

## Development Notes

### Adding New Publications

1. Copy an existing publication card in [index.html](index.html)
2. Update the href with DOI or paper URL
3. Update publication image (or use placeholder)
4. Update status badge (Under Review, Preprint, Published)
5. Update title, authors, journal information
6. Ensure your name is wrapped in `<strong>` tags

### Modifying Animations

Scroll animations are controlled by classes in [css/styles.css](css/styles.css):
- `.reveal` - Fade in from bottom
- `.slide-up` - Slide up animation
- `.slide-left` - Slide in from left
- `.slide-right` - Slide in from right

Add these classes to any element in HTML to enable animations.

### Testing Locally

After making changes:
1. Ensure the dev server is running (`npm start`)
2. Check browser console for errors (F12)
3. Test responsive design (Chrome DevTools device toolbar)
4. Verify all links work correctly
5. Check animations on scroll

## Troubleshooting

**Icons not showing:**
- Check that Lucide script loads from CDN
- Verify `lucide.createIcons()` runs in [js/main.js](js/main.js)

**Styles not applying:**
- Check that [css/styles.css](css/styles.css) path is correct
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Verify CSS file has no syntax errors

**Animations not working:**
- Check that [js/main.js](js/main.js) is loaded
- Verify Intersection Observer is supported (all modern browsers)
- Check browser console for JavaScript errors

---

Built with ❤️ for research dissemination
