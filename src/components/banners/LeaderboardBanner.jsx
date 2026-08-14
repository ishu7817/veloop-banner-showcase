import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Trophy, Medal } from 'lucide-react';
import { BannerCard } from '../ui/BannerCard';
import { LEADERBOARD_USERS } from '../../data/Data';

export const LeaderboardBanner = () => {
  return (
    <BannerCard>
      <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="flex-1 space-y-4 text-center lg:text-left z-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
          <Crown className="w-3.5 h-3.5" /> Gamified Competition
        </span>
        <h2 className="text-2xl md:text-4xl font-extrabold text-white">
          Climb the Leaderboard
        </h2>
        <p className="text-slate-300 text-sm md:text-base max-w-xl">
          Complete daily activities, earn rewards, gain XP, and compete with top users to dominate the rankings.
        </p>
        <div>
          <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold rounded-xl transition-all shadow-lg shadow-amber-500/20 hover:scale-105 active:scale-95 cursor-pointer">
            View Leaderboard →
          </button>
        </div>
      </div>

      <div className="w-full lg:w-96 flex flex-col gap-2.5 z-10">
        {LEADERBOARD_USERS.map((user) => (
          <motion.div
            key={user.id}
            whileHover={{ x: 6 }}
            className={`flex items-center justify-between p-3.5 rounded-xl border transition-colors ${
              user.tier === 'gold'
                ? 'bg-amber-500/15 border-amber-500/30 backdrop-blur-md'
                : 'bg-slate-800/80 border-slate-700/60'
            }`}
          >
            <div className="flex items-center gap-3">
              {user.tier === 'gold' && <Trophy className="w-5 h-5 text-amber-400" />}
              {user.tier === 'silver' && <Medal className="w-5 h-5 text-slate-300" />}
              {user.tier === 'bronze' && <Medal className="w-5 h-5 text-amber-700" />}
              <div>
                <p className={`font-bold text-sm ${user.tier === 'gold' ? 'text-amber-200' : 'text-slate-200'}`}>
                  {user.name} ({user.rank})
                </p>
                <p className={`text-xs ${user.tier === 'gold' ? 'text-amber-400/80' : 'text-slate-400'}`}>
                  {user.title}
                </p>
              </div>
            </div>
            <span className={`font-extrabold text-sm ${user.tier === 'gold' ? 'text-amber-300' : 'text-slate-300'}`}>
              {user.score}
            </span>
          </motion.div>
        ))}
      </div>
    </BannerCard>
  );
};