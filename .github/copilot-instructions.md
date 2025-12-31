# Echo Terminal - AI Coding Agent Instructions

## Architecture Overview

This is a **Next.js 14 App Router** terminal-style portfolio with a specific data flow:

```
User Input → Terminal.tsx → executeCommand() → CommandResult → TerminalOutput.tsx
                  ↓
          useTerminalStore (Zustand) ← manages all terminal state
```

**Key architectural decisions:**
- All client components use `"use client"` directive (required for Framer Motion/Zustand)
- State is centralized in `store/terminalStore.ts` - never create component-local state for terminal data
- Commands are pure functions returning `CommandResult` objects in `utils/commands.ts`
- Content is decoupled from logic in `data/content.ts`

## File Responsibilities

| Directory | Purpose | When to modify |
|-----------|---------|----------------|
| `data/content.ts` | All portfolio content (projects, bio, quotes) | Adding/updating user content |
| `utils/commands.ts` | Command definitions and execution logic | Adding new terminal commands |
| `store/terminalStore.ts` | Zustand store for terminal state | Adding new state properties |
| `components/` | UI components with Framer Motion animations | Visual/interaction changes |
| `app/globals.css` | CRT effects, scanlines, glow animations | Aesthetic adjustments |
| `tailwind.config.ts` | `terminal.*` color tokens, custom animations | Theme changes |

## Adding New Commands

1. Add command description to `COMMANDS` object in `utils/commands.ts`
2. Add case to `executeCommand()` switch statement
3. Return `{ output: string, type: 'output' | 'error' | 'system' }`

```typescript
// Example pattern from existing commands:
case 'mycommand':
  return {
    output: `ASCII box or formatted text here`,
    type: 'output',
  };
```

**Special command behaviors** (handle in `Terminal.tsx`):
- `clear` → returns `[CLEARED]` sentinel, triggers `clearTerminal()`
- `mode neo` → toggles `neoMode` in store after adding output
- `exit` → delays 3s then resets to login screen

## Styling Conventions

- Use `terminal-*` color tokens: `terminal-bg`, `terminal-text`, `terminal-dim`, `terminal-glow`, `terminal-error`, `terminal-warning`
- CRT effects use classes: `.crt-screen`, `.scan-line`, `.text-glow`, `.terminal-cursor`
- All text must be monospace (`font-mono` class or JetBrains Mono)
- ASCII art boxes use `╔═╗║╚╝━` characters for consistency

## Development Commands

```bash
npm run dev    # Start dev server at localhost:3000
npm run build  # Production build (run before deploy)
npm run lint   # ESLint check
```

## Common Patterns

**Adding content to existing commands:** Edit arrays in `data/content.ts` (PROJECTS, THOUGHTS, BOOKS)

**Terminal line types:**
- `input` - User command echo (green, prefixed with prompt)
- `output` - Command response (default terminal green)
- `error` - Error messages (red via `terminal-error`)
- `system` - System messages (yellow via `terminal-warning`)

**Animation pattern:** All terminal output uses Framer Motion's `AnimatePresence` with `initial={{ opacity: 0, y: 10 }}` for consistency.

## State Shape (Zustand Store)

```typescript
{
  lines: TerminalLine[],  // All terminal output history
  isBooting: boolean,     // Shows BootScreen when true
  isLoggedIn: boolean,    // Shows LoginPrompt when false
  username: string,       // Displayed in prompt
  neoMode: boolean,       // Toggles synthwave glass effect
}
```

## Deployment

Configured for Vercel (`vercel.json`). Push to main branch triggers automatic deployment.
