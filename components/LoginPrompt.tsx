"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

interface LoginPromptProps {
  onLogin: (username: string) => void;
}

export default function LoginPrompt({ onLogin }: LoginPromptProps) {
  const [username, setUsername] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      onLogin(username.trim());
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center relative z-10 p-4">
      <div className="crt-screen absolute inset-0 pointer-events-none"></div>
      <div className="scan-line"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl"
      >
        <div className="mb-8 text-terminal-text space-y-2">
          <div className="text-terminal-glow text-glow">
            ╔════════════════════════════════════════════════════════════╗
          </div>
          <div className="text-terminal-glow text-glow">
            ║                    ECHO TERMINAL v1.0.0                    ║
          </div>
          <div className="text-terminal-glow text-glow">
            ║                  Unauthorized access prohibited            ║
          </div>
          <div className="text-terminal-glow text-glow">
            ╚════════════════════════════════════════════════════════════╝
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="space-y-4"
        >
          <div className="text-terminal-text">
            <p className="mb-2">System ready. Please authenticate.</p>
            <p className="text-terminal-dim text-sm mb-4">
              Hint: Try 'guest' or any name you like
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <span className="text-terminal-text">login:</span>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onFocus={() => setShowCursor(false)}
              onBlur={() => setShowCursor(true)}
              autoFocus
              className="flex-1 bg-transparent border-none outline-none text-terminal-glow font-mono caret-terminal-glow"
              placeholder=""
              maxLength={20}
            />
            {showCursor && <span className="terminal-cursor"></span>}
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-terminal-dim text-xs mt-4"
          >
            Press Enter to continue...
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
