import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Share2, Check } from 'lucide-react';
import { BannerCard } from '../ui/BannerCard';
import { SOCIAL_CHANNELS } from '../../data/Data';
import { InstagramIcon, LinkedinIcon, YoutubeIcon, TwitterIcon } from '../ui/Icons';

export const FollowEarnBanner = () => {
  const [followed, setFollowed] = useState({});

  const toggleFollow = (id) => {
    setFollowed((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const getIcon = (key) => {
    switch (key) {
      case 'instagram': return <InstagramIcon />;
      case 'linkedin': return <LinkedinIcon />;
      case 'youtube': return <YoutubeIcon />;
      case 'twitter': return <TwitterIcon />;
      default: return null;
    }
  };

  return (
    <BannerCard>
      <div className="flex-1 space-y-4 text-center lg:text-left z-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          <Share2 className="w-3.5 h-3.5" /> Social Rewards
        </span>
        <h2 className="text-2xl md:text-4xl font-extrabold text-white">
          Follow & Earn Rewards
        </h2>
        <p className="text-slate-300 text-sm md:text-base max-w-xl">
          Stay connected on our official channels. Participate in eligible social campaigns and unlock up to +500 VEs.
        </p>
        <div>
          <button className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-emerald-600/30 hover:scale-105 active:scale-95 cursor-pointer">
            Explore Our Channels →
          </button>
        </div>
      </div>

      <div className="w-full lg:w-80 grid grid-cols-2 gap-3 z-10">
        {SOCIAL_CHANNELS.map((channel) => {
          const isDone = followed[channel.id];
          return (
            <motion.div
              key={channel.id}
              onClick={() => toggleFollow(channel.id)}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.96 }}
              className={`p-3.5 border rounded-xl flex items-center justify-between cursor-pointer transition-colors ${
                isDone 
                  ? 'bg-emerald-950/40 border-emerald-500/40' 
                  : 'bg-slate-800/80 border-slate-700 hover:border-slate-500'
              }`}
            >
              <div className="flex items-center gap-2.5">
                {getIcon(channel.iconKey)}
                <span className="text-xs font-semibold text-slate-200">{channel.name}</span>
              </div>
              {isDone ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <span className="text-[10px] font-bold text-slate-400">{channel.reward}</span>
              )}
            </motion.div>
          );
        })}
      </div>
    </BannerCard>
  );
};