import { test, expect } from '@playwright/test'

test.describe('Navigation', () => {
  test('should navigate between pages', async ({ page }) => {
    await page.goto('/')

    // Test navigation to work page
    await page.click('text=Work')
    await expect(page).toHaveURL('/work')
    await expect(page.locator('h1')).toContainText('A decade of')

    // Test navigation to projects page
    await page.click('text=Projects')
    await expect(page).toHaveURL('/projects')
    await expect(page.locator('h1')).toContainText('All Projects')

    // Test navigation back to home
    await page.click('text=Oliver Newth')
    await expect(page).toHaveURL('/')
  })

  test('should open external links in new tab', async ({ page, context }) => {
    await page.goto('/')

    // Test GitHub link
    const [githubPage] = await Promise.all([
      context.waitForEvent('page'),
      page.click('text=GitHub'),
    ])
    await expect(githubPage).toHaveURL('https://github.com/n3wth')
    await githubPage.close()

    // Test LinkedIn link
    const [linkedinPage] = await Promise.all([
      context.waitForEvent('page'),
      page.click('text=LinkedIn'),
    ])
    await expect(linkedinPage).toHaveURL('https://linkedin.com/in/newth')
    await linkedinPage.close()
  })

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')

    // Check mobile menu button is visible
    await expect(page.locator('[aria-label="Toggle menu"]')).toBeVisible()

    // Check desktop navigation is hidden
    await expect(page.locator('text=Projects').first()).not.toBeVisible()
  })
})
