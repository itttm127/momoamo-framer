"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useFadeIn, useSlideUp, useStaggerIn } from "@/hooks/useGSAPAnimation";

const GSAPExample = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  // Using custom hooks
  const fadeInRef = useFadeIn();
  const slideUpRef = useSlideUp();
  const staggerRef = useStaggerIn();

  useEffect(() => {
    // Manual GSAP animation example
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    if (subtitleRef.current) {
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.3,
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Stagger animation for cards
    if (cardsRef.current) {
      const cards = cardsRef.current.children;
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <section className="py-20 px-4 bg-gray-green">
      <div className="max-w-6xl mx-auto">
        {/* Manual GSAP animations */}
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl font-bold text-dark-green mb-4">
            GSAP Animation Examples
          </h2>
          <p ref={subtitleRef} className="text-lg text-dark-green opacity-80">
            Smooth animations powered by GreenSock
          </p>
        </div>

        {/* Using custom hooks */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div ref={fadeInRef} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Fade In</h3>
            <p className="text-gray-600">This card uses the fadeIn hook</p>
          </div>
          <div ref={slideUpRef} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Slide Up</h3>
            <p className="text-gray-600">This card uses the slideUp hook</p>
          </div>
          <div ref={staggerRef} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Stagger</h3>
            <p className="text-gray-600">This card uses the staggerIn hook</p>
          </div>
        </div>

        {/* Manual stagger animation */}
        <div ref={cardsRef} className="grid md:grid-cols-4 gap-6">
          <div className="bg-dark-green text-white p-6 rounded-lg">
            <h4 className="text-lg font-semibold mb-2">Card 1</h4>
            <p className="text-sm opacity-90">Manual stagger animation</p>
          </div>
          <div className="bg-dark-green text-white p-6 rounded-lg">
            <h4 className="text-lg font-semibold mb-2">Card 2</h4>
            <p className="text-sm opacity-90">Manual stagger animation</p>
          </div>
          <div className="bg-dark-green text-white p-6 rounded-lg">
            <h4 className="text-lg font-semibold mb-2">Card 3</h4>
            <p className="text-sm opacity-90">Manual stagger animation</p>
          </div>
          <div className="bg-dark-green text-white p-6 rounded-lg">
            <h4 className="text-lg font-semibold mb-2">Card 4</h4>
            <p className="text-sm opacity-90">Manual stagger animation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GSAPExample;
