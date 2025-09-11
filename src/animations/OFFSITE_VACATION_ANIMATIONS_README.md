# Offsite & Vacation Section Animations

This document describes the scroll-triggered animations implemented for the Offsite and Vacation sections of the MOMOAMO website.

## New Animation Hooks Added

### 1. `useOffsiteAnimations()`
Animates the Offsite section with multiple elements:
- **Title**: Slide up with fade in
- **Description**: Slide up with fade in  
- **Images**: Staggered slide up with scale effect
- **Bottom Content**: Slide up with fade in

### 2. `useVacationAnimations()`
Animates the Vacation section with multiple elements:
- **Title**: Slide up with fade in
- **First Row**: Staggered slide up with scale effect
- **Second Row**: Staggered slide up with scale effect

## Offsite Section Animations

### Animation Elements
```tsx
const { titleRef, descriptionRef, imagesRef, bottomContentRef } = useOffsiteAnimations();
```

### Animation Sequence
1. **Title Animation** (0s)
   - **Trigger**: When title enters viewport (80% from top)
   - **Effect**: Slide up from y: 100px to y: 0px
   - **Duration**: 1.2 seconds
   - **Easing**: power3.out

2. **Description Animation** (0s)
   - **Trigger**: When description enters viewport (80% from top)
   - **Effect**: Slide up from y: 50px to y: 0px
   - **Duration**: 1.0 seconds
   - **Easing**: power3.out

3. **Images Animation** (0s)
   - **Trigger**: When images container enters viewport (80% from top)
   - **Effect**: Staggered slide up with scale effect
   - **Duration**: 1.2 seconds per image
   - **Stagger**: 0.2 seconds between images
   - **Easing**: power3.out

4. **Bottom Content Animation** (0s)
   - **Trigger**: When bottom content enters viewport (80% from top)
   - **Effect**: Slide up from y: 50px to y: 0px
   - **Duration**: 1.0 seconds
   - **Easing**: power3.out

### Offsite Section Structure
```tsx
<section>
  <div ref={titleRef}>
    {/* Title content */}
  </div>
  
  <div ref={descriptionRef}>
    {/* Description content */}
  </div>
  
  <div ref={imagesRef}>
    {/* 4 images with absolute positioning */}
  </div>
  
  <div ref={bottomContentRef}>
    {/* Bottom text content */}
  </div>
</section>
```

## Vacation Section Animations

### Animation Elements
```tsx
const { titleRef, firstRowRef, secondRowRef } = useVacationAnimations();
```

### Animation Sequence
1. **Title Animation** (0s)
   - **Trigger**: When title enters viewport (80% from top)
   - **Effect**: Slide up from y: 100px to y: 0px
   - **Duration**: 1.2 seconds
   - **Easing**: power3.out

2. **First Row Animation** (0s)
   - **Trigger**: When first row enters viewport (80% from top)
   - **Effect**: Staggered slide up with scale effect
   - **Duration**: 1.0 seconds per element
   - **Stagger**: 0.15 seconds between elements
   - **Easing**: power3.out

3. **Second Row Animation** (0s)
   - **Trigger**: When second row enters viewport (80% from top)
   - **Effect**: Staggered slide up with scale effect
   - **Duration**: 1.0 seconds per element
   - **Stagger**: 0.15 seconds between elements
   - **Easing**: power3.out

### Vacation Section Structure
```tsx
<section>
  <div ref={titleRef}>
    {/* Title content */}
  </div>
  
  <div>
    <div ref={firstRowRef}>
      {/* First row: MAKE IT MEMORABLE */}
    </div>
    
    <div ref={secondRowRef}>
      {/* Second row: Effortless simplicity */}
    </div>
  </div>
</section>
```

## Animation Properties

### Common Properties
- **ScrollTrigger**: All animations use ScrollTrigger
- **Start Position**: "top 80%" (element enters viewport)
- **Toggle Actions**: "play none none reverse"
- **Performance**: Uses transform and opacity for smooth animations

