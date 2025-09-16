# AI Web Portfolio

A modern, responsive web portfolio showcasing AI and machine learning projects with an interactive 3D robot animation.

## ✨ Features

- **Interactive 3D Robot**: Animated robot on the home page using Lottie animations
- **Responsive Design**: Mobile-first design that works on all devices
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Modern Tech Stack**: Built with Next.js, React, Tailwind CSS, and Framer Motion
- **AI-Focused Content**: Portfolio highlighting AI and ML projects

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build

```bash
npm run build
npm start
```

## 🤖 3D Robot Implementation

The home page features an interactive 3D robot animation with multiple fallback methods:

### **Primary Method: Lottie Animation**
- Uses `lottie-react` library
- Loads from hosted Lottie file: `https://lottie.host/c886cbc2-d699-42b1-b50f-ece3e53e95d5/JkUFjMlyWH.lottie`
- Fast loading with optimized performance

### **Fallback Method 1: Iframe Embed**
- Automatically switches to iframe after 1 second
- Uses official lottie.host embed
- Guaranteed to work and loads quickly

### **Fallback Method 2: CSS Robot**
- Custom-built CSS/SVG robot with Framer Motion animations
- Interactive hover effects and smooth transitions
- Always available as final fallback

### **Performance Optimizations**
- **1-second timeout** for Lottie loading
- **Immediate iframe fallback** for guaranteed display
- **Reduced animation delays** (0.3s instead of 0.5s)
- **Eliminated loading states** for faster perceived performance

## 🎨 Component Structure

```
src/
├── components/
│   ├── Hero.jsx          # Main hero section with robot
│   ├── Robot3D.jsx       # 3D robot component
│   ├── Navbar.jsx        # Navigation bar
│   ├── CTAButton.jsx     # Call-to-action buttons
│   ├── PortfolioHorizontal.jsx # Portfolio showcase
│   ├── TechStackMarquee.jsx    # Technology stack
│   ├── FloatingCTA.jsx   # Floating call-to-action
│   ├── Footer.jsx        # Footer component
│   └── ThemeToggle.jsx   # Theme switcher
├── pages/
│   ├── index.jsx         # Home page
│   ├── about.jsx         # About page
│   ├── portfolio.jsx     # Portfolio page
│   ├── services.jsx      # Services page
│   ├── expertise.jsx     # Expertise page
│   ├── blog.jsx          # Blog page
│   └── contact.jsx       # Contact page
└── providers/
    └── ThemeProvider.jsx # Theme context provider
```

## 🛠️ Technologies Used

- **Frontend Framework**: Next.js 15.5.0
- **React**: 19.1.0
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Lottie**: lottie-react 2.4.1
- **Icons**: Lucide React
- **Build Tool**: Webpack (Next.js built-in)

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: 
  - `sm`: 640px+
  - `md`: 768px+
  - `lg`: 1024px+
  - `xl`: 1280px+
- **Grid Layout**: 
  - Mobile: Single column layout
  - Desktop: Two-column split (text left, robot right)

## 🎯 Key Features

### **Hero Section**
- Split layout with text on left, robot on right
- Staggered animations for smooth entrance
- Gradient text effects
- Interactive CTA buttons

### **Robot Animation**
- **Lottie**: Primary 3D animation
- **Iframe**: Fast fallback (1s timeout)
- **CSS**: Interactive fallback with hover effects
- **Status indicators**: Shows which method is active

### **Theme System**
- Dark/Light mode toggle
- Smooth transitions between themes
- Persistent theme preference
- CSS custom properties for theming

## 🔧 Troubleshooting

### **Robot Not Loading**
1. Check browser console for errors
2. Verify internet connection (for Lottie/iframe)
3. Robot will automatically fallback to CSS version

### **Build Errors**
1. Clear `node_modules` and reinstall:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. Check Node.js version compatibility

### **Performance Issues**
1. Robot automatically optimizes loading
2. Iframe fallback ensures fast display
3. CSS robot provides instant fallback

## 📁 File Structure

```
public/
├── favicon.ico
└── Robot-Bot 3D.lottie  # Lottie animation file

src/
├── components/           # Reusable UI components
├── pages/               # Next.js pages
├── providers/           # Context providers
├── data/                # Static data files
└── styles/              # Global styles
```

## 🚀 Deployment

### **Vercel (Recommended)**
1. Connect your GitHub repository
2. Vercel automatically detects Next.js
3. Deploys on every push to main branch

### **Other Platforms**
1. Build the project: `npm run build`
2. Start production server: `npm start`
3. Deploy the `out` directory

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues:
1. Check the troubleshooting section
2. Review browser console for errors
3. Ensure all dependencies are installed
4. Verify Node.js version compatibility

---

**Built with ❤️ using Next.js, React, and modern web technologies**
