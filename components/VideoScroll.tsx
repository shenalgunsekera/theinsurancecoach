'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function VideoScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    let animFrame: number;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const scrolled = -rect.top;
      const total = rect.height - window.innerHeight;
      const p = Math.max(0, Math.min(1, scrolled / total));
      setProgress(p);
      if (video.duration > 0) {
        video.currentTime = p * video.duration;
      }
    };

    const onReady = () => {
      setVideoReady(true);
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
    };

    // loadedmetadata fires once duration is known
    if (video.readyState >= 1) {
      onReady();
    } else {
      video.addEventListener('loadedmetadata', onReady, { once: true });
    }

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener('scroll', handleScroll);
      video.removeEventListener('loadedmetadata', onReady);
    };
  }, []);

  const fade = (start: number, end: number) => {
    const len = 0.08;
    if (progress < start) return 0;
    if (progress < start + len) return (progress - start) / len;
    if (progress < end - len) return 1;
    if (progress < end) return 1 - (progress - (end - len)) / len;
    return 0;
  };

  const titleOpacity = progress < 0.20 ? 1 : Math.max(0, 1 - (progress - 0.20) / 0.08);
  const leftOpacity  = fade(0.30, 0.62);   // left corner — appears first
  const rightOpacity = fade(0.48, 0.78);   // right corner — appears later
  const ctaOpacity   = fade(0.84, 1.05);

  return (
    <div ref={containerRef} id="hero" className="relative" style={{ height: '550vh' }}>
      <div className="sticky top-0 h-screen overflow-hidden bg-ink">
        {/* Video */}
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src="/video/hero.mp4"
          preload="auto"
          muted
          playsInline
          style={{
            opacity: videoReady ? 1 : 0,
            transition: 'opacity 0.5s ease',
            transform: 'scale(1.06)',
            transformOrigin: 'center center',
          }}
        />

        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/30 pointer-events-none z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/50 via-transparent to-ink/50 pointer-events-none z-10" />

        {/* Stage 1 — centered title */}
        <div
          className="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none"
          style={{ opacity: titleOpacity }}
        >
          <p className="font-body text-xs tracking-widest3 text-gray-400 uppercase mb-6">Welcome to</p>
          <h1
            className="font-display text-center text-chalk leading-none"
            style={{ fontSize: 'clamp(60px, 10vw, 140px)', letterSpacing: '0.04em' }}
          >
            THE INSURANCE<br />COACH
          </h1>
          <div className="mt-8 w-16 h-px bg-chalk/40" />
          <p className="mt-6 font-heading italic text-gray-300 text-lg md:text-xl">
            Your complete guide to the world of insurance
          </p>
        </div>

        {/* Top-left — appears first */}
        <div
          className="absolute top-24 left-8 md:left-14 z-30 pointer-events-none"
          style={{ opacity: leftOpacity }}
        >
          <p className="font-body text-xs tracking-widest3 text-gray-500 uppercase mb-3">What we cover</p>
          <p
            className="font-display text-chalk leading-[0.92] text-left"
            style={{ fontSize: 'clamp(38px, 5.5vw, 86px)', letterSpacing: '0.03em' }}
          >
            EVERY RISK.<br />EVERY PRODUCT.<br />ONE PLATFORM.
          </p>
        </div>

        {/* Bottom-right — appears later */}
        <div
          className="absolute bottom-14 right-8 md:right-14 z-30 pointer-events-none"
          style={{ opacity: rightOpacity }}
        >
          <p className="font-body text-xs tracking-widest3 text-gray-500 uppercase mb-3 text-right">What you gain</p>
          <p
            className="font-display text-chalk leading-[0.92] text-right"
            style={{ fontSize: 'clamp(28px, 3.8vw, 60px)', letterSpacing: '0.03em' }}
          >
            FROM LIFE COVER<br />TO COMMERCIAL RISK —<br />WE TEACH IT ALL.
          </p>
        </div>

        {/* Stage 3 — end CTA */}
        <div
          className="absolute inset-0 z-30 flex flex-col items-center justify-end pb-16 pointer-events-none"
          style={{ opacity: ctaOpacity }}
        >
          <div className="flex items-center gap-3 text-chalk">
            <span className="font-heading italic text-xl">Explore the platform below</span>
            <svg className="animate-bounce" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M10 3v14M4 11l6 6 6-6" />
            </svg>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 pointer-events-none"
          style={{ opacity: progress < 0.05 ? 1 : 0, transition: 'opacity 0.4s' }}
        >
          <span className="font-body text-xs tracking-widest2 text-gray-500 uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gray-500 to-transparent" />
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-800 z-40">
          <div
            className="h-full bg-chalk transition-none"
            style={{ width: `${progress * 100}%` }}
          />
        </div>

        {/* Scroll indicator at very start */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
          style={{ opacity: progress < 0.05 ? 1 : 0, transition: 'opacity 0.3s' }}
        >
          <span className="font-body text-xs tracking-widest2 text-gray-500 uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gray-500 to-transparent" />
        </div>
      </div>
    </div>
  );
}
