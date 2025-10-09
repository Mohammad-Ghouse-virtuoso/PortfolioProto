"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { TerminalLine } from '@/store/terminalStore';

interface TerminalOutputProps {
  lines: TerminalLine[];
}

export default function TerminalOutput({ lines }: TerminalOutputProps) {
  return (
    <AnimatePresence>
      {lines.map((line) => (
        <motion.div
          key={line.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={`mb-2 ${
            line.type === 'input'
              ? 'text-terminal-glow'
              : line.type === 'error'
              ? 'text-terminal-error'
              : line.type === 'system'
              ? 'text-terminal-warning'
              : 'text-terminal-text'
          }`}
        >
          <pre className="font-mono text-xs md:text-sm whitespace-pre-wrap break-words">
            {line.content}
          </pre>
        </motion.div>
      ))}
    </AnimatePresence>
  );
}
