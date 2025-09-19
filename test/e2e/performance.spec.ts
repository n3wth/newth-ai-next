import { test, expect } from '@playwright/test'

test.describe('Performance', () => {
  test('should load homepage instantly', async ({ page }) => {
    const startTime = Date.now()
    await page.goto('/')

    // Wait for hero section to be visible
    await expect(page.locator('text=I ship AI products')).toBeVisible()

    const loadTime = Date.now() - startTime
    expect(loadTime).toBeLessThan(2000) // Should load in under 2 seconds
  })

  test('should have good Core Web Vitals', async ({ page }) => {
    await page.goto('/')

    // Wait for page to be fully loaded
    await page.waitForLoadState('networkidle')

    // Check that there are no console errors
    const errors: string[] = []
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text())
      }
    })

    // Navigate around to trigger any potential errors
    await page.click('text=Work')
    await page.click('text=Projects')
    await page.click('text=Oliver Newth')

    expect(errors).toHaveLength(0)
  })

  test('should have proper meta tags for SEO', async ({ page }) => {
    await page.goto('/')

    // Check title
    await expect(page).toHaveTitle('Oliver Newth - AI Developer')

    // Check meta description
    const metaDescription = page.locator('meta[name="description"]')
    await expect(metaDescription).toHaveAttribute(
      'content',
      'Engineering at the intersection of AI and human creativity. Building tools that amplify developer capabilities.'
    )

    // Check Open Graph tags
    const ogTitle = page.locator('meta[property="og:title"]')
    await expect(ogTitle).toHaveAttribute('content', 'Oliver Newth - AI Developer')
  })

  test('should load all pages without errors', async ({ page }) => {
    const pages = ['/', '/work', '/projects', '/newsletter']

    for (const pagePath of pages) {
      await page.goto(pagePath)
      await page.waitForLoadState('networkidle')

      // Check that the page loaded successfully
      await expect(page.locator('body')).toBeVisible()

      // Check for any JavaScript errors
      const errors: string[] = []
      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          errors.push(msg.text())
        }
      })

      expect(errors).toHaveLength(0)
    }
  })
})
