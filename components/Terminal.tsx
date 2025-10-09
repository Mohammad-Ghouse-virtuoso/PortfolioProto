"use client";

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTerminalStore } from '@/store/terminalStore';
import { executeCommand } from '@/utils/commands';
import BootScreen from './BootScreen';
import LoginPrompt from './LoginPrompt';
import TerminalOutput from './TerminalOutput';
import TerminalInput from './TerminalInput';

export default function Terminal() {
  const {
    lines,
    isBooting,
    isLoggedIn,
    username,
    neoMode,
    addLine,
    setBooting,
    setLoggedIn,
    clearTerminal,
  } = useTerminalStore();

  const terminalRef = useRef<HTMLDivElement>(null);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    // Boot sequence
    const bootTimer = setTimeout(() => {
      setBooting(false);
    }, 3000);

    return () => clearTimeout(bootTimer);
  }, [setBooting]);

  useEffect(() => {
    // Auto-scroll to bottom when new lines are added
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  const handleLogin = (name: string) => {
    setLoggedIn(true);
    addLine({
      type: 'system',
      content: `Welcome, ${name}! Type 'help' to see available commands.`,
    });
  };

  const handleCommand = (command: string) => {
    if (!command.trim()) return;

    // Add the input command to history
    addLine({
      type: 'input',
      content: `${username}@echo-terminal:~$ ${command}`,
    });

    // Execute the command
    const result = executeCommand(command, username);

    if (result.output === '[CLEARED]') {
      clearTerminal();
    } else if (command.toLowerCase() === 'mode neo') {
      useTerminalStore.getState().toggleNeoMode();
      addLine({
        type: result.type,
        content: result.output,
      });
    } else if (command.toLowerCase() === 'exit') {
      addLine({
        type: result.type,
        content: result.output,
      });
      setTimeout(() => {
        clearTerminal();
        setLoggedIn(false);
      }, 3000);
    } else {
      addLine({
        type: result.type,
        content: result.output,
      });
    }

    setInputValue('');
  };

  if (isBooting) {
    return <BootScreen />;
  }

  if (!isLoggedIn) {
    return <LoginPrompt onLogin={handleLogin} />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`relative z-10 h-screen w-full flex flex-col p-4 md:p-8 ${
        neoMode ? 'glass' : ''
      }`}
    >
      {/* CRT Effects */}
      <div className="crt-screen absolute inset-0 pointer-events-none"></div>
      <div className="scan-line"></div>

      {/* Terminal Container */}
      <div className="flex-1 flex flex-col max-w-7xl mx-auto w-full">
        {/* Terminal Header */}
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-terminal-glow/30">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-4 text-terminal-dim text-sm">
              {username}@echo-terminal:~
            </span>
          </div>
          <div className="text-terminal-dim text-xs">
            {neoMode && '✨ NEO MODE ✨'}
          </div>
        </div>

        {/* Terminal Output */}
        <div
          ref={terminalRef}
          className="flex-1 overflow-y-auto overflow-x-hidden mb-4 scroll-smooth"
        >
          <TerminalOutput lines={lines} />
        </div>

        {/* Terminal Input */}
        <TerminalInput
          value={inputValue}
          onChange={setInputValue}
          onSubmit={handleCommand}
          username={username}
        />
      </div>
    </motion.div>
  );
}
