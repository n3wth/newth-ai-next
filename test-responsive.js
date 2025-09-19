import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: false });

  // Test devices
  const devices = [
    { name: 'iPhone 14 Pro', viewport: { width: 393, height: 852 }, deviceScaleFactor: 3 },
    { name: 'iPad Pro', viewport: { width: 1024, height: 1366 }, deviceScaleFactor: 2 },
    { name: 'Desktop', viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 },
    { name: 'Samsung Galaxy S21', viewport: { width: 384, height: 854 }, deviceScaleFactor: 2.625 }
  ];

  const pages = ['/', '/projects', '/work'];

  for (const device of devices) {
    console.log(`\n📱 Testing on ${device.name}:`);
    const context = await browser.newContext({
      viewport: device.viewport,
      deviceScaleFactor: device.deviceScaleFactor,
      isMobile: device.viewport.width < 768
    });

    const page = await context.newPage();

    for (const path of pages) {
      await page.goto(`http://localhost:3001${path}`);
      await page.waitForLoadState('networkidle');

      // Check for horizontal scroll
      const hasHorizontalScroll = await page.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
      });

      // Check navigation visibility
      const navVisible = await page.isVisible('nav');

      // Check text readability
      const textSizes = await page.evaluate(() => {
        const h1 = document.querySelector('h1');
        const p = document.querySelector('p');
        return {
          h1: h1 ? window.getComputedStyle(h1).fontSize : null,
          p: p ? window.getComputedStyle(p).fontSize : null
        };
      });

      // Check for viewport meta tag
      const hasViewportMeta = await page.evaluate(() => {
        return !!document.querySelector('meta[name="viewport"]');
      });

      console.log(`  ${path}:`);
      console.log(`    ✓ Horizontal scroll: ${hasHorizontalScroll ? '❌ YES' : '✅ NO'}`);
      console.log(`    ✓ Navigation visible: ${navVisible ? '✅' : '❌'}`);
      console.log(`    ✓ H1 size: ${textSizes.h1 || 'N/A'}`);
      console.log(`    ✓ Body text size: ${textSizes.p || 'N/A'}`);
      console.log(`    ✓ Viewport meta: ${hasViewportMeta ? '✅' : '❌'}`);

      // Take screenshot
      await page.screenshot({
        path: `screenshots/${device.name.replace(' ', '-')}-${path.replace('/', 'home')}.png`,
        fullPage: false
      });
    }

    await context.close();
  }

  await browser.close();
  console.log('\n✅ Responsive testing complete! Check screenshots folder.');
})();