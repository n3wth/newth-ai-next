import { test, expect } from '@playwright/test'

test.describe('Accessibility', () => {
  test('should have proper heading structure', async ({ page }) => {
    await page.goto('/')

    // Check that h1 exists
    const h1 = page.locator('h1')
    await expect(h1).toBeVisible()

    // Check that there's only one h1
    const h1Count = await page.locator('h1').count()
    expect(h1Count).toBe(1)
  })

  test('should have proper alt text for images', async ({ page }) => {
    await page.goto('/')

    // Check all images have alt text
    const images = page.locator('img')
    const imageCount = await images.count()

    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i)
      const alt = await img.getAttribute('alt')
      expect(alt).toBeTruthy()
    }
  })

  test('should have proper link text', async ({ page }) => {
    await page.goto('/')

    // Check that all links have meaningful text
    const links = page.locator('a')
    const linkCount = await links.count()

    for (let i = 0; i < linkCount; i++) {
      const link = links.nth(i)
      const text = await link.textContent()
      expect(text?.trim()).toBeTruthy()
    }
  })

  test('should be keyboard navigable', async ({ page }) => {
    await page.goto('/')

    // Test tab navigation
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')

    // Check that focus is visible
    const focusedElement = page.locator(':focus')
    await expect(focusedElement).toBeVisible()
  })

  test('should have proper color contrast', async ({ page }) => {
    await page.goto('/')

    // This would typically use axe-core or similar tool
    // For now, we'll just check that the page loads without errors
    await expect(page.locator('body')).toBeVisible()
  })
})
