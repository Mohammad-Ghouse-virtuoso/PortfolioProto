// Project type definitions
export interface ProjectStack {
  frontend: string;
  backend: string;
  tooling: string;
}

export interface BaseProject {
  name: string;
  description: string;
  tech: string;
  link: string;
}

export interface ExtendedProject extends BaseProject {
  problem: string;
  solution: string;
  keyFeatures: string[];
  impact: string;
  stack: ProjectStack;
}

export type Project = BaseProject | ExtendedProject;

export const ASCII_ART = {
  avatar: `
    ╔═══════════════════════════════════════╗
    ║                                       ║
    ║        ███████╗ ██████╗██╗  ██╗     ║
    ║        ██╔════╝██╔════╝██║  ██║     ║
    ║        █████╗  ██║     ███████║     ║
    ║        ██╔══╝  ██║     ██╔══██║     ║
    ║        ███████╗╚██████╗██║  ██║     ║
    ║        ╚══════╝ ╚═════╝╚═╝  ╚═╝     ║
    ║                                       ║
    ║          T E R M I N A L              ║
    ║                                       ║
    ╚═══════════════════════════════════════╝
  `,
  
  logo: `
    ███████╗ ██████╗██╗  ██╗ ██████╗ 
    ██╔════╝██╔════╝██║  ██║██╔═══██╗
    █████╗  ██║     ███████║██║   ██║
    ██╔══╝  ██║     ██╔══██║██║   ██║
    ███████╗╚██████╗██║  ██║╚██████╔╝
    ╚══════╝ ╚═════╝╚═╝  ╚═╝ ╚═════╝ 
  `,
};

export const PROJECTS = [
  {
    name: 'eventify',
    description: 'Social-first event hub for discovery, RSVPs, and approvals',
    tech: 'React 18, Vite, TailwindCSS, FastAPI, SQLModel, JWT, Docker',
    link: 'https://github.com/yourusername/eventify',
    problem: `Finding and organizing events with people you actually know is messy. You bounce between WhatsApp threads, scattered links, and social feeds that drown you in irrelevant listings. Hosts can't see who's really attending, can't gate RSVPs for headcount or safety, and struggle to coordinate details for everything from a birthday dinner to a 200-guest wedding. Guests get lost in fragmented updates, while organizers waste time chasing confirmations instead of planning. There's no single place to discover trusted events near you—shared by friends, family, and close contacts—while also handling approvals, reminders, and check-ins. The result: poor turnout, over/under-catering, and stressed hosts.`,
    solution: `EventiFy is a social-first event hub that keeps discovery, RSVPs, and approvals in one flow. You see events around you—and from your contacts—so relevance stays high. Hosts can require RSVP approval to control capacity, capture preferences (e.g., "veg/non-veg", "bringing a plus-one"), and keep a live headcount. Guests confirm in one tap, get updates, and check in with secure QR codes. Evergreen events viz., intimate birthdays to weddings, karaoke nights, and music fests, organizers get clear attendance signals, streamlined planning, and a calmer path to a great event—all under the organizer's approval and oversight.`,
    keyFeatures: [
      'Event discovery and RSVP with attendee/organizer/admin roles',
      'Secure QR-based check-in: generate ticket, scan, and record attendance with live stats',
      'Organizer controls: create/manage events, view RSVPs, monitor check-ins',
      'Mobile-first UI with fast React + FastAPI stack for responsive browsing and actions',
    ],
    impact: `Reliable planning for everything from small gatherings to larger community events: clear headcounts, fewer no-shows via QR check-ins, and streamlined coordination so hosts spend more time on the experience and less on logistics.`,
    stack: {
      frontend: 'React 18, Vite, TailwindCSS; QR generation with qrcode, scanning with jsqr',
      backend: 'FastAPI, SQLModel, JWT auth; SQLite for dev with a Docker path to Postgres',
      tooling: 'Vitest (frontend), Pytest (backend), Docker Compose for services',
    },
  },
  {
    name: 'quantum-vault',
    description: 'Encrypted file storage with quantum-resistant algorithms',
    tech: 'Rust, WebAssembly, React',
    link: 'https://github.com/yourusername/quantum-vault',
  },
  {
    name: 'echo-terminal',
    description: 'You are here - A terminal-style portfolio experience',
    tech: 'Next.js, TypeScript, Framer Motion',
    link: 'https://github.com/yourusername/echo-terminal',
  },
];

export const THOUGHTS = [
  "The best code is the code you don't have to write.",
  "Debugging is like being a detective in a crime movie where you're also the murderer.",
  "There are two types of people: those who understand recursion and those who understand recursion.",
  "Code is poetry. Bugs are the typos.",
  "In a world of algorithms, be the edge case.",
  "The universe is written in the language of mathematics, but I prefer TypeScript.",
  "Every program attempts to expand until it can read mail.",
  "Simplicity is the ultimate sophistication.",
];

export const BOOKS = [
  {
    title: 'Gödel, Escher, Bach',
    author: 'Douglas Hofstadter',
    reflection: 'A masterpiece on recursion, consciousness, and strange loops.',
  },
  {
    title: 'The Three-Body Problem',
    author: 'Liu Cixin',
    reflection: 'Cosmic horror meets hard sci-fi. Mind-bending.',
  },
  {
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    reflection: 'Makes you question everything about human civilization.',
  },
];

export const PHILOSOPHY_TEXT = `
╔════════════════════════════════════════════════════════════╗
║                    /philosophy.txt                          ║
╠════════════════════════════════════════════════════════════╣
║                                                             ║
║  "We are the music makers, and we are the dreamers of     ║
║   dreams." - Arthur O'Shaughnessy                          ║
║                                                             ║
║  In the vast expanse of code and consciousness, we dance   ║
║  between order and chaos. Every function we write is a     ║
║  spell, every algorithm a prayer to the silicon gods.      ║
║                                                             ║
║  The terminal is not just a tool—it's a mirror reflecting  ║
║  the structured nature of thought itself. Commands are     ║
║  intentions made executable.                                ║
║                                                             ║
║  We build to understand. We debug to learn. We ship to     ║
║  connect. And in the end, what matters is not the code     ║
║  we leave behind, but the problems we solve and the        ║
║  humans we help along the way.                             ║
║                                                             ║
║  Keep typing. Keep dreaming. The echo awaits.              ║
║                                                             ║
╚════════════════════════════════════════════════════════════╝
`;

export const CONTACT_INFO = {
  email: 'your.email@example.com',
  linkedin: 'https://linkedin.com/in/yourprofile',
  github: 'https://github.com/yourusername',
  twitter: 'https://twitter.com/yourusername',
  website: 'https://yourwebsite.com',
};