### Animation Types Used
1. **Slide Up**: `y: 100px → y: 0px` or `y: 50px → y: 0px`
2. **Fade In**: `opacity: 0 → opacity: 1`
3. **Scale Effect**: `scale: 0.9 → scale: 1` or `scale: 0.95 → scale: 1`
4. **Stagger**: Sequential animations with delays

## Implementation Details

### ScrollTrigger Configuration
```javascript
scrollTrigger: {
  trigger: elementRef.current,
  start: "top 80%",
  toggleActions: "play none none reverse",
}
```

### Animation Timing
| Section | Element | Duration | Stagger | Easing |
|---------|---------|----------|---------|--------|
| Offsite | Title | 1.2s | - | power3.out |
| Offsite | Description | 1.0s | - | power3.out |
| Offsite | Images | 1.2s | 0.2s | power3.out |
| Offsite | Bottom Content | 1.0s | - | power3.out |
| Vacation | Title | 1.2s | - | power3.out |
| Vacation | First Row | 1.0s | 0.15s | power3.out |
| Vacation | Second Row | 1.0s | 0.15s | power3.out |

## Visual Effects

### Offsite Section
- **Title**: Dramatic slide up entrance
- **Description**: Subtle slide up with fade
- **Images**: Staggered entrance with scale effect (4 images)
- **Bottom Content**: Final slide up with fade

### Vacation Section
- **Title**: Large title slide up entrance
- **First Row**: "MAKE IT MEMORABLE" with image and text
- **Second Row**: "Effortless simplicity" with image and text
- **Staggered Elements**: Each row's elements animate sequentially

## Performance Optimizations

### Applied Optimizations
- **Transform-based**: Uses translateY, scale, opacity
- **GPU Acceleration**: Smooth 60fps animations
- **Stagger Timing**: Prevents overwhelming animations
- **Context Cleanup**: Proper GSAP context management
- **ScrollTrigger Refresh**: Automatic refresh handling

### Best Practices
- Use `transform` and `opacity` for best performance
- Avoid animating layout properties
- Implement proper cleanup in useEffect
- Use stagger delays to prevent animation overload

## Integration with Existing System

### GSAP Context
- Uses the existing GSAP context system
- Proper cleanup and memory management
- No conflicts with other animations

### ScrollTrigger
- Integrates with existing ScrollTrigger setup
- Consistent timing and easing
- Responsive behavior

## Customization Options

### Timing Adjustments
```javascript
// Modify animation duration
duration: 1.5, // Increase duration

// Modify stagger timing
stagger: 0.3, // Increase stagger delay
```

### Easing Modifications
```javascript
// Different easing options
ease: "power2.out", // Smoother
ease: "back.out(1.7)", // Bouncy
ease: "elastic.out(1, 0.3)", // Elastic
```

### ScrollTrigger Customization
```javascript
// Custom ScrollTrigger settings
scrollTrigger: {
  trigger: elementRef.current,
  start: "top 70%", // Earlier trigger
  end: "bottom 30%", // Custom end
  toggleActions: "play pause resume reverse",
  once: true, // Play only once
}
```

## Troubleshooting

### Common Issues
1. **Animations not playing**: Check if elements have proper refs
2. **Stagger not working**: Ensure elements have the same parent
3. **Performance issues**: Reduce stagger delays or animation complexity
4. **Mobile issues**: Test on actual devices

### Debug Mode
```javascript
// Enable GSAP markers for debugging
ScrollTrigger.config({
  markers: true
});
```

## Future Enhancements

### Potential Additions
- **Parallax effects**: Background movement
- **Intersection Observer**: Alternative to ScrollTrigger
- **Reduced motion**: Respect user preferences
- **Mobile optimization**: Lighter animations for mobile

### Performance Improvements
- **Virtual scrolling**: For long lists
- **Animation pooling**: Reuse animation instances
- **Batch updates**: Group multiple animations
- **Memory management**: Better cleanup strategies
