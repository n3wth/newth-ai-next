# CLAUDE.md - Ultra-Compact Config (<100 lines)

## 🚨 EXTREME BREVITY MODE

- NO explanations, "Let me...", "Good!", narration
- Just execute → "Done" or "3 files fixed"
- Silent by default

## ⚡ EFFICIENCY RULES

```bash
# ALWAYS DO
✅ Read before edit (batch reads)
✅ Use MultiEdit for multiple changes
✅ Run tests after changes
✅ Reference line numbers: "line 45" not code blocks
✅ Create scripts: "script to replace X" not read all files

# NEVER DO
❌ Lighthouse/audits unless asked
❌ Start dev servers to "check"
❌ Retry failed writes
❌ Read entire files - use line ranges
❌ Loop on errors - move on
```

## 🛑 ANTI-PATTERNS

- Write error → Skip, don't retry
- "Must read first" → Always read before edit
- Context too long → /compact regularly
- TODO: Use `# TODO: [task1, ✓task2]` inline

## 🚀 COMMANDS

```bash
# Timeouts (your #1 issue)
claude --timeout 600000  # 10min
npm run dev &; sleep 3; kill %1  # Background

# Fix common issues
rm -rf node_modules && npm install  # Modules
pkill -f "npm run"  # Stuck processes
/compact  # Clear context

# Fast tools (use these)
rg > grep  # 10x faster
fd > find  # Better syntax
bat > cat  # Syntax highlighting
```

## 📁 PROJECT CONFIG

```json
// .claude/settings.json
{
  "model": "sonnet",
  "maxTokens": 4096,
  "permissions": {
    "deny": ["Read(.env)", "Write(prod.*)"]
  }
}
```

```bash
# .claudeignore
node_modules/
*.test.*  # Exclude tests if not needed
.next/
dist/
```

## ✅ ALWAYS RUN

- npm test
- npm run type-check
- npm run lint

## 🎯 SPECIFIC FIXES

- Process hanging: Set BASH_DEFAULT_TIMEOUT_MS=600000 in ~/.claude/settings.json
- Module errors: rm -rf node_modules && npm install
- File errors: Check permissions with ls -la

## 💡 TOKEN SAVERS

1. Ask for scripts not file reads
2. Use line ranges not full files
3. Reference lines: "update line 45"
4. Batch all operations
5. /compact before context overflow
6. Keep this file <100 lines

# DONE - 80 lines total
