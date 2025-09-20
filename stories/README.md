# Storybook Development Guidelines

## ⚠️ IMPORTANT: NO MDX FILES

**This Storybook uses TypeScript (.tsx) files only.** MDX is not configured and will cause build errors.

✅ **DO:** Create `.stories.tsx` files
❌ **DON'T:** Create `.stories.mdx` files

All documentation should be implemented as React components within `.stories.tsx` files.

## Storybook Component Organization

## Scalable Structure

```
stories/
├── components/          # Reusable UI components
│   ├── Button.stories.tsx
│   ├── WarpBackground.stories.tsx
│   └── ...
├── sections/           # Page sections
│   └── HeroSection.stories.tsx
├── layouts/            # Layout components
│   └── Navigation.stories.tsx
└── patterns/           # Common UI patterns
    └── Cards.stories.tsx
```

## Best Practices

1. **Co-location Alternative**: Consider moving stories next to components:
   - `components/ui/button.tsx`
   - `components/ui/button.stories.tsx`

2. **Shared Decorators**: Use `.storybook/preview.tsx` for common wrappers

3. **Auto-generation**: Use a script to generate stories from components:

   ```bash
   npx @componentdriven/storybook-generate
   ```

4. **Component Driven Development**:
   - Build components in isolation first
   - Test all states/variants
   - Document props with controls

5. **Performance**:
   - Lazy load heavy components
   - Use `parameters.docs.disable` for animation-heavy stories

## Quick Commands

```bash
# Generate new story
npx storybook generate component-name

# Run Storybook
npm run storybook

# Build static Storybook
npm run build-storybook
```
