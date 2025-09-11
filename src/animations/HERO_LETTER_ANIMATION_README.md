# Hero Letter Animation Sequence

This document describes the updated hero section animation sequence that implements a width/height animation for the MOMOAMOR letters before other animations begin.

## Animation Sequence Overview

The hero animations now follow a strict sequential timeline:

1. **Header Animation** (0.2s) - Slides down from top
2. **Letter Animation** (0.5s - 1.9s) - Width/height animation followed by scale/rotation
3. **Title Animation** (1.9s - 2.9s) - Slides up with stagger
4. **Button Animation** (2.5s - 3.3s) - Scale in with bounce
5. **Images Animation** (3.3s - 5.1s) - Staggered entrance from different directions

## Letter Animation Details

### Phase 1: Width & Height Animation (0.5s - 1.3s)
- **Duration**: 0.8 seconds
- **Stagger**: 0.1 seconds between letters
- **Properties**: 
  - `width: 0` → `width: auto`
  - `height: 0` → `height: auto`
  - `opacity: 0` → `opacity: 1`
- **Easing**: `power2.out`

### Phase 2: Scale & Rotation Animation (1.3s - 1.9s)
- **Duration**: 0.6 seconds
- **Stagger**: 0.1 seconds between letters
- **Properties**:
  - `scale: 0.8` → `scale: 1`
  - `rotation: -30` → `rotation: 0`
- **Easing**: `back.out(1.7)` (bounce effect)

## CSS Implementation

### Initial State
```css
.letter_animation {
  /* Container starts with no dimensions */
  width: 0;
  height: 0;
  overflow: hidden;
}

.letter_animation .hero-letter {
  /* Individual letters start with no dimensions */
  width: 0;
  height: 0;
  opacity: 0;
}
```

### Animation Properties
The GSAP animation overrides the CSS initial state:
- `width: "auto"` - Restores natural width
- `height: "auto"` - Restores natural height
- `opacity: 1` - Makes letters visible

## Timeline Structure

### Master Timeline
```javascript
const masterTimeline = gsap.timeline();

// Header (0.2s)
masterTimeline.fromTo(headerRef.current, {...}, {...}, 0.2);

// Letters Phase 1 (0.5s)
masterTimeline.fromTo(letters, {width: 0, height: 0, opacity: 0}, {...}, 0.5);

// Letters Phase 2 (1.3s)
masterTimeline.fromTo(letters, {scale: 0.8, rotation: -30}, {...}, 1.3);

// Title (1.9s)
masterTimeline.fromTo(titleElements, {...}, {...}, 1.9);

// Button (2.5s)
masterTimeline.fromTo(buttonRef.current, {...}, {...}, 2.5);

// Images (3.3s, 3.5s, 3.7s, 3.9s)
masterTimeline.fromTo(images[0], {...}, {...}, 3.3);
masterTimeline.fromTo(images[1], {...}, {...}, 3.5);
masterTimeline.fromTo(images[2], {...}, {...}, 3.7);
masterTimeline.fromTo(images[3], {...}, {...}, 3.9);
```

## Animation Timing Breakdown

| Element | Start Time | Duration | End Time | Description |
|---------|------------|----------|----------|-------------|
| Header | 0.2s | 1.0s | 1.2s | Slide down from top |
| Letters (Phase 1) | 0.5s | 0.8s | 1.3s | Width/height animation |
| Letters (Phase 2) | 1.3s | 0.6s | 1.9s | Scale/rotation animation |
| Title | 1.9s | 1.0s | 2.9s | Slide up with stagger |
| Button | 2.5s | 0.8s | 3.3s | Scale in with bounce |
| Images | 3.3s | 1.5s | 4.8s | Staggered entrance |

## Key Features

### Sequential Animation
- All animations are chained using a master timeline
- Each animation waits for the previous one to complete
- No overlapping animations for cleaner visual flow

### Letter Animation Priority
- Letters animate first with width/height expansion
- Other elements wait for letter animation to complete
- Creates a dramatic reveal effect for the MOMOAMOR text

### Staggered Effects
- Letters animate with 0.1s stagger
- Images animate with 0.2s stagger
- Creates flowing, sequential appearance

### Performance Optimized
- Uses `transform` and `opacity` for smooth animations
- GPU-accelerated properties for 60fps performance
- Proper cleanup and context management

## Visual Effect

### Letter Animation Flow
1. **Initial State**: Letters have no width/height (invisible)
2. **Width/Height Expansion**: Letters grow to natural size with stagger
3. **Scale/Rotation**: Letters get final bounce and rotation effect
4. **Complete**: Letters are fully visible and positioned

### Overall Sequence
1. Header slides down
2. MOMOAMOR letters expand from nothing to full size
3. Title text slides up
4. Button scales in with bounce
5. Images slide in from different directions

## Customization Options

### Timing Adjustments
```javascript
// Modify letter animation timing
masterTimeline.fromTo(
  letters,
  { width: 0, height: 0, opacity: 0 },
  {
    width: "auto",
    height: "auto", 
    opacity: 1,
    duration: 1.0, // Increase duration
    stagger: 0.15, // Increase stagger
  },
  0.3 // Start earlier
);
```

### Easing Modifications
```javascript
// Different easing for letters
ease: "elastic.out(1, 0.3)", // More bouncy
ease: "power4.out", // Smoother
ease: "bounce.out", // Bouncy
```

### Stagger Variations
```javascript
// Different stagger patterns
stagger: 0.05, // Faster stagger
stagger: 0.2, // Slower stagger
stagger: {
  amount: 0.5,
  from: "center" // Stagger from center outward
}
```

## Troubleshooting

### Common Issues
1. **Letters not animating**: Check CSS initial state and GSAP selectors
2. **Timing conflicts**: Ensure master timeline is used consistently
3. **Performance issues**: Use `transform` and `opacity` only
4. **Mobile issues**: Test on actual devices

### Debug Mode
```javascript
// Add markers to timeline for debugging
const masterTimeline = gsap.timeline({
  onUpdate: () => console.log("Timeline progress:", masterTimeline.progress())
});
```

### Performance Monitoring
```javascript
// Monitor animation performance
gsap.config({
  nullTargetWarn: false,
  trialWarn: false
});
```

## Integration Notes

### With Existing Animations
- Works seamlessly with scroll-triggered animations
- No conflicts with other GSAP animations
- Proper context management prevents memory leaks

### Responsive Considerations
- Animation timing works on all screen sizes
- Stagger effects scale appropriately
- Performance optimized for mobile devices

### Browser Compatibility
- Uses modern CSS properties
- GSAP handles browser differences
- Fallbacks for older browsers
