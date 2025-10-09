# Echo Terminal

A nostalgic, terminal-style personal portfolio experience blending storytelling, interaction, and retro-futuristic aesthetics.

![Echo Terminal](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## ✨ Features

- 🖥️ **Authentic Terminal Experience**: Command-line interface with full interaction
- 🎨 **CRT Screen Effects**: Nostalgic scanlines, flicker, and glow animations
- 🌊 **Smooth Animations**: Powered by Framer Motion
- 🎭 **Neo Mode**: Toggle synthwave aesthetic
- 📱 **Fully Responsive**: Works seamlessly on mobile and desktop
- 🎯 **Type-Safe**: Built with TypeScript
- 🚀 **Fast & Optimized**: Next.js 14 with App Router

## 🎮 Available Commands

```bash
help                    # Display available commands
whoami                  # Display user information and bio
projects list           # List all projects
projects open [name]    # Open a specific project
thoughts                # Display random philosophical snippets
books recent            # Display recent books and reflections
contact help            # Display contact information
cat /philosophy.txt     # Read the philosophy file (Easter egg)
sudo                    # Attempt superuser access (Easter egg)
mode neo                # Toggle Neo/Synthwave mode
clear                   # Clear the terminal
about                   # About Echo Terminal
exit                    # Exit the terminal
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/echo-terminal.git
cd echo-terminal
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Update Personal Information

Edit the content in `/data/content.ts`:

- **ASCII Art**: Customize the terminal logo and avatar
- **Projects**: Add your projects with descriptions and links
- **Thoughts**: Add your philosophical snippets
- **Books**: Add books you're reading with reflections
- **Contact Info**: Update your social links and contact details

### Styling

The visual style is controlled through:
- `/app/globals.css`: CRT effects, animations, and global styles
- `/tailwind.config.ts`: Color scheme and design tokens

### Commands

Add or modify commands in `/utils/commands.ts`:

```typescript
export function executeCommand(command: string, username: string): CommandResult {
  // Add your custom commands here
}
```

## 🏗️ Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles & CRT effects
├── components/
│   ├── Terminal.tsx        # Main terminal component
│   ├── BootScreen.tsx      # Boot animation
│   ├── LoginPrompt.tsx     # Login screen
│   ├── TerminalInput.tsx   # Input component
│   └── TerminalOutput.tsx  # Output renderer
├── data/
│   └── content.ts          # Content configuration
├── store/
│   └── terminalStore.ts    # Zustand state management
├── utils/
│   └── commands.ts         # Command execution logic
└── public/                 # Static assets
```

## 🎯 Roadmap

- [x] Core terminal interface
- [x] CRT screen effects
- [x] Command system
- [x] Neo mode toggle
- [ ] Command history (up/down arrows)
- [ ] Tab autocomplete
- [ ] Background music toggle
- [ ] Local storage memory
- [ ] Blog integration
- [ ] API integrations (Spotify, Goodreads)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - feel free to use this project for your own portfolio!

## 🙏 Acknowledgments

- Inspired by classic terminal interfaces
- Built with [Next.js](https://nextjs.org/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

## 📧 Contact

Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/echo-terminal](https://github.com/yourusername/echo-terminal)

---

⚡ Built with passion and a love for terminals. Type away and explore! ⚡
