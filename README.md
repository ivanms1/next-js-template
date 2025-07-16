# Next.js Template

A modern, production-ready Next.js template with TypeScript, comprehensive tooling, and developer experience optimizations.

## ✨ Features

- **⚡ Next.js 15** - Latest version with App Router support
- **🔷 TypeScript** - Full type safety and IntelliSense
- **🎨 Sass/SCSS** - Advanced styling with CSS Modules support
- **🔧 ESLint** - Code linting with Next.js and TypeScript rules
- **💅 Prettier** - Code formatting
- **🎯 Stylelint** - CSS/SCSS linting and formatting
- **🚀 Plop.js** - Component and page generation
- **🔒 Pre-commit hooks** - Automated code quality checks
- **📦 Dependabot** - Automated dependency updates
- **🖼️ SVG support** - Import SVGs as React components
- **📱 Responsive** - Mobile-first design approach
- **🛠️ Path aliases** - Clean imports with `@/` prefix

## 🚀 Quick Start

### Prerequisites

- Node.js 20.19.0+
- Yarn (recommended) or npm

### Installation

1. **Clone the template**

   ```bash
   git clone <your-repo-url>
   cd next-js-template
   ```

2. **Install dependencies**

   ```bash
   yarn install
   # or
   npm install
   ```

3. **Start development server**

   ```bash
   yarn dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
next-js-template/
├── pages/                 # Next.js pages (legacy Pages Router)
│   ├── _app.tsx          # App wrapper
│   ├── index.tsx         # Home page
│   ├── globals.scss      # Global styles
│   └── api/              # API routes
├── src/
│   ├── components/       # Reusable components
│   │   └── Button/      # Component folder structure
│   └── pages/           # Page components
├── public/              # Static assets
├── templates/           # Plop.js templates
├── plopfile.js         # Component/page generators
└── next.config.js      # Next.js configuration
```

## 🛠️ Development Tools

### Code Generation

Generate components and pages quickly with Plop.js:

```bash
# Generate a component
yarn plop component

# Generate a page
yarn plop page
```

### Code Quality

The template includes automated code quality checks:

- **ESLint** - JavaScript/TypeScript linting
- **Prettier** - Code formatting
- **Stylelint** - CSS/SCSS linting
- **Pre-commit hooks** - Run checks before commits

### Available Scripts

```bash
# Development
yarn dev          # Start development server
yarn build        # Build for production
yarn start        # Start production server

# Code Quality
yarn lint         # Run ESLint
yarn lint:fix     # Fix ESLint issues
yarn format       # Format code with Prettier
yarn stylelint    # Run Stylelint
yarn stylelint:fix # Fix Stylelint issues
```

## 🎨 Styling

### CSS Modules with Sass

Components use CSS Modules with Sass for scoped styling:

```tsx
import styles from "./Button.module.scss";

const Button = () => {
  return <button className={styles.button}>Click me</button>;
};
```

### Global Styles

Global styles are defined in `pages/globals.scss` and imported in `_app.tsx`.

### SVG Support

Import SVGs as React components:

```tsx
import Logo from "@/public/logo.svg";

const Header = () => {
  return <Logo className="logo" />;
};
```

## 🔧 Configuration

### TypeScript

- Strict mode enabled
- Path aliases configured (`@/components/*`, `@/pages/*`)
- CSS Modules type support

### Next.js

- SVG support via `@svgr/webpack`
- Optimized for performance
- SEO-friendly

### ESLint

- Next.js recommended rules
- TypeScript support
- Prettier integration

### Stylelint

- Standard CSS rules
- SCSS support
- Prettier integration
- Property ordering

## 📦 Dependencies

### Core

- **Next.js 15** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety

### Styling

- **Sass** - CSS preprocessor
- **CSS Modules** - Scoped styling

### Development

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Stylelint** - CSS linting
- **Plop.js** - Code generation
- **Husky** - Git hooks
- **lint-staged** - Pre-commit checks

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The template is compatible with any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run quality checks: `yarn lint && yarn stylelint`
5. Commit your changes
6. Push to the branch
7. Create a Pull Request

## 📄 License

This template is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review the [TypeScript documentation](https://www.typescriptlang.org/docs)
3. Open an issue in this repository

---

**Happy coding! 🎉**
