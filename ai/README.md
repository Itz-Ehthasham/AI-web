# AI Developers — Developers Who Build AI Applications

A modern, colorful, and highly interactive portfolio website built with Next.js, JavaScript, and Framer Motion animations.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with clean, dynamic portfolio aesthetic
- **Horizontal Portfolio Scrolling**: Interactive horizontal carousel with drag, arrow controls, and keyboard navigation
- **Tech Stack Marquee**: Auto-scrolling technology badges that pause on hover
- **Dark/Light Theme**: Fully functional theme toggle with persistence and no hydration flicker
- **Modern UI**: Built with Tailwind CSS 4, Framer Motion, and glassy overlays
- **Separate Routes**: Navigation to dedicated pages for Portfolio, Expertise, Services, About, Blog, and Contact
- **Floating CTA**: Always-visible "Get in touch" button for easy contact access

## 🛠️ Tech Stack

- **Frontend**: Next.js 15 + JavaScript (JSX) + React 19
- **Styling**: Tailwind CSS 4 (JIT, dark mode class strategy)
- **Animations**: Framer Motion for micro-interactions and entrance animations
- **State Management**: Zustand for lightweight state management
- **Icons**: Lucide React
- **Theme Management**: Custom theme provider with localStorage persistence

## 📱 Components

- **Navbar**: Responsive navigation with theme toggle and prominent "Get in touch" button
- **Hero Section**: Animated headline with gradient text and abstract background shapes
- **Portfolio Horizontal**: Horizontal scrolling project showcase with snap behavior
- **Tech Stack Marquee**: Auto-scrolling technology categories with hover pause
- **Floating CTA**: Fixed contact button with gradient styling
- **Footer**: Compact footer with essential links

## 🎨 Design Features

- **Colorful Gradients**: Deep dark backgrounds with bright accent gradients (blue → violet → fuchsia)
- **Glassmorphism**: Backdrop blur effects and semi-transparent overlays
- **Smooth Animations**: Staggered entrance animations and hover effects
- **Rounded Cards**: `rounded-2xl` cards with generous padding and soft shadows
- **Accessibility**: Focus rings, keyboard navigation, ARIA labels, and reduced motion support

## 🚀 Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Open Browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── components/              # Reusable UI components
│   ├── Navbar.jsx          # Navigation with theme toggle
│   ├── Hero.jsx            # Animated hero section
│   ├── PortfolioHorizontal.jsx # Horizontal portfolio scroller
│   ├── ProjectCard.jsx     # Individual project cards
│   ├── TechStackMarquee.jsx # Tech stack marquee cards
│   ├── FloatingCTA.jsx     # Fixed contact button
│   ├── Footer.jsx          # Compact footer
│   ├── ThemeToggle.jsx     # Theme toggle component
│   └── CTAButton.jsx       # Reusable CTA button
├── pages/                  # Next.js pages
│   ├── index.jsx           # Home page (Hero + Portfolio + Tech Stack)
│   ├── portfolio.jsx       # Full portfolio grid
│   ├── expertise.jsx       # Expertise specialties
│   ├── services.jsx        # Service packages
│   ├── about.jsx           # About page
│   ├── blog.jsx            # Blog page
│   └── contact.jsx         # Contact form
├── providers/              # Context providers
│   └── ThemeProvider.jsx   # Theme management
├── data/                   # Mock data
│   ├── projects.js         # Portfolio projects
│   └── tech.js             # Technology stack
└── styles/                 # Global styles
    └── globals.css         # Tailwind CSS and custom animations
```

## 🎯 Key Features Implementation

### Theme Toggle
- Uses `class` strategy on `<html>` element
- Persists in localStorage
- Respects system preference on first load
- Prevents hydration flicker with mounted state

### Horizontal Portfolio
- CSS snap scrolling with `snap-x snap-mandatory`
- Arrow controls for programmatic scrolling
- Drag-to-scroll with pointer events
- Keyboard arrow navigation support
- Responsive card widths (320px mobile, 420px desktop)

### Tech Stack Marquee
- CSS keyframe animations with `translateX`
- Duplicate list trick for seamless loops
- Hover pause functionality
- Reduced motion support for accessibility

## 🎨 Customization

### Adding New Projects
Update `data/projects.js`:
```javascript
{
  id: 'unique-id',
  tag: 'AI', // AI, Web, Mobile, Data
  title: 'Project Title',
  description: 'Detailed project description',
  tech: ['React', 'Python', 'TensorFlow'],
  featured: true,
  image: '/path/to/image.jpg'
}
```

### Adding Tech Stack Items
Update `data/tech.js`:
```javascript
{
  category: 'New Category',
  items: ['Technology1', 'Technology2', 'Technology3']
}
```

### Styling
- Modify `src/styles/globals.css` for custom animations
- Update Tailwind classes in components
- Adjust color schemes in CSS variables

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (1 card visible)
- **Tablet**: 768px - 1024px (2 cards visible)
- **Desktop**: > 1024px (3+ cards partially visible)

## 🌟 Performance Features

- **Image Optimization**: Next.js Image component
- **Lazy Loading**: Non-critical sections load on scroll
- **Reduced Motion**: Respects user preferences
- **Efficient Animations**: Hardware-accelerated transforms

## 🚀 Deployment

This project can be deployed to:
- **Vercel** (Recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any static hosting service

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ using Next.js, JavaScript, Tailwind CSS, and Framer Motion
