"use client";

import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const useHeroAnimations = () => {
  const headerRef = useRef<HTMLElement>(null);
  const lettersRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Letters animation - animate the letter_animation container
      if (lettersRef.current) {
        // Find the letter_animation div within lettersRef
        const letterAnimationDiv = lettersRef.current.querySelector('.letter_animation');

        if (letterAnimationDiv) {
          // Animate the container itself
          gsap.fromTo(
            letterAnimationDiv,
            {
              width: 0,
              height: 0,
              opacity: 0,
              scale: 0.8,
              transformOrigin: "center center"
            },
            {
              width: "auto",
              height: "auto",
              opacity: 1,
              scale: 1,
              transformOrigin: "center center",
              duration: 1.5,
              ease: "back.out(1.7)",
            }
          );
        }
      }

      // Header animation - slide down from top
      gsap.fromTo(
        headerRef.current,
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: 0.2,
        }
      );


      // Title animation - slide up with stagger
      if (titleRef.current) {
        const titleElements = titleRef.current.children;
        gsap.fromTo(
          titleElements,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            stagger: 0.2,
            delay: 1.2,
          }
        );
      }

      // Button animation - scale in with bounce
      gsap.fromTo(
        buttonRef.current,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          delay: 1.8,
        }
      );

      // Images animation - staggered entrance from different directions
      if (imagesRef.current) {
        const images = imagesRef.current.children;

        // House image - slide in from right
        gsap.fromTo(
          images[0],
          { y: 200, opacity: 0, scale: 0.8 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: "power3.out",
            delay: 2,
          }
        );

        // User1 image - slide in from left
        gsap.fromTo(
          images[1],
          { y: 150, opacity: 0, scale: 0.8 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: "power3.out",
            delay: 2.2,
          }
        );

        // User2 image - slide in from bottom-left
        gsap.fromTo(
          images[2],
          { y: 100, opacity: 0, scale: 0.8 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: "power3.out",
            delay: 2.4,
          }
        );

        // User3 image - fade in (desktop only)
        gsap.fromTo(
          images[3],
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power2.out",
            delay: 2.6,
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return {
    headerRef,
    lettersRef,
    titleRef,
    buttonRef,
    imagesRef,
  };
};

// Scroll-triggered animations for hero elements
export const useHeroScrollAnimations = (
  lettersRef?: React.RefObject<HTMLDivElement | null>,
  titleRef?: React.RefObject<HTMLDivElement | null>,
  imagesRef?: React.RefObject<HTMLDivElement | null>
) => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Ensure initial opacity is 1 for both title and images
    if (titleRef?.current) {
      gsap.set(titleRef.current, { opacity: 1 });
    }
    if (imagesRef?.current) {
      gsap.set(imagesRef.current, { opacity: 1 });
    }

    const ctx = gsap.context(() => {
      if (heroRef.current) {
        // Title fade out and move up on scroll
        if (titleRef?.current) {
          gsap.to(
            titleRef.current,
            {
              y: -40,
              ease: "power2.out",
              scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: 1.2,
              },
            }
          );
        }

        // Images fade out and move up on scroll
        if (imagesRef?.current) {
          // Get the current computed Y position (relative to its current transform)
          const currentY = gsap.getProperty(imagesRef.current, "y") as number || 0;
          console.log("currentY", currentY);
          gsap.to(
            imagesRef.current,
            {
              y: -40,
              ease: "power2.out",
              scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: 1,
              },
            }
          );
        }
      }
    });

    return () => ctx.revert();
  }, [lettersRef, titleRef, imagesRef]);

  return { heroRef };
};

// Interactive animations for hero elements
export const useHeroInteractiveAnimations = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Button hover animation
      const button = document.querySelector(".hero-button");
      if (button) {
        button.addEventListener("mouseenter", () => {
          gsap.to(button, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        button.addEventListener("mouseleave", () => {
          gsap.to(button, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      }
    });

    return () => ctx.revert();
  }, []);
};

// Timeline-based hero animation sequence
export const useHeroTimeline = () => {
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    timelineRef.current = gsap.timeline({
      paused: true,
      onComplete: () => {
        console.log("Hero animation sequence completed");
      },
    });

    // Build the timeline
    timelineRef.current
      .fromTo(
        ".hero-header",
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      )
      .fromTo(
        ".hero-letters .hero-letter",
        { scale: 0, opacity: 0, rotation: -180 },
        { scale: 1, opacity: 1, rotation: 0, duration: 1.2, ease: "back.out(1.7)", stagger: 0.15 },
        "-=0.5"
      )
      .fromTo(
        ".hero-title",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.2 },
        "-=0.8"
      )
      .fromTo(
        ".hero-button",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.6"
      )
      .fromTo(
        ".hero-images .hero-image",
        { x: 200, opacity: 0, scale: 0.8 },
        { x: 0, opacity: 1, scale: 1, duration: 1.5, ease: "power3.out", stagger: 0.2 },
        "-=0.4"
      );

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, []);

  const playTimeline = () => {
    if (timelineRef.current) {
      timelineRef.current.play();
    }
  };

  const pauseTimeline = () => {
    if (timelineRef.current) {
      timelineRef.current.pause();
    }
  };

  const restartTimeline = () => {
    if (timelineRef.current) {
      timelineRef.current.restart();
    }
  };

  return {
    playTimeline,
    pauseTimeline,
    restartTimeline,
    timeline: timelineRef.current,
  };
};
