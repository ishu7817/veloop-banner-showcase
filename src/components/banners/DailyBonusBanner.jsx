import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Gift, CheckCircle2 } from 'lucide-react';
import { BannerCard } from '../ui/BannerCard';

export const DailyBonusBanner = () => {
  const [bonusClaimed, setBonusClaimed] = useState(false);

  return (
    <BannerCard>
      <div className="flex-1 space-y-4 text-center lg:text-left z-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
          <Calendar className="w-3.5 h-3.5" /> Recurring Streak
        </span>
        <h2 className="text-2xl md:text-4xl font-extrabold text-white">
          Your Daily Bonus Is Waiting
        </h2>
        <p className="text-slate-300 text-sm md:text-base max-w-xl">
          Check in daily to build your streak and claim available reward bonuses before the 24-hour reset.
        </p>
        <div>
          <button 
            onClick={() => setBonusClaimed(true)}
            disabled={bonusClaimed}
            className={`px-6 py-3 font-bold rounded-xl transition-all shadow-lg hover:scale-105 active:scale-95 flex items-center gap-2 justify-center cursor-pointer ${
              bonusClaimed 
                ? 'bg-emerald-600 text-white cursor-default' 
                : 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-amber-500/20'
            }`}
          >
            {bonusClaimed ? (
              <> <CheckCircle2 className="w-5 h-5" /> Bonus Claimed (+25 Gems) </>
            ) : (
              'Claim Today\'s Bonus (+25 Gems) →'
            )}
          </button>
        </div>
      </div>

      <div className="w-full lg:w-80 flex items-center justify-center z-10">
        <motion.div 
          animate={{ rotate: [0, 3, -3, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/20 to-slate-800 border border-amber-500/30 flex flex-col items-center gap-3 text-center shadow-xl"
        >
          <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 flex items-center justify-center">
            <Gift className="w-8 h-8" />
          </div>
          <div>
            <p className="font-extrabold text-amber-300 text-lg">Streak Active: 5 Days</p>
            <p className="text-xs text-slate-400">Next bonus resets in 14h 32m</p>
          </div>
        </motion.div>
      </div>
    </BannerCard>
  );
};