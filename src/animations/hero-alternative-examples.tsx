// Alternative animation approaches for letter_animation class

// Option 2: Animate individual letters within the container
export const animateIndividualLetters = (lettersRef: React.RefObject<HTMLDivElement>) => {
  if (lettersRef.current) {
    const letterAnimationDiv = lettersRef.current.querySelector('.letter_animation');
    
    if (letterAnimationDiv) {
      const letters = letterAnimationDiv.children;
      
      // Animate each letter individually with stagger
      gsap.fromTo(
        letters,
        { 
          scale: 0, 
          opacity: 0, 
          rotation: -180 
        },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.1,
          delay: 0.5,
        }
      );
    }
  }
};

// Option 3: Two-phase animation (container first, then letters)
export const animateContainerThenLetters = (lettersRef: React.RefObject<HTMLDivElement>) => {
  if (lettersRef.current) {
    const letterAnimationDiv = lettersRef.current.querySelector('.letter_animation');
    
    if (letterAnimationDiv) {
      const letters = letterAnimationDiv.children;
      
      // Phase 1: Animate container
      gsap.fromTo(
        letterAnimationDiv,
        { 
          width: 0, 
          height: 0, 
          opacity: 0 
        },
        {
          width: "auto",
          height: "auto", 
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.5,
        }
      );
      
      // Phase 2: Animate individual letters
      gsap.fromTo(
        letters,
        { 
          scale: 0.8, 
          rotation: -30 
        },
        {
          scale: 1,
          rotation: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.1,
          delay: 1.3, // Start after container animation
        }
      );
    }
  }
};

// Option 4: Slide animation for the container
export const animateContainerSlide = (lettersRef: React.RefObject<HTMLDivElement>) => {
  if (lettersRef.current) {
    const letterAnimationDiv = lettersRef.current.querySelector('.letter_animation');
    
    if (letterAnimationDiv) {
      gsap.fromTo(
        letterAnimationDiv,
        { 
          x: -200, 
          opacity: 0,
          scale: 0.8
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.5,
        }
      );
    }
  }
};

// Option 5: Scale animation for the container
export const animateContainerScale = (lettersRef: React.RefObject<HTMLDivElement>) => {
  if (lettersRef.current) {
    const letterAnimationDiv = lettersRef.current.querySelector('.letter_animation');
    
    if (letterAnimationDiv) {
      gsap.fromTo(
        letterAnimationDiv,
        { 
          scale: 0, 
          opacity: 0,
          rotation: -180
        },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 1.2,
          ease: "back.out(1.7)",
          delay: 0.5,
        }
      );
    }
  }
};
