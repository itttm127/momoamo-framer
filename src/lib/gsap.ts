import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// GSAP configuration
gsap.config({
  nullTargetWarn: false,
  trialWarn: false,
});

// Default GSAP settings
gsap.defaults({
  ease: "power2.out",
  duration: 0.8,
});

// ScrollTrigger configuration
ScrollTrigger.config({
  ignoreMobileResize: true,
});

// Utility functions
export const gsapUtils = {
  // Fade in animation
  fadeIn: (targets: gsap.TweenTarget, options?: gsap.TweenVars) => {
    return gsap.fromTo(
      targets,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        ...options,
      }
    );
  },

  // Fade out animation
  fadeOut: (targets: gsap.TweenTarget, options?: gsap.TweenVars) => {
    return gsap.to(targets, {
      opacity: 0,
      duration: 0.6,
      ease: "power2.in",
      ...options,
    });
  },

  // Slide up animation
  slideUp: (targets: gsap.TweenTarget, options?: gsap.TweenVars) => {
    return gsap.fromTo(
      targets,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        ...options,
      }
    );
  },

  // Slide down animation
  slideDown: (targets: gsap.TweenTarget, options?: gsap.TweenVars) => {
    return gsap.fromTo(
      targets,
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        ...options,
      }
    );
  },

  // Scale animation
  scaleIn: (targets: gsap.TweenTarget, options?: gsap.TweenVars) => {
    return gsap.fromTo(
      targets,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        ...options,
      }
    );
  },

  // Stagger animation for multiple elements
  staggerIn: (targets: gsap.TweenTarget, options?: gsap.TweenVars) => {
    return gsap.fromTo(
      targets,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1,
        ...options,
      }
    );
  },

  // Text reveal animation
  textReveal: (targets: gsap.TweenTarget, options?: gsap.TweenVars) => {
    return gsap.fromTo(
      targets,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.05,
        ...options,
      }
    );
  },

  // Scroll-triggered animation
  scrollTrigger: (targets: gsap.TweenTarget, animation: gsap.TweenVars, triggerOptions?: ScrollTrigger.Vars) => {
    return gsap.fromTo(targets, animation.from || {}, {
      ...animation.to,
      scrollTrigger: {
        trigger: targets,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        ...triggerOptions,
      },
    });
  },

  // Timeline creation
  createTimeline: (options?: gsap.TimelineVars) => {
    return gsap.timeline(options);
  },

  // Kill all animations
  killAll: () => {
    gsap.killTweensOf("*");
    ScrollTrigger.killAll();
  },

  // Refresh ScrollTrigger
  refresh: () => {
    ScrollTrigger.refresh();
  },
};

// Export GSAP and ScrollTrigger for direct use
export { gsap, ScrollTrigger };
export default gsap;
