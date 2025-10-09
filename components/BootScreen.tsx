"use client";

import { motion } from 'framer-motion';
import { ASCII_ART } from '@/data/content';

export default function BootScreen() {
  const bootMessages = [
    'Initializing Echo Terminal...',
    'Loading system modules...',
    'Establishing secure connection...',
    'Mounting filesystems...',
    'Starting services...',
    'Ready.',
  ];

  return (
    <div className="h-screen w-full flex items-center justify-center relative z-10">
      <div className="crt-screen absolute inset-0 pointer-events-none"></div>
      <div className="scan-line"></div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <motion.pre
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-terminal-glow text-xs md:text-sm mb-8 text-glow"
        >
          {ASCII_ART.logo}
        </motion.pre>

        <div className="space-y-2">
          {bootMessages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.3, duration: 0.3 }}
              className="text-terminal-text text-sm md:text-base"
            >
              <span className="text-terminal-dim">[{index + 1}/{bootMessages.length}]</span> {message}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="mt-8 text-terminal-dim text-sm"
        >
          <span className="inline-block animate-pulse">▓</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
