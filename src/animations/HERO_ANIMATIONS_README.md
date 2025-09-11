# Hero Section GSAP Animations

This document describes the comprehensive GSAP animation system implemented for the hero section of the MOMOAMO website.

## Files Created

### 1. `src/animations/hero.tsx`
Contains all hero-related animation hooks and functions:
- `useHeroAnimations()` - Main entrance animations
- `useHeroScrollAnimations()` - Scroll-triggered animations
- `useHeroInteractiveAnimations()` - Interactive hover effects
- `useHeroTimeline()` - Timeline-based animation sequence

### 2. Updated `src/components/hero.tsx`
- Added "use client" directive
- Integrated animation hooks
- Added CSS classes for animation targeting
- Added refs for animation elements

## Animation Sequence

### 1. Header Animation (0.2s delay)
- **Effect**: Slide down from top
- **Duration**: 1 second
- **Easing**: power3.out
- **Elements**: Navigation links and buttons

### 2. Letters Animation (0.5s delay)
- **Effect**: Staggered scale-in with rotation
- **Duration**: 1.2 seconds per letter
- **Easing**: back.out(1.7) with bounce
- **Stagger**: 0.15 seconds between letters
- **Elements**: M-O-M-O-A-M-O-R letters

### 3. Title Animation (1.2s delay)
- **Effect**: Slide up with stagger
- **Duration**: 1 second per element
- **Easing**: power3.out
- **Stagger**: 0.2 seconds between elements
- **Elements**: Main headings and description

### 4. Button Animation (1.8s delay)
- **Effect**: Scale-in with bounce
- **Duration**: 0.8 seconds
- **Easing**: back.out(1.7)
- **Elements**: "RÉSERVER VOTRE OFFSITE" button

### 5. Images Animation (2.0s+ delay)
- **House Image**: Slide in from right (2.0s delay)
- **User1 Image**: Slide in from left (2.2s delay)
- **User2 Image**: Slide in from bottom-left (2.4s delay)
- **User3 Image**: Fade in (2.6s delay, desktop only)

## Interactive Animations

### Button Hover Effects
- **Scale**: 1.05x on hover
- **Duration**: 0.3 seconds
- **Easing**: power2.out

### Letter Hover Effects
- **Scale**: 1.1x on hover
- **Rotation**: 5 degrees on hover
- **Duration**: 0.3 seconds
- **Easing**: power2.out

### Image Hover Effects
- **Scale**: 1.05x on hover
- **Duration**: 0.3 seconds
- **Easing**: power2.out

## CSS Classes Added

### Animation Targeting Classes
- `.hero-header` - Header element
- `.hero-letter` - Individual letter elements
- `.hero-title` - Title and description elements
- `.hero-button` - Main CTA button
- `.hero-image` - Image elements

## Usage Examples

### Basic Usage (Current Implementation)
```tsx
const HeroSection = () => {
    const { headerRef, lettersRef, titleRef, buttonRef, imagesRef } = useHeroAnimations();
    useHeroInteractiveAnimations();

    return (
        <section>
            <header ref={headerRef}>...</header>
            <div ref={lettersRef}>...</div>
            <div ref={titleRef}>...</div>
            <button ref={buttonRef}>...</button>
            <div ref={imagesRef}>...</div>
        </section>
    );
};
```

### Timeline-Based Animation
```tsx
const HeroSection = () => {
    const { playTimeline, restartTimeline } = useHeroTimeline();

    return (
        <section>
            <button onClick={playTimeline}>Play Animation</button>
            <button onClick={restartTimeline}>Restart Animation</button>
            {/* Hero content with CSS classes */}
        </section>
    );
};
```

### Scroll-Triggered Animations
```tsx
const HeroSection = () => {
    const { heroRef } = useHeroScrollAnimations();

    return (
        <section ref={heroRef}>
            <div className="hero-bg">Background with parallax</div>
            <div className="hero-content">Content with scale effect</div>
        </section>
    );
};
```

## Animation Timing

| Element | Delay | Duration | Effect |
|---------|-------|----------|---------|
| Header | 0.2s | 1.0s | Slide down |
| Letters | 0.5s | 1.2s each | Scale + rotate |
| Titles | 1.2s | 1.0s each | Slide up |
| Button | 1.8s | 0.8s | Scale bounce |
| Images | 2.0s+ | 1.5s each | Slide in |

## Performance Considerations

### Optimizations Applied
- **Transform-based animations**: Using scale, translate, rotate
- **Opacity animations**: Smooth fade effects
- **Stagger timing**: Prevents overwhelming animations
- **Context cleanup**: Proper GSAP context management
- **Event cleanup**: Interactive animation cleanup

### Best Practices
- Animations use `transform` and `opacity` for best performance
- Stagger delays prevent animation overload
- Interactive animations are lightweight (0.3s duration)
- Proper cleanup prevents memory leaks

## Customization Options

### Timing Adjustments
```tsx
// Modify animation delays
const customAnimations = useHeroAnimations({
    headerDelay: 0.5,    // Default: 0.2
    lettersDelay: 1.0,    // Default: 0.5
    titleDelay: 1.5,      // Default: 1.2
    buttonDelay: 2.0,     // Default: 1.8
    imagesDelay: 2.5,     // Default: 2.0
});
```

### Easing Modifications
```tsx
// Custom easing functions
gsap.fromTo(element, 
    { opacity: 0 },
    { 
        opacity: 1,
        ease: "elastic.out(1, 0.3)", // Custom elastic easing
        duration: 1.5
    }
);
```

## Troubleshooting

### Common Issues
1. **Animations not playing**: Check if elements have proper refs
2. **Stagger not working**: Ensure elements have the same parent
3. **Performance issues**: Reduce stagger delays or animation complexity
4. **Mobile issues**: Test on actual devices, not just browser dev tools

### Debug Mode
```tsx
// Enable GSAP markers for debugging
ScrollTrigger.config({
    markers: true
});
```

## Future Enhancements

### Potential Additions
- **Parallax scrolling**: Background image movement
- **Text reveal**: Character-by-character animation
- **Morphing effects**: Shape transitions
- **Particle effects**: Floating elements
- **Sound integration**: Audio feedback on interactions

### Performance Improvements
- **Reduced motion**: Respect user preferences
- **Mobile optimization**: Lighter animations for mobile
- **Lazy loading**: Animate only visible elements
- **GPU acceleration**: Force hardware acceleration
