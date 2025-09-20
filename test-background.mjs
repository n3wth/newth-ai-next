import { chromium } from 'playwright';

async function testBackgroundLoading() {
  console.log('🧪 Testing background loading on homepage...');

  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    // Navigate to homepage
    await page.goto('http://localhost:3003', { waitUntil: 'networkidle' });

    // Wait a moment for background to load
    await page.waitForTimeout(3000);

    // Check if WarpBackground component is present
    const warpBackground = await page.locator('[class*="warp"]').first();
    const isWarpPresent = await warpBackground.count() > 0;

    // Check if any background animations are running
    const canvasElements = await page.locator('canvas').count();

    // Check for background container
    const backgroundContainers = await page.locator('[class*="background"], [class*="bg-"], .absolute.inset-0').count();

    // Take a screenshot for verification
    await page.screenshot({ path: 'homepage-background-test.png', fullPage: true });

    console.log('✅ Background Analysis:');
    console.log(`  🌊 Warp background elements: ${isWarpPresent ? 'FOUND' : 'NOT FOUND'}`);
    console.log(`  🎨 Canvas elements: ${canvasElements}`);
    console.log(`  📦 Background containers: ${backgroundContainers}`);
    console.log(`  📸 Screenshot saved: homepage-background-test.png`);

    // Check specific background element styling
    const heroSection = await page.locator('section[role="banner"]').first();
    if (await heroSection.count() > 0) {
      const backgroundStyle = await heroSection.evaluate(el => {
        const computedStyle = window.getComputedStyle(el);
        return {
          background: computedStyle.background,
          backgroundColor: computedStyle.backgroundColor,
          position: computedStyle.position,
          overflow: computedStyle.overflow
        };
      });
      console.log('  🎯 Hero section styles:', backgroundStyle);
    }

    // Check for lazy loading components
    const lazyComponents = await page.locator('[class*="lazy"], [class*="WarpBackgroundLazy"]').count();
    console.log(`  💫 Lazy loaded components: ${lazyComponents}`);

    if (isWarpPresent || canvasElements > 0 || backgroundContainers > 3) {
      console.log('✅ Background appears to be loading correctly!');
      return true;
    } else {
      console.log('⚠️ Background might not be loading properly');
      return false;
    }

  } catch (error) {
    console.error('❌ Test failed:', error.message);
    return false;
  } finally {
    await browser.close();
  }
}

testBackgroundLoading()
  .then(success => {
    console.log(success ? '🎉 Background test PASSED' : '❌ Background test FAILED');
    process.exit(success ? 0 : 1);
  })
  .catch(error => {
    console.error('❌ Test error:', error);
    process.exit(1);
  });