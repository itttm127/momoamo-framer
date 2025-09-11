# Footer Section Animations

This document describes the scroll-triggered animations implemented for the Footer section of the MOMOAMO website.

## Animation Hook: `useFooterAnimations()`

The Footer section includes comprehensive scroll animations for all major elements:

### Animation Elements
```tsx
const { topContentRef, imageRef, socialRef, linksRef, lettersRef } = useFooterAnimations();
```

### Animation Sequence
1. **Top Content Animation** (0s)
   - **Trigger**: When top content enters viewport (80% from top)
   - **Effect**: Slide up from y: 100px to y: 0px
   - **Duration**: 1.2 seconds
   - **Easing**: power3.out

2. **Image Animation** (0s)
   - **Trigger**: When image enters viewport (80% from top)
   - **Effect**: Slide in from right with scale effect
   - **Duration**: 1.2 seconds
   - **Easing**: power3.out

3. **Social Links Animation** (0s)
   - **Trigger**: When social links enter viewport (80% from top)
   - **Effect**: Slide up from y: 50px to y: 0px
   - **Duration**: 1.0 seconds
   - **Easing**: power3.out

4. **Links Animation** (0s)
   - **Trigger**: When links section enters viewport (80% from top)
   - **Effect**: Slide up from y: 50px to y: 0px
   - **Duration**: 1.0 seconds
   - **Easing**: power3.out

5. **Letters Animation** (0s)
   - **Trigger**: When letters container enters viewport (80% from top)
   - **Effect**: Staggered slide up with scale effect
   - **Duration**: 1.0 seconds per letter
   - **Stagger**: 0.1 seconds between letters
   - **Easing**: power3.out

## Footer Section Structure

### Component Layout
```tsx
<section>
  <div className="top-section">
    <div ref={topContentRef}>
      {/* "Join the community" title, description, button */}
    </div>
    <div ref={imageRef}>
      {/* Large image */}
    </div>
  </div>
  
  <div className="middle-section">
    <div ref={socialRef}>
      {/* INSTAGRAM, LINKEDIN */}
    </div>
    <div ref={linksRef}>
      {/* MORE section with Privacy Policy, Cookie Policy, Copyright */}
    </div>
  </div>
  
  <div ref={lettersRef}>
    {/* MOMOAMOR letters */}
  </div>
</section>
```

### Content Elements
- **Top Content**: "Join the community" title, description, "BE FIRST TO JOIN" button
- **Image**: Large offsite image
- **Social Links**: INSTAGRAM and LINKEDIN headings
- **Links**: MORE section with Privacy Policy, Cookie Policy, Copyright
- **Letters**: MOMOAMOR letter sequence

## Animation Properties

### Common Properties
- **ScrollTrigger**: All animations use ScrollTrigger
- **Start Position**: "top 80%" (element enters viewport)
- **Toggle Actions**: "play none none reverse"
- **Performance**: Uses transform and opacity for smooth animations

### Animation Types Used
1. **Slide Up**: `y: 100px → y: 0px` or `y: 50px → y: 0px`
2. **Slide Right**: `x: 100px → x: 0px`
3. **Fade In**: `opacity: 0 → opacity: 1`
4. **Scale Effect**: `scale: 0.8 → scale: 1` or `scale: 0.9 → scale: 1`
5. **Stagger**: Sequential animations with delays

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
| Top Content | 1.2s | - | power3.out | Slide up + fade |
| Image | 1.2s | - | power3.out | Slide right + scale |
| Social Links | 1.0s | - | power3.out | Slide up + fade |
| Links | 1.0s | - | power3.out | Slide up + fade |
| Letters | 1.0s | 0.1s | power3.out | Slide up + scale |

## Visual Effects

### Animation Flow
1. **Top Content**: "Join the community" section slides up dramatically
2. **Image**: Large image slides in from the right with scale effect
3. **Social Links**: INSTAGRAM and LINKEDIN headings slide up
4. **Links**: MORE section with policies slides up
5. **Letters**: MOMOAMOR letters animate with stagger effect

### Staggered Effects
- **Letters**: Each letter animates with 0.1s delay
- **Sequential Appearance**: Creates flowing, sequential visual effect
- **Final Touch**: Letters provide a dramatic conclusion to the page

## Performance Optimizations

### Applied Optimizations
- **Transform-based**: Uses translateY, translateX, scale, opacity
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
stagger: 0.15, // Increase stagger delay
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

With the Footer section animations implemented, **ALL sections** of the MOMOAMO website now have scroll-triggered animations:

- ✅ **Hero**: Entrance animations with letter sequence
- ✅ **Castle**: Title, features, swiper animations
- ✅ **Offsite**: Title, description, images, bottom content
- ✅ **Vacation**: Title, first row, second row
- ✅ **House**: Title, swiper, description, features
- ✅ **Place**: Title, description, button, images, destinations
- ✅ **Power**: Left content, right content, stats, swiper
- ✅ **FAQ**: Title, accordion
- ✅ **Footer**: Top content, image, social links, links, letters

The website now provides a **complete, cohesive, engaging user experience** with smooth animations throughout the entire scroll journey from top to bottom! Every section has been carefully animated to create a professional, modern feel that guides users through the content naturally and provides a satisfying conclusion with the footer animations.
