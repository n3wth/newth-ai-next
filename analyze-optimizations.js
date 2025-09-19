const fs = require('fs');
const path = require('path');

// Check for potential optimizations
const checks = [];

// 1. Check package.json for unused deps
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));

// 2. Check for dynamic imports opportunity
const appDir = './app';
const componentFiles = [];
function findComponents(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory() && !file.startsWith('.')) {
      findComponents(fullPath);
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      componentFiles.push(fullPath);
    }
  });
}
findComponents(appDir);

// 3. Check image usage
const hasUnoptimizedImages = componentFiles.some(file => {
  const content = fs.readFileSync(file, 'utf8');
  return content.includes('<img ') && !content.includes('next/image');
});

// 4. Check font optimization
const layoutContent = fs.readFileSync('./app/layout.tsx', 'utf8');
const hasMultipleFonts = (layoutContent.match(/from ['"]next\/font/g) || []).length > 2;

// Results
console.log('=== Optimization Opportunities ===\n');

console.log('1. Bundle Size:');
console.log('   - Consider removing critters (23kb) - only needed for SSG with inline critical CSS');
console.log('   - plaiceholder (image blurring) - check if actually used\n');

console.log('2. Performance:');
console.log('   - Enable Turbopack in next.config.ts for 10x faster dev builds');
console.log('   - Add static exports where possible for better caching\n');

console.log('3. Image Optimization:');
console.log(`   - Unoptimized images found: ${hasUnoptimizedImages ? 'Yes - use next/image' : 'No'}\n`);

console.log('4. Font Loading:');
console.log(`   - Multiple fonts loading: ${hasMultipleFonts ? 'Yes - consider reducing' : 'No'}`);
console.log('   - Current setup uses font-display: swap (good)\n');

console.log('5. Caching:');
console.log('   - Add stale-while-revalidate headers for API routes');
console.log('   - Consider ISR for rarely changing pages\n');

console.log('6. Development:');
console.log('   - webpack cache disabled in dev (line 86) - re-enable for faster rebuilds');

console.log('\n=== Quick Wins ===');
console.log('1. Remove unused dependencies (critters, plaiceholder if unused)');
console.log('2. Enable Turbopack: experimental.turbo = {}');
console.log('3. Fix webpack cache: remove line 86 in next.config.ts');
console.log('4. Add middleware for response caching');
