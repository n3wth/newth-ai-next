const { chromium } = require('playwright');

async function verifyWebsite() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    // 1. Navigate to homepage
    console.log('Navigating to http://localhost:3000...');
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'homepage-screenshot.png', fullPage: true });
    console.log('✅ Homepage screenshot saved as homepage-screenshot.png');

    // 2. Click on Projects link
    console.log('Looking for Projects link...');
    const projectsLink = page.locator('a:has-text("Projects"), a[href*="project"]').first();
    if (await projectsLink.count() > 0) {
      await projectsLink.click();
      await page.waitForLoadState('networkidle');
      await page.screenshot({ path: 'projects-screenshot.png', fullPage: true });
      console.log('✅ Projects page screenshot saved as projects-screenshot.png');
    } else {
      console.log('⚠️ Projects link not found on homepage');
    }

    // 3. Navigate back to homepage and click Newsletter link
    console.log('Going back to homepage for Newsletter link...');
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');

    const newsletterLink = page.locator('a:has-text("Newsletter"), a[href*="newsletter"]').first();
    if (await newsletterLink.count() > 0) {
      await newsletterLink.click();
      await page.waitForLoadState('networkidle');
      await page.screenshot({ path: 'newsletter-screenshot.png', fullPage: true });
      console.log('✅ Newsletter page screenshot saved as newsletter-screenshot.png');
    } else {
      console.log('⚠️ Newsletter link not found on homepage');
    }

  } catch (error) {
    console.error('Error during verification:', error);
  } finally {
    await browser.close();
  }
}

verifyWebsite().catch(console.error);