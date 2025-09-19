# CLAUDE.md - ESSENTIAL ONLY (50 lines)

## CORE RULES (Your Actual Problems)

### 1. FIX TIMEOUTS (Your #1 Issue)
```bash
export BASH_DEFAULT_TIMEOUT_MS=600000  # Add to ~/.claude/settings.json
npm run dev &; sleep 3; kill %1        # Never leave running
```

### 2. PREVENT LOOPS
- Write fails → STOP, don't retry
- Always read BEFORE edit
- Error → Move on

### 3. BE TERSE
- No "Let me...", no explanations
- Response: "Done" or "Fixed"
- Ask for SCRIPTS not file reads: "Write script to replace X"

### 4. SKIP THESE
❌ Lighthouse audits
❌ Starting dev servers to "check"
❌ Reading entire files (use line ranges)

### 5. ALWAYS RUN
```bash
npm test && npm run type-check && npm run lint
```

## QUICK FIXES
```bash
# Module errors
rm -rf node_modules && npm install

# Stuck process
pkill -f "npm run"

# Context overflow
/compact
```

## TOKEN SAVERS
1. Reference line numbers: "line 45" not code blocks
2. Use MultiEdit for batches
3. Create scripts instead of reading many files
4. This file: <50 lines

## FAST TOOLS
rg > grep, fd > find, bat > cat

---
40 lines. Everything else is noise.