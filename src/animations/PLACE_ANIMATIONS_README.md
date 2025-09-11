# Place Section Animations

This document describes the scroll-triggered animations implemented for the Place section of the MOMOAMO website.

## Animation Hook: `usePlaceAnimations()`

The Place section includes comprehensive scroll animations for all major elements:

### Animation Elements
```tsx
const { titleRef, descriptionRef, buttonRef, imagesRef, destinationsRef } = usePlaceAnimations();
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

3. **Button Animation** (0s)
   - **Trigger**: When button enters viewport (80% from top)
   - **Effect**: Scale in with bounce effect
   - **Duration**: 0.8 seconds
   - **Easing**: back.out(1.7)

4. **Images Animation** (0s)
   - **Trigger**: When images container enters viewport (80% from top)
   - **Effect**: Staggered slide up with scale effect
   - **Duration**: 1.2 seconds per image
   - **Stagger**: 0.2 seconds between images
   - **Easing**: power3.out

5. **Destinations Animation** (0s)
   - **Trigger**: When destinations container enters viewport (80% from top)
   - **Effect**: Staggered slide up with scale effect
   - **Duration**: 1.0 seconds per destination
   - **Stagger**: 0.1 seconds between destinations
   - **Easing**: power3.out

## Place Section Structure

### Component Layout
```tsx
<section>
  <h1 ref={titleRef}>
    {/* "Plus qu'un lieu, un moment" */}
  </h1>
  
  <div ref={descriptionRef}>
    {/* Description text */}
  </div>
  
  <div ref={buttonRef}>
    {/* "RÉSERVER VOTRE OFFSITE" button */}
  </div>
  
  <div ref={imagesRef}>
    {/* 4 images in a row */}
  </div>
  
  <div ref={destinationsRef}>
    {/* Destinations list */}
  </div>
</section>
```

### Content Elements
- **Title**: "Plus qu'un lieu, un moment"
- **Description**: Long descriptive text about unique places
- **Button**: "RÉSERVER VOTRE OFFSITE" with arrow icon
- **Images**: 4 images in a horizontal row
- **Destinations**: List of upcoming destinations (Perche, Normandie, Deauville, Vexin)

## Animation Properties

### Common Properties
- **ScrollTrigger**: All animations use ScrollTrigger
- **Start Position**: "top 80%" (element enters viewport)
- **Toggle Actions**: "play none none reverse"
- **Performance**: Uses transform and opacity for smooth animations

### Animation Types Used
1. **Slide Up**: `y: 100px → y: 0px` or `y: 50px → y: 0px`
2. **Fade In**: `opacity: 0 → opacity: 1`
3. **Scale Effect**: `scale: 0.8 → scale: 1` or `scale: 0.9 → scale: 1`
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
| Element | Duration | Stagger | Easing | Effect |
|---------|----------|---------|--------|--------|
| Title | 1.2s | - | power3.out | Slide up + fade |
| Description | 1.0s | - | power3.out | Slide up + fade |
| Button | 0.8s | - | back.out(1.7) | Scale in + bounce |
| Images | 1.2s | 0.2s | power3.out | Slide up + scale |
| Destinations | 1.0s | 0.1s | power3.out | Slide up + scale |

## Visual Effects

### Animation Flow
1. **Title**: Dramatic slide up entrance
2. **Description**: Subtle slide up with fade
3. **Button**: Scale in with bounce effect
4. **Images**: Staggered entrance with scale effect (4 images)
5. **Destinations**: Staggered entrance with scale effect (4 destinations)

### Staggered Effects
- **Images**: Each image animates with 0.2s delay
- **Destinations**: Each destination animates with 0.1s delay
- **Sequential Appearance**: Creates flowing, sequential visual effect

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

## Complete Animation Coverage

With the Place section animations implemented, all sections of the MOMOAMO website now have scroll-triggered animations:

- ✅ **Hero**: Entrance animations with letter sequence
- ✅ **Castle**: Title, features, swiper animations
- ✅ **Offsite**: Title, description, images, bottom content
- ✅ **Vacation**: Title, first row, second row
- ✅ **House**: Title, swiper, description, features
- ✅ **Place**: Title, description, button, images, destinations
- ✅ **Power**: Left content, right content, stats, swiper
- ✅ **FAQ**: Title, accordion

The website now provides a cohesive, engaging user experience with smooth animations throughout the entire scroll journey!
