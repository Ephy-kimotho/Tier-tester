# TierTester

TierTester is a modern pricing management platform that helps businesses optimize their pricing strategies through data-driven insights and AI-powered recommendations.

## Overview

TierTester provides a comprehensive solution for managing pricing tiers, analyzing customer behavior, and optimizing revenue. The platform combines intuitive data entry, powerful analytics, and AI-driven recommendations to help you make informed pricing decisions.

### Key Features

- **Multi-Step Onboarding**: Progressive data entry flow for pricing structures, customer behavior, and competitive data
- **Dashboard Analytics**: Real-time revenue metrics, growth charts, and performance indicators
- **Pricing Tiers Management**: Create, manage, and track multiple pricing tiers with detailed metrics
- **AI Recommendations**: Get intelligent pricing suggestions based on market analysis and customer data
- **Settings & Configuration**: Customizable workspace settings, team management, and billing preferences

## Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI primitives
- **Charts**: Recharts
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics

## Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm package manager

## Installation

1. Clone the repository:
```bash
git clone https://github.com/tiertester/frontend.git
cd frontend
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

Note: The `--legacy-peer-deps` flag is required due to React 19 compatibility with some dependencies.

## Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
frontend/
├── app/                    # Next.js app directory
│   ├── dashboard/         # Dashboard page
│   ├── onboarding/        # Onboarding flow
│   ├── pricing-tiers/     # Pricing tiers management
│   ├── recommendations/   # AI recommendations page
│   ├── settings/          # Settings page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page (redirects to onboarding)
├── components/            # React components
│   ├── ui/               # UI component library (Radix-based)
│   ├── app-sidebar.tsx   # Application sidebar navigation
│   ├── dashboard-content.tsx
│   ├── onboarding-flow.tsx
│   ├── pricing-tiers-content.tsx
│   ├── recommendations-content.tsx
│   └── settings-content.tsx
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and helpers
├── public/               # Static assets
├── styles/               # Global styles
└── components.json       # UI components configuration
```

## Application Flow

### 1. Onboarding

New users start with a 4-step progressive onboarding process:

1. **Select Data Type**: Choose between Pricing Structures, Customer Behavior, or Competitive Data
2. **Choose Input Method**: Upload a file or enter data manually
3. **Data Entry**: Fill in tier information including pricing, features, and metrics
4. **Review & Confirm**: Review all entered data before submission

### 2. Dashboard

The main dashboard provides:
- Revenue metrics and trends
- Monthly recurring revenue (MRR) tracking
- Customer count and growth indicators
- Quick-access AI recommendations
- Revenue growth charts

### 3. Pricing Tiers

Manage all your pricing tiers with:
- Create, edit, and delete tiers
- Track key metrics (subscribers, MRR, conversion, churn)
- Monitor tier performance
- View tier status (Current, Rolled out, Beta, Planned)

### 4. AI Recommendations

Get intelligent pricing suggestions including:
- Price adjustment recommendations
- New tier suggestions
- Feature optimization advice
- Revenue impact predictions
- Confidence scores for each recommendation

### 5. Settings

Configure your workspace:
- Workspace information and team management
- Billing and subscription settings
- Notification preferences
- Integration management

## Features in Detail

### Data Entry Methods

TierTester supports two data entry methods:

1. **File Upload**: Import pricing data from CSV or Excel files
2. **Manual Entry**: Use intuitive forms to enter tier information

### Metrics Tracked

For each pricing tier, TierTester tracks:
- **Pricing**: Base price and currency
- **Subscribers**: Current customer count
- **MRR**: Monthly recurring revenue
- **Conversion Rate**: Percentage of trial/free users converting
- **Churn Rate**: Customer attrition rate
- **Features**: List of included features

### AI-Powered Insights

The AI recommendation engine analyzes:
- Market positioning
- Competitor pricing
- Customer behavior patterns
- Revenue optimization opportunities
- Churn risk factors

## Configuration

### Environment Variables

Create a `.env.local` file for environment-specific configuration:

```env
# Add your environment variables here
# Example:
# NEXT_PUBLIC_API_URL=https://api.tiertester.com
```

### UI Customization

The project uses Tailwind CSS with shadcn/ui components. Customize the theme in:
- `app/globals.css` - Global styles and CSS variables
- `components.json` - UI components configuration

## Build and Deployment

### Production Build

```bash
npm run build
```

This creates an optimized production build in the `.next` directory.

### Start Production Server

```bash
npm run start
```

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## Browser Support

TierTester supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary to TierTester.

## Support

For support and questions, please contact the development team or open an issue in the repository.

---

Built with ❤️ using Next.js and modern web technologies.
