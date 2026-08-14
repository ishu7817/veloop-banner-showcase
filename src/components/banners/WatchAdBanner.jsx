import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Sparkles, CheckCircle2 } from 'lucide-react';
import { BannerCard } from '../ui/BannerCard';

export const WatchAdBanner = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [watched, setWatched] = useState(false);

  const handleWatch = () => {
    setIsPlaying(true);
    setTimeout(() => {
      setIsPlaying(false);
      setWatched(true);
    }, 2000);
  };

  return (
    <BannerCard>
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="w-full lg:w-80 flex items-center justify-center order-2 lg:order-1 z-10">
        <motion.div 
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="w-full max-w-xs h-48 bg-gradient-to-tr from-blue-900/40 to-slate-800 border border-blue-500/30 rounded-2xl flex flex-col items-center justify-center gap-3 relative shadow-xl"
        >
          <motion.button 
            onClick={handleWatch}
            disabled={isPlaying || watched}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.95 }}
            className={`w-16 h-16 rounded-full flex items-center justify-center cursor-pointer shadow-lg transition-colors ${
              watched 
                ? 'bg-emerald-500 text-white shadow-emerald-500/40' 
                : 'bg-blue-500 text-white shadow-blue-500/40 hover:bg-blue-400'
            }`}
          >
            {isPlaying ? (
              <span className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : watched ? (
              <CheckCircle2 className="w-8 h-8" />
            ) : (
              <Play className="w-8 h-8 fill-current ml-1" />
            )}
          </motion.button>
          <span className="text-xs font-bold text-blue-300 tracking-wider uppercase bg-blue-500/20 px-3 py-1 rounded-full border border-blue-400/20">
            {watched ? 'Reward Granted (+38 VEs)' : '+38 VEs Per Ad'}
          </span>
        </motion.div>
      </div>

      <div className="flex-1 space-y-4 text-center lg:text-left order-1 lg:order-2 z-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
          <Sparkles className="w-3.5 h-3.5" /> Instant Earning
        </span>
        <h2 className="text-2xl md:text-4xl font-extrabold text-white">
          Watch Ads. Earn VEs.
        </h2>
        <p className="text-slate-300 text-sm md:text-base max-w-xl">
          Watch eligible short video advertisements and earn instant VE reward tokens straight to your account wallet.
        </p>
        <div>
          <button 
            onClick={handleWatch}
            disabled={isPlaying || watched}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/30 hover:scale-105 active:scale-95 cursor-pointer"
          >
            {watched ? 'Ad Completed' : 'Watch & Earn Now →'}
          </button>
        </div>
      </div>
    </BannerCard>
  );
};