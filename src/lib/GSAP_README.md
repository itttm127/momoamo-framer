# GSAP Animation Setup

This project includes a complete GSAP (GreenSock Animation Platform) setup with React integration.

## Files Created

### 1. `src/lib/gsap.ts`
- Main GSAP configuration and utility functions
- Registers ScrollTrigger and TextPlugin
- Provides pre-built animation functions (fadeIn, slideUp, scaleIn, etc.)

### 2. `src/contexts/GSAPContext.tsx`
- React context provider for GSAP
- Provides access to GSAP and ScrollTrigger throughout the app
- Handles cleanup and initialization

### 3. `src/hooks/useGSAPAnimation.ts`
- Custom React hooks for GSAP animations
- Includes specific hooks: useFadeIn, useSlideUp, useSlideDown, etc.
- Handles ScrollTrigger integration automatically

### 4. `src/components/GSAPExample.tsx`
- Example component demonstrating various GSAP animations
- Shows both manual GSAP usage and custom hooks

## Usage Examples

### Using Custom Hooks

```tsx
import { useFadeIn, useSlideUp, useStaggerIn } from "@/hooks/useGSAPAnimation";

const MyComponent = () => {
  const fadeInRef = useFadeIn();
  const slideUpRef = useSlideUp();
  const staggerRef = useStaggerIn();

  return (
    <div>
      <div ref={fadeInRef}>This will fade in</div>
      <div ref={slideUpRef}>This will slide up</div>
      <div ref={staggerRef}>This will stagger in</div>
    </div>
  );
};
```

### Manual GSAP Usage

```tsx
import { gsap } from "@/lib/gsap";
import { useEffect, useRef } from "react";

const MyComponent = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      gsap.fromTo(
        elementRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return <div ref={elementRef}>Animated element</div>;
};
```

### Using GSAP Context

```tsx
import { useGSAP } from "@/contexts/GSAPContext";

const MyComponent = () => {
  const { gsap, ScrollTrigger, createTimeline } = useGSAP();

  useEffect(() => {
    const timeline = createTimeline();
    timeline
      .to(".element1", { opacity: 1, duration: 0.5 })
      .to(".element2", { opacity: 1, duration: 0.5 }, "-=0.25");
  }, []);

  return <div>Component content</div>;
};
```

## Available Animation Functions

### From `gsapUtils`:
- `fadeIn()` - Fade in animation
- `fadeOut()` - Fade out animation
- `slideUp()` - Slide up from bottom
- `slideDown()` - Slide down from top
- `scaleIn()` - Scale in with bounce effect
- `staggerIn()` - Staggered animation for multiple elements
- `textReveal()` - Text reveal animation
- `scrollTrigger()` - Scroll-triggered animation
- `createTimeline()` - Create GSAP timeline
- `killAll()` - Kill all animations
- `refresh()` - Refresh ScrollTrigger

### Custom Hooks:
- `useFadeIn()` - Fade in hook
- `useSlideUp()` - Slide up hook
- `useSlideDown()` - Slide down hook
- `useScaleIn()` - Scale in hook
- `useStaggerIn()` - Stagger animation hook

## ScrollTrigger Options

```tsx
const options = {
  trigger: "element", // Element to trigger on
  start: "top 80%", // When to start animation
  end: "bottom 20%", // When to end animation
  toggleActions: "play none none reverse", // Actions on scroll
  once: true, // Play only once
  markers: false, // Show debug markers
  scrub: true, // Tie animation to scroll position
  pin: false, // Pin element during animation
  snap: true, // Snap to certain scroll positions
};
```

## Best Practices

1. **Always clean up animations** in useEffect cleanup
2. **Use ScrollTrigger sparingly** - too many can impact performance
3. **Prefer CSS transforms** over layout properties for better performance
4. **Use will-change CSS property** for elements that will be animated
5. **Test on mobile devices** - animations can behave differently

## Performance Tips

- Use `transform` and `opacity` for best performance
- Avoid animating `width`, `height`, `top`, `left` properties
- Use `will-change: transform` CSS property for animated elements
- Consider using `gsap.set()` for initial states
- Use `gsap.killTweensOf()` to stop specific animations

## Troubleshooting

- **Animations not working**: Check if element exists before animating
- **ScrollTrigger not firing**: Ensure element has height and is in viewport
- **Performance issues**: Reduce number of simultaneous animations
- **Mobile issues**: Test on actual devices, not just browser dev tools
