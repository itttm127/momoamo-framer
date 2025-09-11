# Scroll-Triggered Animations System

This document describes the comprehensive scroll-triggered animation system implemented across all sections of the MOMOAMO website.

## Files Created

### 1. `src/animations/scrollAnimations.tsx`
Contains all scroll animation hooks and utilities:
- Generic animation hooks (fadeIn, slideUp, slideLeft, slideRight, scaleIn, staggerIn)
- Section-specific animation hooks (Castle, House, Power, FAQ)
- Parallax effects and counter animations

### 2. Updated Components
- `src/components/castle.tsx` - Castle section animations
- `src/components/house.tsx` - House section animations  
- `src/components/power.tsx` - Power section animations
- `src/components/faq.tsx` - FAQ section animations

## Generic Animation Hooks

### Basic Animations
```tsx
// Fade in animation
const fadeInRef = useScrollFadeIn(delay);

// Slide up animation
const slideUpRef = useScrollSlideUp(delay);

// Slide left animation
const slideLeftRef = useScrollSlideLeft(delay);

// Slide right animation
const slideRightRef = useScrollSlideRight(delay);

// Scale in animation
const scaleInRef = useScrollScaleIn(delay);

// Stagger animation for multiple elements
const staggerRef = useScrollStaggerIn(staggerDelay, delay);
```

### Usage Example
```tsx
const MyComponent = () => {
  const fadeInRef = useScrollFadeIn(0.2);
  const staggerRef = useScrollStaggerIn(0.1, 0.5);

  return (
    <div>
      <div ref={fadeInRef}>This fades in on scroll</div>
      <div ref={staggerRef}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </div>
    </div>
  );
};
```

## Section-Specific Animations

### Castle Section (`useCastleAnimations`)
- **Title Animation**: Slide up with fade in
- **Features Animation**: Staggered scale-in with bounce
- **Swiper Animation**: Slide up with fade in

```tsx
const { titleRef, featuresRef, swiperRef } = useCastleAnimations();
```

### House Section (`useHouseAnimations`)
- **Title Animation**: Slide up with fade in
- **Swiper Animation**: Slide up with fade in
- **Description Animation**: Slide up with fade in
- **Features Animation**: Staggered scale-in with bounce

```tsx
const { titleRef, swiperRef, featuresRef, descriptionRef } = useHouseAnimations();
```

### Power Section (`usePowerAnimations`)
- **Left Content**: Slide in from left
- **Right Content**: Slide in from right
- **Stats**: Staggered scale-in with bounce
- **Swiper**: Slide up with fade in

```tsx
const { leftContentRef, rightContentRef, statsRef, swiperRef } = usePowerAnimations();
```

### FAQ Section (`useFAQAnimations`)
- **Title Animation**: Slide up with fade in
- **Accordion Animation**: Slide up with fade in

```tsx
const { titleRef, accordionRef } = useFAQAnimations();
```

## Animation Timing & Effects

### Default ScrollTrigger Settings
- **Start**: "top 80%" (element enters viewport)
- **End**: "bottom 20%" (element leaves viewport)
- **Toggle Actions**: "play none none reverse"
- **Duration**: 0.8-1.5 seconds
- **Easing**: power2.out, power3.out, back.out(1.7)

### Animation Types
1. **Fade In**: Opacity 0 → 1
2. **Slide Up**: Y: 100px → 0px
3. **Slide Left**: X: -100px → 0px
4. **Slide Right**: X: 100px → 0px
5. **Scale In**: Scale: 0.8 → 1.0
6. **Stagger**: Sequential animations with delay

## Advanced Features

### Parallax Effects
```tsx
const parallaxRef = useParallaxEffect(0.5); // 50% parallax speed
```

### Counter Animations
```tsx
const counterRef = useCounterAnimation(1000, 2); // Count to 1000 over 2 seconds
```

### Custom ScrollTrigger Options
```tsx
const customRef = useScrollFadeIn(0, {
  start: "top 90%",
  end: "bottom 10%",
  toggleActions: "play pause resume reverse",
  once: true,
  markers: false
});
```

