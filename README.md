# newth.ai - Personal Portfolio & Project Showcase

A modern, dark-themed portfolio website showcasing AI-powered development projects and tools.

## Features

- **Project Showcase**: Grid layout featuring all projects with filtering by status and tags
- **Newsletter Integration**: Email signup for weekly updates
- **Responsive Design**: Mobile-first approach with smooth animations
- **Dark Theme**: Inspired by r3.newth.ai aesthetic
- **Fast Performance**: Built with Next.js 15 and Turbopack

## Tech Stack

- Next.js 15 with App Router
- TypeScript
- Tailwind CSS
- Framer Motion animations
- Lucide React icons
- Vercel deployment

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
newth-ai-next/
├── app/
│   ├── page.tsx           # Homepage with featured projects
│   ├── projects/          # All projects page
│   ├── newsletter/        # Newsletter signup page
│   └── api/newsletter/    # Newsletter API endpoint
├── components/
│   ├── Navigation.tsx     # Site navigation
│   ├── Footer.tsx        # Site footer
│   ├── ProjectCard.tsx   # Project display card
│   └── NewsletterSignup.tsx
├── lib/
│   ├── projects.ts       # Project data and utilities
│   └── utils.ts          # Helper functions
└── public/               # Static assets
```

## Deployment to Vercel

1. Push to GitHub repository
2. Connect repository to Vercel
3. Deploy with default settings (already configured in vercel.json)

```bash
# Or deploy directly via CLI
vercel
```

## Newsletter Integration

The newsletter API endpoint (`/api/newsletter`) is ready for integration with email services:
- Mailchimp
- ConvertKit
- SendGrid
- Resend

Update `/app/api/newsletter/route.ts` with your chosen service.

## Environment Variables

Create `.env.local` for local development:

```
# Add your email service API keys here
MAILCHIMP_API_KEY=
MAILCHIMP_LIST_ID=
```

## Featured Projects

- **r3**: AI memory management system
- **Claude Code Extensions**: Developer productivity tools
- **Dashboard Platform**: Real-time analytics
- **YNAB Automation**: Budget automation tools
- Plus many more experimental projects

## License

MIT
