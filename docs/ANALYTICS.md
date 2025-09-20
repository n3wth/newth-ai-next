# Analytics Implementation

This document explains the privacy-friendly, GDPR-compliant analytics system implemented for tracking project card engagement.

## Overview

The analytics system tracks user interactions with project cards to understand which projects generate the most interest. It's designed with privacy as a first-class citizen and complies with GDPR requirements.

## Key Features

### Privacy-First Design

- **Session-based tracking**: No persistent user identification
- **GDPR compliant**: Includes consent management
- **Do Not Track respect**: Honors browser DNT header
- **Local data only**: No cross-site tracking
- **Transparent**: Users know exactly what data is collected

### Analytics Capabilities

- Project card click tracking (visit vs GitHub links)
- Position-based engagement metrics
- Device type detection (mobile/desktop)
- Session duration and activity tracking
- Real-time insights dashboard

## Implementation Details

### Core Components

#### 1. `useAnalytics` Hook (`/lib/hooks/useAnalytics.ts`)

Main analytics hook with these features:

- Event tracking with Vercel Analytics integration
- Session management with automatic timeout
- Consent management for GDPR compliance
- Local event queuing for debugging

```typescript
const { trackProjectClick, isTrackingAllowed } = useAnalytics({
  enableLocalStorage: false, // Keep data in memory only
  respectDoNotTrack: true, // Honor DNT header
  sessionTimeout: 30, // Minutes
})
```

#### 2. `AnalyticsProvider` (`/components/AnalyticsProvider.tsx`)

Context provider that wraps the app and provides:

- Global analytics state management
- Insights generation from raw events
- HOC for analytics-aware components

#### 3. `AnalyticsConsent` (`/components/AnalyticsConsent.tsx`)

GDPR-compliant consent banner with:

- Clear explanation of data collection
- Detailed privacy information
- Easy accept/decline options
- Dismissible without consent

#### 4. `AnalyticsDashboard` (`/components/AnalyticsDashboard.tsx`)

Live analytics dashboard showing:

- Top performing projects
- Click-through rates
- Engagement metrics
- Privacy status

### Integration in ProjectGrid

The `ProjectGridSimple` component now includes:

- Click tracking on project links
- Data attributes for debugging
- Position-aware engagement metrics

```typescript
// Example of tracked click
handleProjectClick(project.id, project.title, 'visit', index)
```

### Data Attributes

All project cards include data attributes for debugging:

```html
<div
  data-analytics-project-id="project-123"
  data-analytics-project-title="Amazing Project"
  data-analytics-position="0"
>
  <!-- Project content -->
  <a data-analytics-link-type="visit" href="https://project.com"> Visit </a>
</div>
```

## Privacy Compliance

### GDPR Compliance

- ✅ Explicit consent collection
- ✅ Clear purpose explanation
- ✅ Easy consent withdrawal
- ✅ Data minimization
- ✅ Transparent processing

### Data Collection

**What we track:**

- Project card clicks (which projects are popular)
- Link type preferences (visit vs GitHub)
- Position engagement (layout effectiveness)
- Basic device type (mobile vs desktop)

**What we DON'T track:**

- Personal identification
- Cross-site behavior
- Detailed device fingerprinting
- Location data
- Persistent user profiles

### Consent States

- `null`: No consent given yet (shows banner)
- `true`: Analytics enabled
- `false`: Analytics disabled (clears all data)

## Usage

### Basic Project Tracking

```typescript
import { useProjectAnalytics } from '@/lib/hooks/useAnalytics'

function MyComponent() {
  const { trackProjectClick } = useProjectAnalytics()

  const handleClick = () => {
    trackProjectClick('project-id', 'Project Title', 'visit', 0)
  }
}
```

### Advanced Analytics

```typescript
import { useAnalyticsContext } from '@/components/AnalyticsProvider'

function AdvancedComponent() {
  const { trackEvent, getInsights } = useAnalyticsContext()

  const handleCustomEvent = () => {
    trackEvent({
      name: 'custom_interaction',
      properties: { feature: 'advanced-feature' },
    })
  }

  const insights = getInsights()
}
```

### Viewing Analytics

#### Development Mode

Visit `/analytics` to see the analytics dashboard with detailed stats.

#### Production Mode

Analytics data is sent to Vercel Analytics and can be viewed in the Vercel dashboard.

## Configuration

### Environment Variables

No environment variables required - uses Vercel Analytics configuration.

### Provider Configuration

```typescript
<AnalyticsProvider
  enableConsentBanner={true}     // Show GDPR consent banner
  enableLocalStorage={false}     // Keep data in memory only
  respectDoNotTrack={true}       // Honor DNT header
  sessionTimeout={30}            // Session timeout in minutes
>
  {children}
</AnalyticsProvider>
```

## Development Tools

### Analytics Dashboard

- Live project engagement metrics
- Top performing projects ranking
- Click-through rate analysis
- Session activity summary

### Consent Status (Development Only)

Visual indicator showing current analytics consent state.

### Debugging

- Event queue inspection
- Session ID tracking
- Raw insights data export
- Performance metrics

## Testing

### Unit Tests

Analytics hooks and components include comprehensive tests covering:

- Event tracking functionality
- Consent management
- Privacy compliance
- Error handling

### Manual Testing

1. **Consent Flow**: Test accept/decline/dismiss options
2. **Event Tracking**: Verify project clicks are recorded
3. **Privacy Compliance**: Check DNT header respect
4. **Session Management**: Test timeout behavior

## Performance Considerations

### Optimizations

- Event batching for efficient network usage
- Session-based data to minimize storage
- Lazy loading of analytics dashboard
- Minimal impact on page load performance

### Monitoring

- Track analytics system performance
- Monitor event queue size
- Session timeout effectiveness
- User consent rates

## Security

### Data Protection

- No PII collection
- Session-scoped identifiers only
- Client-side data processing
- Secure event transmission

### Access Control

- Analytics dashboard requires proper authentication in production
- Development tools only available in dev mode
- Data export requires explicit user action

## Maintenance

### Regular Tasks

- Monitor consent rates and user feedback
- Review tracked events for relevance
- Update privacy policy as needed
- Analyze engagement patterns for insights

### Potential Improvements

- A/B testing for project card layouts
- Enhanced mobile analytics
- Performance correlation analysis
- User journey mapping

## Compliance Checklist

- ✅ GDPR Article 6 (Lawful basis)
- ✅ GDPR Article 7 (Consent)
- ✅ GDPR Article 13 (Information provision)
- ✅ GDPR Article 17 (Right to erasure)
- ✅ GDPR Article 21 (Right to object)
- ✅ ePrivacy Directive compliance
- ✅ Do Not Track respect
- ✅ Data minimization principle
- ✅ Purpose limitation
- ✅ Transparency requirements

This analytics implementation provides valuable insights while maintaining the highest standards of user privacy and regulatory compliance.
