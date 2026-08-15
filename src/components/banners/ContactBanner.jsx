import React from 'react';
import { motion } from 'framer-motion';
import { Headset, Send } from 'lucide-react';
import { BannerCard } from '../ui/BannerCard';

export const ContactBanner = () => {
  return (
    <BannerCard>
      <div className="flex-1 space-y-4 text-center lg:text-left z-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
          <Headset className="w-3.5 h-3.5" /> 24/7 Dedicated Support
        </span>
        <h2 className="text-2xl md:text-4xl font-extrabold text-white">
          Need Help? We're Here.
        </h2>
        <p className="text-slate-300 text-sm md:text-base max-w-xl">
          Have a question regarding your earnings, rewards, or account settings? Our support team is ready to assist you.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-center lg:justify-start">
          <a 
            href="mailto:velooprewardsofficial@gmail.com" 
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-600/30 text-center hover:scale-105 active:scale-95"
          >
            Contact Support →
          </a>
          <span className="text-xs text-slate-400">
            velooprewardsofficial@gmail.com
          </span>
        </div>
      </div>

      <div className="w-full lg:w-80 flex items-center justify-center z-10">
        <div className="p-6 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 flex flex-col items-center text-center gap-3">
          <motion.div 
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="w-16 h-16 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 flex items-center justify-center"
          >
            <Send className="w-8 h-8" />
          </motion.div>
          <h3 className="font-bold text-white text-base">Direct Agent Access</h3>
          <p className="text-xs text-slate-400">Response time within 24 hours guaranteed</p>
        </div>
      </div>
    </BannerCard>
  );
};