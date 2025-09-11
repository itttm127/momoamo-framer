"use client";

import { gsap } from "@/lib/gsap";
import { useEffect, useRef } from "react";

export const useHeroAnimations = () => {
  const headerRef = useRef<HTMLElement>(null);
  const lettersRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
              duration: 3,
              ease: "back.out(1.7)",
            }
          );
        }
      }

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
export const useHeroScrollAnimations = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroRef.current) {
        // Parallax effect for background elements
        gsap.to(heroRef.current.querySelector(".hero-bg"), {
          yPercent: -50,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });

        // Scale down effect on scroll
        gsap.to(heroRef.current.querySelector(".hero-content"), {
          scale: 0.95,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

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

      // Letter hover animations
    //   const letters = document.querySelectorAll(".hero-letter");
    //   letters.forEach((letter) => {
    //     letter.addEventListener("mouseenter", () => {
    //       gsap.to(letter, {
    //         scale: 1.1,
    //         rotation: 5,
    //         duration: 0.3,
    //         ease: "power2.out",
    //       });
    //     });

    //     letter.addEventListener("mouseleave", () => {
    //       gsap.to(letter, {
    //         scale: 1,
    //         rotation: 0,
    //         duration: 0.3,
    //         ease: "power2.out",
    //       });
    //     });
    //   });

      // Image hover animations
      const images = document.querySelectorAll(".hero-image");
      images.forEach((image) => {
        image.addEventListener("mouseenter", () => {
          gsap.to(image, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        image.addEventListener("mouseleave", () => {
          gsap.to(image, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
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
