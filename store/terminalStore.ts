import { create } from 'zustand';

export interface TerminalLine {
  id: string;
  type: 'input' | 'output' | 'error' | 'system';
  content: string;
  timestamp: Date;
}

interface TerminalStore {
  lines: TerminalLine[];
  currentInput: string;
  isBooting: boolean;
  isLoggedIn: boolean;
  username: string;
  neoMode: boolean;
  
  addLine: (line: Omit<TerminalLine, 'id' | 'timestamp'>) => void;
  setCurrentInput: (input: string) => void;
  setBooting: (isBooting: boolean) => void;
  setLoggedIn: (isLoggedIn: boolean) => void;
  setUsername: (username: string) => void;
  toggleNeoMode: () => void;
  clearTerminal: () => void;
}

export const useTerminalStore = create<TerminalStore>((set) => ({
  lines: [],
  currentInput: '',
  isBooting: true,
  isLoggedIn: false,
  username: 'guest',
  neoMode: false,
  
  addLine: (line) =>
    set((state) => ({
      lines: [
        ...state.lines,
        {
          ...line,
          id: `${Date.now()}-${Math.random()}`,
          timestamp: new Date(),
        },
      ],
    })),
  
  setCurrentInput: (input) => set({ currentInput: input }),
  
  setBooting: (isBooting) => set({ isBooting }),
  
  setLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
  
  setUsername: (username) => set({ username }),
  
  toggleNeoMode: () => set((state) => ({ neoMode: !state.neoMode })),
  
  clearTerminal: () => set({ lines: [] }),
}));
