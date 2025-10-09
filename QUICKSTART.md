# Echo Terminal - Quick Start Guide

## 🎯 Project Overview

You now have a fully functional terminal-style portfolio application! The Echo Terminal is live and running.

## 🚀 Current Status

✅ Project structure created
✅ All dependencies installed
✅ Development server running at http://localhost:3000
✅ CRT effects and animations configured
✅ Command system implemented
✅ State management with Zustand
✅ Responsive design with Tailwind CSS

## 🎮 What You Can Do Now

### 1. View Your Portfolio
Open your browser and go to: **http://localhost:3000**

You'll see:
- Boot animation with loading sequence
- Login prompt (type any username like "guest")
- Interactive terminal interface

### 2. Try These Commands

Once logged in, type any of these commands:

```bash
help                    # See all available commands
whoami                  # View your profile
projects list           # See your projects
thoughts                # Get random thoughts
books recent            # See your reading list
contact help            # View contact information
cat /philosophy.txt     # Easter egg!
sudo                    # Easter egg!
mode neo                # Toggle Neo/Synthwave mode
clear                   # Clear the screen
exit                    # Exit terminal
```

## 🎨 Customization Guide

### Step 1: Update Your Personal Info

Edit `/data/content.ts` and update:

```typescript
// Your contact information
export const CONTACT_INFO = {
  email: 'your.email@example.com',        // ← Change this
  linkedin: 'https://linkedin.com/in/yourprofile',  // ← Change this
  github: 'https://github.com/yourusername',        // ← Change this
  twitter: 'https://twitter.com/yourusername',      // ← Change this
  website: 'https://yourwebsite.com',               // ← Change this
};

// Your projects
export const PROJECTS = [
  {
    name: 'your-project-name',
    description: 'Project description',
    tech: 'Tech stack',
    link: 'https://github.com/...',
  },
  // Add more projects...
];

// Your thoughts/quotes
export const THOUGHTS = [
  "Your philosophical quote here",
  // Add more...
];

// Your reading list
export const BOOKS = [
  {
    title: 'Book Title',
    author: 'Author Name',
    reflection: 'Your thoughts on the book',
  },
  // Add more...
];
```

### Step 2: Customize the "whoami" Command

Edit `/utils/commands.ts` at line ~35 to update your bio:

```typescript
case 'whoami':
  return {
    output: `
${ASCII_ART.avatar}

╔════════════════════════════════════════════════════════════╗
║  Name: Your Name                                           ║  ← Change this
║  Role: Full-Stack Developer | Digital Architect            ║  ← Change this
║  Location: Somewhere in the Cloud                          ║  ← Change this
║  Status: [ONLINE] Building the future, one commit at a time║  ← Change this
╠════════════════════════════════════════════════════════════╣
║                                                             ║
║  "Your personal quote here"                                ║  ← Change this
║                                                             ║
║  Specialties:                                              ║
║    • Your skill 1                                          ║  ← Change these
║    • Your skill 2                                          ║  ← Change these
║    • Your skill 3                                          ║  ← Change these
║                                                             ║
╚════════════════════════════════════════════════════════════╝
    `,
    type: 'output',
  };
```

### Step 3: Customize Colors & Styling

Edit `/tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  terminal: {
    bg: '#0a0e14',        // Background color
    text: '#00ff41',      // Main text color (green)
    dim: '#008f2d',       // Dimmed text
    glow: '#00ff41',      // Glow color
    error: '#ff4444',     // Error messages
    warning: '#ffaa00',   // Warning messages
  },
},
```

Popular alternative color schemes:
- **Classic Amber**: `#ffb000` (like old terminals)
- **Matrix Green**: `#00ff41` (current)
- **Cyberpunk Pink**: `#ff006e`
- **Retro Orange**: `#ff6b35`

### Step 4: Add Your Own Commands

Edit `/utils/commands.ts` and add new cases:

```typescript
case 'your-command':
  return {
    output: `Your command output here`,
    type: 'output',
  };
```

Don't forget to add it to the COMMANDS list at the top of the file!

## 🛠️ Development Commands

```bash
npm run dev      # Start development server (already running!)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📁 Project Structure

```
PortfolioProto/
├── app/
│   ├── layout.tsx          # Main layout with fonts
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles & CRT effects
├── components/
│   ├── Terminal.tsx        # Main terminal logic
│   ├── BootScreen.tsx      # Boot animation
│   ├── LoginPrompt.tsx     # Login screen
│   ├── TerminalInput.tsx   # Command input
│   └── TerminalOutput.tsx  # Output renderer
├── data/
│   └── content.ts          # ← Edit this for your content!
├── store/
│   └── terminalStore.ts    # State management
├── utils/
│   └── commands.ts         # ← Add/edit commands here!
└── README.md              # Full documentation
```

## 🎯 Next Steps

1. **Customize Content**: Update `/data/content.ts` with your information
2. **Personalize Commands**: Edit `/utils/commands.ts` to add your own commands
3. **Deploy**: When ready, deploy to Vercel (see README.md)
4. **Add Features**: See the roadmap in README.md for ideas

## 🚀 Deployment to Vercel

When you're ready to deploy:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments!

## 🎨 Tips & Tricks

1. **Try Neo Mode**: Type `mode neo` for synthwave aesthetics
2. **Easter Eggs**: Try `sudo` or `cat /philosophy.txt`
3. **Clear Screen**: Type `clear` to start fresh
4. **Mobile Friendly**: The terminal works great on mobile too!

## 📧 Questions?

Check out the full README.md for more details, or explore the code!

---

**Your Echo Terminal is ready! 🎉**

Visit http://localhost:3000 and start exploring!
