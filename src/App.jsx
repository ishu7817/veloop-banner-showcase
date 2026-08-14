import React from 'react';
import { LeaderboardBanner } from './components/banners/LeaderboardBanner';


export default function App() {
  return (
    <main className="min-h-screen bg-[#161827] text-white p-4 md:p-8 flex flex-col items-center justify-center gap-8 max-w-7xl mx-auto">
      <header className="text-center my-6">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-indigo-300 to-amber-300 bg-clip-text text-transparent">
          VELOOP Rewards Showcase
        </h1>
        <p className="text-slate-400 mt-2 text-sm md:text-base">
          5 Interactive & Responsive Production Banners
        </p>
      </header>

      <LeaderboardBanner />
     
    </main>
  );
}