"use client";

import React, { createContext, useContext, useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface GSAPContextType {
  gsap: typeof gsap;
  ScrollTrigger: typeof ScrollTrigger;
  timeline: gsap.core.Timeline | null;
  createTimeline: (options?: gsap.TimelineVars) => gsap.core.Timeline;
  killAll: () => void;
  refresh: () => void;
}

const GSAPContext = createContext<GSAPContextType | null>(null);

export const useGSAP = () => {
  const context = useContext(GSAPContext);
  if (!context) {
    throw new Error("useGSAP must be used within a GSAPProvider");
  }
  return context;
};

interface GSAPProviderProps {
  children: React.ReactNode;
}

export const GSAPProvider: React.FC<GSAPProviderProps> = ({ children }) => {
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    // Initialize ScrollTrigger
    ScrollTrigger.refresh();

    // Cleanup on unmount
    return () => {
      ScrollTrigger.killAll();
      gsap.killTweensOf("*");
    };
  }, []);

  const createTimeline = (options?: gsap.TimelineVars) => {
    const timeline = gsap.timeline(options);
    timelineRef.current = timeline;
    return timeline;
  };

  const killAll = () => {
    gsap.killTweensOf("*");
    ScrollTrigger.killAll();
  };

  const refresh = () => {
    ScrollTrigger.refresh();
  };

  const value: GSAPContextType = {
    gsap,
    ScrollTrigger,
    timeline: timelineRef.current,
    createTimeline,
    killAll,
    refresh,
  };

  return <GSAPContext.Provider value={value}>{children}</GSAPContext.Provider>;
};
