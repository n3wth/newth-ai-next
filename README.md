# newth.ai - Personal Portfolio & Project Showcase

A modern, dark-themed portfolio website showcasing AI-powered development projects and tools.

## Features

- **Project Showcase**: Grid layout featuring all projects with filtering by status and tags
- **Newsletter Integration**: Email signup for weekly updates
- **Responsive Design**: Mobile-first approach with smooth animations
- **Dark Theme**: Inspired by r3.newth.ai aesthetic
- **Instant Loading**: Server Components with dynamic imports for optimal performance
- **Performance Monitoring**: Vercel Analytics and Speed Insights integration
- **SEO Optimized**: Sitemap, robots.txt, and meta tags
- **PWA Ready**: Web app manifest and service worker support

## Tech Stack

- Next.js 15 with App Router
- TypeScript with strict type checking
- Tailwind CSS for styling
- Framer Motion animations
- Lucide React icons
- Vitest for unit testing
- Playwright for e2e testing
- Vercel Analytics & Speed Insights
- Vercel deployment

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run tests
npm run test:run

# Run e2e tests
npm run test:e2e

# Build for production
npm run build

# Start production server
npm start

# Run full validation
npm run validate
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

# Codex task automation
GITHUB_WEBHOOK_SECRET=
CODEX_API_URL=
CODEX_API_KEY=
# Optional: pin tasks to a specific Codex project
CODEX_PROJECT_ID=
```

### GitHub Webhook Automation

Codex can now create follow-up tasks automatically whenever a GitHub issue is opened or reopened.

1. Configure the environment variables above.
2. Add a GitHub webhook that points to `/api/webhooks/github`.
   - **Event type**: Issues
   - **Content type**: `application/json`
   - **Secret**: Matches `GITHUB_WEBHOOK_SECRET`
3. Codex will create a task using the issue title, body, labels, and metadata.

## Featured Projects

- **r3**: AI memory management system
- **Claude Code Extensions**: Developer productivity tools
- **Dashboard Platform**: Real-time analytics
- **YNAB Automation**: Budget automation tools
- Plus many more experimental projects

## License

MIT
