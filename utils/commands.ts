import { ASCII_ART, PROJECTS, THOUGHTS, BOOKS, PHILOSOPHY_TEXT, CONTACT_INFO } from '@/data/content';

export interface CommandResult {
  output: string;
  type: 'output' | 'error' | 'system';
}

export const COMMANDS: Record<string, string> = {
  help: 'Display available commands',
  whoami: 'Display user information and bio',
  'projects list': 'List all projects',
  'projects open [name]': 'Open a specific project',
  thoughts: 'Display random philosophical snippets',
  'books recent': 'Display recent books and reflections',
  'contact help': 'Display contact information',
  clear: 'Clear the terminal',
  'cat /philosophy.txt': 'Read the philosophy file (Easter egg)',
  sudo: 'Attempt superuser access (Easter egg)',
  'music on': 'Enable background music (coming soon)',
  'music off': 'Disable background music (coming soon)',
  'mode neo': 'Toggle Neo/Synthwave mode',
  exit: 'Exit the terminal',
  about: 'About Echo Terminal',
};

export function executeCommand(command: string, username: string): CommandResult {
  const trimmedCommand = command.trim().toLowerCase();

  switch (trimmedCommand) {
    case 'help':
      return {
        output: `
Available Commands:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${Object.entries(COMMANDS)
  .map(([cmd, desc]) => `  ${cmd.padEnd(25)} → ${desc}`)
  .join('\n')}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Type any command to explore. Tab for autocomplete (coming soon).
        `,
        type: 'output',
      };

    case 'whoami':
      return {
        output: `
${ASCII_ART.avatar}

╔════════════════════════════════════════════════════════════╗
║  Name: Your Name                                           ║
║  Role: Full-Stack Developer | Digital Architect            ║
║  Location: Somewhere in the Cloud                          ║
║  Status: [ONLINE] Building the future, one commit at a time║
╠════════════════════════════════════════════════════════════╣
║                                                             ║
║  "Code is the language of creation. Every line is a        ║
║   brushstroke in the canvas of possibility."               ║
║                                                             ║
║  Specialties:                                              ║
║    • Full-Stack Development (React, Node.js, Python)      ║
║    • Cloud Architecture (AWS, Azure)                       ║
║    • AI/ML Integration                                     ║
║    • Developer Experience Engineering                      ║
║                                                             ║
╚════════════════════════════════════════════════════════════╝
        `,
        type: 'output',
      };

    case 'projects list':
      return {
        output: `
Available Projects:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${PROJECTS.map(
  (project, index) => `
[${index + 1}] ${project.name}
    ${project.description}
    Tech Stack: ${project.tech}
    
    → Type: projects open ${project.name}
`
).join('\n')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        `,
        type: 'output',
      };

    case 'thoughts':
      const randomThought = THOUGHTS[Math.floor(Math.random() * THOUGHTS.length)];
      return {
        output: `
╔════════════════════════════════════════════════════════════╗
║  💭 Random Thought:                                        ║
╠════════════════════════════════════════════════════════════╣
║                                                             ║
║  "${randomThought}"
║                                                             ║
╚════════════════════════════════════════════════════════════╝
        `,
        type: 'output',
      };

    case 'books recent':
      return {
        output: `
Recent Reads:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${BOOKS.map(
  (book, index) => `
📚 ${book.title}
   by ${book.author}
   
   Reflection: ${book.reflection}
`
).join('\n')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        `,
        type: 'output',
      };

    case 'contact help':
      return {
        output: `
Contact Information:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  📧 Email:    ${CONTACT_INFO.email}
  💼 LinkedIn: ${CONTACT_INFO.linkedin}
  🐙 GitHub:   ${CONTACT_INFO.github}
  🐦 Twitter:  ${CONTACT_INFO.twitter}
  🌐 Website:  ${CONTACT_INFO.website}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Feel free to reach out for collaborations, opportunities,
or just to say hi! 👋
        `,
        type: 'output',
      };

    case 'cat /philosophy.txt':
      return {
        output: PHILOSOPHY_TEXT,
        type: 'output',
      };

    case 'sudo':
      return {
        output: `
╔════════════════════════════════════════════════════════════╗
║  ⚠️  ACCESS DENIED                                         ║
╠════════════════════════════════════════════════════════════╣
║                                                             ║
║  Nice try, ${username}.                                    ║
║                                                             ║
║  This incident will be reported to... nobody.              ║
║  Because this is a portfolio, not a real system. 😏        ║
║                                                             ║
║  But I appreciate your curiosity!                          ║
║                                                             ║
╚════════════════════════════════════════════════════════════╝
        `,
        type: 'error',
      };

    case 'clear':
      return {
        output: '[CLEARED]',
        type: 'system',
      };

    case 'mode neo':
      return {
        output: `
╔════════════════════════════════════════════════════════════╗
║  🌆 NEO MODE                                               ║
╠════════════════════════════════════════════════════════════╣
║                                                             ║
║  Toggling synthwave aesthetic...                           ║
║  "Welcome to the future."                                  ║
║                                                             ║
╚════════════════════════════════════════════════════════════╝
        `,
        type: 'system',
      };

    case 'about':
      return {
        output: `
${ASCII_ART.logo}

╔════════════════════════════════════════════════════════════╗
║  Echo Terminal v1.0.0                                      ║
╠════════════════════════════════════════════════════════════╣
║                                                             ║
║  A nostalgic, terminal-style personal portfolio            ║
║  experience blending storytelling, interaction, and        ║
║  retro-futuristic aesthetics.                              ║
║                                                             ║
║  Built with: Next.js, TypeScript, Framer Motion           ║
║  Created by: Your Name                                     ║
║                                                             ║
║  Type 'help' for available commands.                       ║
║                                                             ║
╚════════════════════════════════════════════════════════════╝
        `,
        type: 'output',
      };

    case 'exit':
      return {
        output: `
╔════════════════════════════════════════════════════════════╗
║                                                             ║
║  Connection terminated.                                    ║
║  Echo fading out...                                        ║
║                                                             ║
║  Thank you for visiting. Until next time. 👋               ║
║                                                             ║
╚════════════════════════════════════════════════════════════╝

[System will restart in 3 seconds...]
        `,
        type: 'system',
      };

    case 'music on':
    case 'music off':
      return {
        output: `
╔════════════════════════════════════════════════════════════╗
║  🎵 Music Control                                          ║
╠════════════════════════════════════════════════════════════╣
║                                                             ║
║  Feature coming soon!                                      ║
║  Stay tuned for ambient synthwave tracks.                  ║
║                                                             ║
╚════════════════════════════════════════════════════════════╝
        `,
        type: 'output',
      };

    default:
      // Check if it's a project open command
      if (trimmedCommand.startsWith('projects open ')) {
        const projectName = trimmedCommand.replace('projects open ', '').trim();
        const project = PROJECTS.find((p) => p.name.toLowerCase() === projectName);

        if (project) {
          return {
            output: `
╔════════════════════════════════════════════════════════════╗
║  📦 ${project.name.toUpperCase().padEnd(55)} ║
╠════════════════════════════════════════════════════════════╣
║                                                             ║
║  Description:                                              ║
║  ${project.description.padEnd(57)} ║
║                                                             ║
║  Tech Stack:                                               ║
║  ${project.tech.padEnd(57)} ║
║                                                             ║
║  Repository:                                               ║
║  ${project.link.padEnd(57)} ║
║                                                             ║
║  [Opening in new window...]                                ║
║                                                             ║
╚════════════════════════════════════════════════════════════╝
            `,
            type: 'output',
          };
        } else {
          return {
            output: `Error: Project '${projectName}' not found.\nType 'projects list' to see available projects.`,
            type: 'error',
          };
        }
      }

      return {
        output: `Command not found: ${command}\nType 'help' for available commands.`,
        type: 'error',
      };
  }
}
