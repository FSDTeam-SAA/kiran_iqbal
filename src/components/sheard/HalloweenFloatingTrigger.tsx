"use client";

import { motion } from "framer-motion";
import { useHalloween } from "./HalloweenContext";
import { useState, useEffect } from "react";

export default function HalloweenFloatingTrigger() {
  const { openHalloweenModal, timeRemaining } = useHalloween();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || timeRemaining.isExpired) return null;

  return (
    <aside
      aria-label="Halloween promotion quick access"
      className="fixed bottom-24 right-2 sm:bottom-28 sm:right-5 z-40 select-none print:hidden"
    >
      <motion.button
        type="button"
        onClick={openHalloweenModal}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        aria-label="Click box to claim your Free Halloween Gift"
        className="group relative flex items-center gap-2 rounded-2xl border border-amber-400/80 bg-gradient-to-r from-[#1c0c29] via-[#2a133d] to-[#1c0c29] p-2 pr-3 sm:p-2.5 sm:pr-3.5 shadow-md hover:shadow-lg shadow-black/30 backdrop-blur-md transition-all focus:outline-none focus:ring-2 focus:ring-orange-400 cursor-pointer"
      >
        {/* Animated Moving / Bouncing 3D Gift Box 🎁 */}
        <div className="relative flex size-11 sm:size-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600 shadow-inner">
          <motion.span
            animate={{
              rotate: [0, -10, 12, -8, 8, -4, 0],
              y: [0, -4, 0, -3, 0],
              scale: [1, 1.12, 1, 1.08, 1],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeInOut",
            }}
            className="text-2xl sm:text-3xl filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.4)]"
            role="img"
            aria-label="Moving Gift Box"
          >
            🎁
          </motion.span>

          {/* Tiny glowing Halloween ping dot */}
          <span className="absolute -top-1 -right-1 flex size-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex size-3 rounded-full bg-amber-300 border border-[#1c0c29]" />
          </span>
        </div>

        {/* Tagline / Call to Action text */}
        <div className="relative flex flex-col text-left">
          <div className="flex items-center gap-1">
            <span className="text-[10px] font-black uppercase tracking-wider text-amber-300 drop-shadow">
              🎃 Halloween Gift
            </span>
            <span className="hidden sm:inline rounded bg-orange-600/80 px-1 py-0.2 text-[9px] font-bold text-white uppercase">
              Free
            </span>
          </div>
          <span className="font-['Barlow_Condensed'] text-xs sm:text-sm font-bold uppercase leading-tight tracking-wide text-white group-hover:text-amber-200 transition-colors">
            Click box to claim your
          </span>
          <span className="font-['Barlow_Condensed'] text-xs sm:text-[13px] font-extrabold uppercase leading-none text-amber-400 drop-shadow-[0_1px_4px_rgba(255,122,26,0.8)]">
            Free Halloween Gift!
          </span>
        </div>
      </motion.button>
    </aside>
  );
}
