"use client";

import Terminal from "@/components/Terminal";

export default function Home() {
  return (
    <main className="min-h-screen w-full relative overflow-hidden">
      <div className="neon-gradient absolute inset-0 z-0"></div>
      <Terminal />
    </main>
  );
}
