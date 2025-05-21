# junon-txt.github.io

Personal website for sharing texts and writings, built with Next.js and TypeScript.

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/junon-txt/junon-txt.github.io.git
   cd junon-txt.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Generate dot pattern SVGs:
   ```bash
   npm run preprocess-dots
   ```
   This script processes background images into SVG dot patterns used in the animated background.

## 🛠️ Development

To run the development server:

```bash
npm run dev
```

This will start the development server at [http://localhost:3000](http://localhost:3000).

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build the production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks
- `npm run preprocess-dots` - Generate SVG dot patterns from background images

## 📦 Project Structure

```
junon-txt.github.io/
├── config/               # Configuration files
│   └── dot-patterns.yaml # Configuration for dot pattern generation
├── scripts/             # Build and preprocessing scripts
│   └── preprocess-dots.ts # Script to generate dot patterns
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # React components
│   ├── lib/             # Utility functions and shared code
│   └── assets/          # Source assets
│       └── bg/          # Background images for dot pattern generation
├── public/              # Static assets
│   └── images/
│       └── dots/        # Generated dot pattern SVGs
├── tailwind.config.ts   # Tailwind CSS configuration
└── next.config.js       # Next.js configuration
```

## 🚀 Deployment to GitHub Pages

### Deployment

Check .github/workflows/deploy.yml for deploy rule on pushes to `main` branch.

## 🔧 Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [ESLint](https://eslint.org/) - Code quality
- [Sharp](https://sharp.pixelplumbing.com/) - Image processing for dot patterns

## 📝 License

This project is licensed under the MIT License.
