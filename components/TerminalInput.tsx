"use client";

import { useRef, useEffect } from 'react';

interface TerminalInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (command: string) => void;
  username: string;
}

export default function TerminalInput({
  value,
  onChange,
  onSubmit,
  username,
}: TerminalInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Keep input focused
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Future: Add command history navigation with up/down arrows
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <span className="text-terminal-glow text-sm md:text-base shrink-0">
        {username}@echo-terminal:~$
      </span>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 bg-transparent border-none outline-none text-terminal-glow font-mono text-sm md:text-base caret-terminal-glow"
        autoComplete="off"
        spellCheck="false"
      />
      <span className="terminal-cursor"></span>
    </form>
  );
}
