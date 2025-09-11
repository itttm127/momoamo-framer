"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface UseGSAPAnimationOptions {
  trigger?: string | Element;
  start?: string;
  end?: string;
  toggleActions?: string;
  once?: boolean;
  markers?: boolean;
  scrub?: boolean | number;
  pin?: boolean;
  snap?: boolean | number | number[];
  onEnter?: () => void;
  onLeave?: () => void;
  onEnterBack?: () => void;
  onLeaveBack?: () => void;
}

export const useGSAPAnimation = (
  animationFn: (targets: gsap.TweenTarget) => gsap.core.Timeline | gsap.core.Tween,
  options?: UseGSAPAnimationOptions
) => {
  const elementRef = useRef<HTMLElement>(null);
  const animationRef = useRef<gsap.core.Timeline | gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    // Create the animation
    const animation = animationFn(elementRef.current);

    // If ScrollTrigger options are provided, add ScrollTrigger
    if (options) {
      const scrollTriggerOptions: ScrollTrigger.Vars = {
        trigger: options.trigger || elementRef.current,
        start: options.start || "top 80%",
        end: options.end || "bottom 20%",
        toggleActions: options.toggleActions || "play none none reverse",
        once: options.once || false,
        markers: options.markers || false,
        scrub: options.scrub || false,
        pin: options.pin || false,
        snap: options.snap || false,
        onEnter: options.onEnter,
        onLeave: options.onLeave,
        onEnterBack: options.onEnterBack,
        onLeaveBack: options.onLeaveBack,
      };

      // Add ScrollTrigger to the animation
      if (animation instanceof gsap.core.Timeline) {
        animation.scrollTrigger(scrollTriggerOptions);
      } else {
        animation.scrollTrigger(scrollTriggerOptions);
      }
    }

    animationRef.current = animation;

    // Cleanup
    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [animationFn, options]);

  return elementRef;
};

// Specific animation hooks
export const useFadeIn = (options?: UseGSAPAnimationOptions) => {
  return useGSAPAnimation(
    (targets) => gsap.fromTo(targets, { opacity: 0 }, { opacity: 1, duration: 0.8, ease: "power2.out" }),
    options
  );
};

export const useSlideUp = (options?: UseGSAPAnimationOptions) => {
  return useGSAPAnimation(
    (targets) =>
      gsap.fromTo(
        targets,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      ),
    options
  );
};

export const useSlideDown = (options?: UseGSAPAnimationOptions) => {
  return useGSAPAnimation(
    (targets) =>
      gsap.fromTo(
        targets,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      ),
    options
  );
};

export const useScaleIn = (options?: UseGSAPAnimationOptions) => {
  return useGSAPAnimation(
    (targets) =>
      gsap.fromTo(
        targets,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" }
      ),
    options
  );
};

export const useStaggerIn = (options?: UseGSAPAnimationOptions) => {
  return useGSAPAnimation(
    (targets) =>
      gsap.fromTo(
        targets,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", stagger: 0.1 }
      ),
    options
  );
};
