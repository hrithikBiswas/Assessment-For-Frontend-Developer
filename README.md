# This is a small Assessment project for next step of hiring process

A responsive frontend UI implementation based on Figma design specifications. Built with modern technologies to deliver a clean, user-friendly interface with seamless responsiveness across all devices.

## 🛠️ Tech Stack

- **Framework**: Next.js 16
- **UI Library**: React 19 & HeroUI Components
- **Styling**: Tailwind CSS 4
- **Animation**: Framer Motion
- **Form Handling**: Formik
- **Linting**: ESLint 9

## 📋 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── page.js            # Home page
│   ├── layout.js          # Root layout
│   ├── globals.css        # Global styles
│   ├── constants.js       # Application constants
│   └── (pages)/           # Route group for main pages
│       ├── appointments/
│       ├── call-logs/
│       └── settings/
├── components/            # Reusable React components
│   ├── appointments/      # Appointment management components
│   ├── call-logs/         # Call log components
│   ├── dashboard/         # Dashboard widgets
│   ├── settings/          # Settings page components
│   ├── layout/            # Layout components (Header, Navigation)
│   ├── common/            # Shared utility components
│   └── SVG/              # SVG icon components
├── contexts/              # React context providers
├── hooks/                 # Custom React hooks
└── providers/             # Application providers
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn installed

### Installation

1. Clone the repository:

```bash
git clone https://github.com/hrithikBiswas/Assessment-For-Frontend-Developer.git
cd Assessment-For-Frontend-Developer
```

2. Install dependencies:

```bash
npm install
# or
pnpm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 📦 Available Scripts

#### For npm

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

#### For pnpm

- `pnpm dev` - Start the development server
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint to check code quality

#### For yarn

- `yarn dev` - Start the development server
- `yarn build` - Build the application for production
- `yarn start` - Start the production server
- `yarn lint` - Run ESLint to check code quality

## ✨ Features

- Responsive design optimized for mobile, tablet, and desktop
- Modular component architecture for maintainability
- Smooth animations and transitions using Framer Motion
- Form validation with Formik integration
- Clean and organized code structure
- HeroUI components for consistent UI patterns
- Tailwind CSS for efficient styling
