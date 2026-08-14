import React from 'react';
import { motion } from 'framer-motion';

export const BannerCard = ({ children, className = '' }) => {
  return (
    <motion.section 
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className={`w-full min-h-[330px] md:min-h-[380px] lg:min-h-[410px] lg:max-h-[450px] bg-[#1E2138]/90 border border-slate-700/50 rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl overflow-hidden relative ${className}`}
    >
      {children}
    </motion.section>
  );
};