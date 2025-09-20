# Next.js Development Optimization Guide

## ✅ Status Update

- **Chrome cache cleared**: ~2.1GB recovered
- **Next-server memory issue**: Process no longer running (was consuming 2.7GB)
- **Current memory usage**: Much improved

## 🚀 Next.js Memory Optimization Strategies

### 1. Development Server Optimization

#### Memory-Optimized Dev Script

Add to `package.json`:

```json
{
  "scripts": {
    "dev:light": "NODE_OPTIONS='--max-old-space-size=4096' next dev --turbo",
    "dev:minimal": "NODE_OPTIONS='--max-old-space-size=2048' next dev",
    "dev:production": "NODE_ENV=production next dev"
  }
}
```

#### Environment Variables for Development

Create/update `.env.local`:

```bash
# Memory optimization
NODE_OPTIONS=--max-old-space-size=4096

# Development optimizations
NEXT_TELEMETRY_DISABLED=1
DISABLE_ESLINT_PLUGIN=true

# Turbo optimizations
TURBOPACK_ISSUE_TIMEOUT=30000
```

### 2. Next.js Configuration Optimization

Update `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Memory optimizations
  experimental: {
    turbo: {
      memoryLimit: 4096, // 4GB limit for Turbopack
    },
    cpus: 8, // Limit CPU usage
  },

  // Build optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Development optimizations
  onDemandEntries: {
    maxInactiveAge: 30 * 1000, // 30 seconds
    pagesBufferLength: 5, // Limit pages in memory
  },

  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Reduce memory usage in development
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          framework: {
            chunks: 'all',
            name: 'framework',
            test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
            priority: 40,
            enforce: true,
          },
        },
      }
    }
    return config
  },
}

module.exports = nextConfig
```

### 3. Package.json Optimizations

Update scripts for better resource management:

```json
{
  "scripts": {
    "dev": "next dev --turbo",
    "dev:light": "NODE_OPTIONS='--max-old-space-size=4096' next dev --turbo",
    "dev:watch": "NODE_OPTIONS='--max-old-space-size=2048' next dev",
    "build:analyze": "ANALYZE=true npm run build",
    "clean": "rm -rf .next && npm run dev",
    "memory-check": "ps aux | grep next | grep -v grep"
  }
}
```

### 4. Development Best Practices

#### Memory Monitoring Commands

```bash
# Check current Next.js processes
ps aux | grep next | grep -v grep

# Monitor memory usage during development
top -pid $(pgrep -f "next dev")

# Clear Next.js cache when memory gets high
rm -rf .next/cache

# Restart dev server with memory limit
NODE_OPTIONS='--max-old-space-size=4096' npm run dev
```

#### Smart Development Workflow

```bash
# 1. Start with memory monitoring
npm run memory-check

# 2. Run optimized dev server
npm run dev:light

# 3. If memory issues persist, restart with clean cache
npm run clean

# 4. For production testing with less memory
npm run dev:production
```

### 5. System-Level Optimizations

#### Process Management

Create `~/next-manager.sh`:

```bash
#!/bin/bash

# Next.js Process Manager
case "$1" in
  "start")
    echo "🚀 Starting Next.js with memory optimization..."
    cd ~/GitHub/newth-ai-next-v1
    NODE_OPTIONS='--max-old-space-size=4096' npm run dev &
    echo $! > ~/.next-dev.pid
    ;;
  "stop")
    echo "🛑 Stopping Next.js dev server..."
    kill $(cat ~/.next-dev.pid 2>/dev/null) 2>/dev/null
    rm -f ~/.next-dev.pid
    ;;
  "restart")
    $0 stop
    sleep 2
    $0 start
    ;;
  "status")
    if [ -f ~/.next-dev.pid ]; then
      pid=$(cat ~/.next-dev.pid)
      if ps -p $pid > /dev/null; then
        echo "✅ Next.js running (PID: $pid)"
        ps aux | grep $pid | grep -v grep
      else
        echo "❌ Next.js not running (stale PID file)"
      fi
    else
      echo "❌ Next.js not running"
    fi
    ;;
  "memory")
    ps aux | grep "next dev" | grep -v grep | awk '{print "PID: "$2" CPU: "$3"% MEM: "$4"% RSS: "$6/1024"MB"}'
    ;;
  *)
    echo "Usage: $0 {start|stop|restart|status|memory}"
    ;;
esac
```

#### Shell Aliases

Add to `~/.zshrc`:

```bash
# Next.js development aliases
alias nextstart='~/next-manager.sh start'
alias nextstop='~/next-manager.sh stop'
alias nextrestart='~/next-manager.sh restart'
alias nextstatus='~/next-manager.sh status'
alias nextmem='~/next-manager.sh memory'

# Quick project navigation
alias cdnext='cd ~/GitHub/newth-ai-next-v1'

# Memory-optimized development
alias devlight='NODE_OPTIONS="--max-old-space-size=4096" npm run dev'
alias devmini='NODE_OPTIONS="--max-old-space-size=2048" npm run dev'
```

### 6. Troubleshooting Memory Issues

#### When Next.js Consumes Too Much Memory:

1. **Immediate Action**:

   ```bash
   # Kill memory-heavy Next.js process
   pkill -f "next dev"

   # Clear cache
   rm -rf .next/cache

   # Restart with memory limit
   NODE_OPTIONS='--max-old-space-size=4096' npm run dev
   ```

2. **Preventive Measures**:

   ```bash
   # Monitor memory during development
   watch -n 5 'ps aux | grep next | grep -v grep'

   # Set up automatic restart if memory exceeds threshold
   # (Add to crontab or create monitoring script)
   ```

3. **Project-Specific Fixes**:

   ```bash
   # Check for memory leaks in components
   npm run build -- --debug

   # Analyze bundle size
   npx @next/bundle-analyzer
   ```

### 7. Chrome Integration

Use the new optimized Chrome aliases:

```bash
# Memory-optimized Chrome for testing
chrome-light
chrome-canary-light
```

### 8. Development Environment Setup

#### One-time Setup:

```bash
# Make next manager executable
chmod +x ~/next-manager.sh

# Add to PATH for easy access
echo 'export PATH="$HOME:$PATH"' >> ~/.zshrc

# Source new aliases
source ~/.zshrc
```

#### Daily Workflow:

```bash
# Start development session
cdnext && nextstatus && npm run dev:light

# Monitor memory periodically
nextmem

# Clean restart if needed
nextrestart
```

## 🎯 Expected Results

With these optimizations:

- **Memory usage**: 1-2GB instead of 2.7GB
- **Startup time**: 30-50% faster
- **Build performance**: Improved with Turbopack
- **Development stability**: Fewer crashes and freezes

## 📊 Monitoring Commands

```bash
# Real-time memory monitoring
watch -n 2 'ps aux | grep next | grep -v grep | head -5'

# Check optimization effectiveness
echo "Before: 2.7GB | Current: $(ps aux | grep "next dev" | grep -v grep | awk '{print $6/1024}')MB"
```
