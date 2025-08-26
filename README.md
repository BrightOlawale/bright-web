# 🌟 Bright Olawale - Portfolio Website

A modern, interactive portfolio website showcasing my skills as a Software Engineer, with a unique Gospel discovery experience built using Next.js, TypeScript, and Framer Motion.

## ✨ Features

### 🚀 Professional Portfolio

- **Hero Section**: Animated introduction with gradient text effects
- **About Section**: Professional background and expertise
- **Experience Section**: Work history and achievements
- **Skills Section**: Technical skills with progress indicators
- **Projects Section**: Showcase of development work
- **Contact Section**: Professional contact information

### 🎮 Interactive Gospel Experience

- **Scripture Collection**: 20 carefully curated Bible verses
- **Progressive Unlocking**: Interactive verse discovery system
- **Beautiful Animations**: Smooth transitions and micro-interactions
- **Responsive Design**: Works perfectly on all devices
- **Modern UI/UX**: Clean, professional design with engaging interactions

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Custom component library with shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/bright-web.git
   cd bright-web
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```bash
bright-web/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── globals.css     # Global styles and animations
│   │   ├── layout.tsx      # Root layout component
│   │   └── page.tsx        # Home page
│   ├── components/         # React components
│   │   ├── ui/            # Reusable UI components
│   │   ├── hero-section.tsx
│   │   ├── about-section.tsx
│   │   ├── experience-section.tsx
│   │   ├── skills-section.tsx
│   │   ├── projects-section.tsx
│   │   ├── contact-section.tsx
│   │   ├── navigation.tsx
│   │   └── scripture-banner.tsx
│   └── lib/               # Utility ~~functions~~
├── public/                # Static assets
├── tailwind.config.ts     # Tailwind configuration
└── package.json          # Dependencies and scripts
```

## 🎨 Key Components

### Scripture Banner

The unique Gospel discovery experience features:

- **20 Bible verses** from Romans and the New Testament
- **Interactive unlocking system** that encourages exploration
- **Beautiful animations** with Framer Motion
- **Progress tracking** with visual feedback
- **Responsive design** for all screen sizes

### Professional Sections

- **Hero Section**: Animated introduction with gradient text
- **Skills Section**: Technical expertise with progress bars
- **Experience Section**: Professional journey timeline
- **Projects Section**: Development work showcase

## 🎯 Customization

### Adding New Verses

Edit `src/components/scripture-banner.tsx`:

```typescript
const verses = [
  {
    text: "Your verse text here",
    reference: "Book Chapter:Verse",
    icon: Heart, // Choose from Lucide icons
    color: "text-red-400", // Tailwind color classes
    category: "category-name",
    unlockRequirement: 0
  }
  // ... more verses
]
```

### Styling

- **Colors**: Modify CSS variables in `src/app/globals.css`
- **Animations**: Adjust Framer Motion settings in components
- **Layout**: Update Tailwind classes for different layouts

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms

- **Netlify**: Build command: `npm run build`
- **AWS Amplify**: Connect your repository
- **Traditional hosting**: Build with `npm run build` and upload `out/` folder

## 📱 Responsive Design

The website is fully responsive and optimized for:

- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1440px+)

## 🎭 Animations

Built with Framer Motion for smooth, performant animations:

- **Page transitions** with staggered animations
- **Scroll-triggered animations** for better UX
- **Micro-interactions** throughout the interface
- **Gradient text animations** for visual appeal

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler
```

### Code Quality

- **TypeScript**: Full type safety
- **ESLint**: Code linting and formatting
- **Prettier**: Consistent code formatting
- **Component-based architecture**: Reusable, maintainable code

****

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 About

This portfolio showcases my technical skills while sharing the most important message - the Gospel of Jesus Christ. The interactive scripture experience demonstrates how technology can be used to share timeless truths in engaging ways.

## 📞 **Contact**

- **Portfolio**: [brightolawale.com](https://brightolawale.com)
- **LinkedIn**: [Bright Olawale](https://linkedin.com/in/brightolawale)
- **GitHub**: [@brightolawale](https://github.com/brightolawale)
- **Email**: [contact@brightolawale.com](mailto:contact@brightolawale.com)

---****

⭐ **Star this repository** if you found it helpful!

Built with ❤️ and ☕ by Bright Olawale