## Performance Optimizations

### Applied Optimizations
- **Transform-based animations**: Using translateX, translateY, scale
- **Opacity animations**: Smooth fade effects
- **Stagger timing**: Prevents overwhelming animations
- **Context cleanup**: Proper GSAP context management
- **ScrollTrigger refresh**: Automatic refresh handling

### Best Practices
- Use `transform` and `opacity` for best performance
- Avoid animating layout properties (width, height, top, left)
- Use `will-change: transform` CSS property for animated elements
- Implement proper cleanup in useEffect
- Use stagger delays to prevent animation overload

## Animation Sequence

### Page Load Sequence
1. **Hero Section**: Entrance animations (already implemented)
2. **Castle Section**: Title → Features → Swiper
3. **House Section**: Title → Swiper → Description → Features
4. **Power Section**: Left Content + Right Content → Stats → Swiper
5. **FAQ Section**: Title → Accordion

### Timing Overview
| Section | Elements | Animation Type | Duration | Delay |
|---------|----------|----------------|----------|-------|
| Castle | Title | Slide Up | 1.2s | 0s |
| Castle | Features | Stagger Scale | 0.8s each | 0s |
| Castle | Swiper | Slide Up | 1.5s | 0s |
| House | Title | Slide Up | 1.2s | 0s |
| House | Swiper | Slide Up | 1.5s | 0s |
| House | Description | Slide Up | 1.0s | 0s |
| House | Features | Stagger Scale | 0.8s each | 0s |
| Power | Left Content | Slide Left | 1.2s | 0s |
| Power | Right Content | Slide Right | 1.2s | 0s |
| Power | Stats | Stagger Scale | 0.8s each | 0s |
| Power | Swiper | Slide Up | 1.5s | 0s |
| FAQ | Title | Slide Up | 1.2s | 0s |
| FAQ | Accordion | Slide Up | 1.0s | 0s |

## Customization Options

### Timing Adjustments
```tsx
// Modify animation delays
const customAnimations = useCastleAnimations({
  titleDelay: 0.5,
  featuresDelay: 1.0,
  swiperDelay: 1.5
});
```

### Easing Modifications
```tsx
// Custom easing functions
gsap.fromTo(element, 
  { opacity: 0 },
  { 
    opacity: 1,
    ease: "elastic.out(1, 0.3)",
    duration: 1.5
  }
);
```

### ScrollTrigger Customization
```tsx
// Custom ScrollTrigger settings
scrollTrigger: {
  trigger: element,
  start: "top 70%",
  end: "bottom 30%",
  toggleActions: "play none none reverse",
  once: true,
  markers: false,
  scrub: true
}
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

### Performance Monitoring
```tsx
// Monitor animation performance
gsap.config({
  nullTargetWarn: false,
  trialWarn: false
});
```

## Future Enhancements

### Potential Additions
- **Intersection Observer**: Alternative to ScrollTrigger
- **Reduced motion**: Respect user preferences
- **Mobile optimization**: Lighter animations for mobile
- **Lazy loading**: Animate only visible elements
- **GPU acceleration**: Force hardware acceleration
- **Animation presets**: Pre-built animation combinations

### Performance Improvements
- **Virtual scrolling**: For long lists
- **Animation pooling**: Reuse animation instances
- **Batch updates**: Group multiple animations
- **Memory management**: Better cleanup strategies

## Integration with Existing Animations

### Hero Section Integration
The scroll animations work seamlessly with the existing hero entrance animations:
- Hero animations play on page load
- Scroll animations trigger as user scrolls
- No conflicts between animation systems

### Swiper Integration
All Swiper components are properly animated:
- Castle section: HanSwiper with slide-up animation
- House section: Swiper with slide-up animation
- Power section: Swiper with slide-up animation

### Accordion Integration
FAQ accordion animations work with existing CSS transitions:
- Scroll animation for accordion container
- CSS transitions for individual accordion items
- Smooth integration between systems
