# Simple Horizontal Slide Animation

## Overview
This animation creates a simple horizontal slide effect for the offsite section images, similar to the provided sample. Images slide in from right to left when they come into view during scrolling.

## Sample Reference
Based on the provided sample:
```javascript
gsap.to('.horizontal-sliders',{
  backgroundColor: 'red',
  scrollTrigger:{
    trigger:'.horizontal-sliders',
    toggleActions:'reset none play none',
    start:'top 100%',
    end: "bottom 0%",
  }
})
```

## Implementation Details

### Animation Behavior
1. **Initial State**: All images start 300px to the right with 70% opacity
2. **Trigger**: When the images container comes into view
3. **Animation**: Images slide horizontally to their final positions with staggered timing
4. **Duration**: 1.5 seconds with 0.15 second stagger between images

### ScrollTrigger Configuration
- **Trigger**: The images container (`imagesRef.current`)
- **Start**: `"top 100%"` - Animation starts when top of container reaches 100% of viewport
- **End**: `"bottom 0%"` - Animation ends when bottom reaches 0% of viewport
- **Toggle Actions**: `"play none none reverse"` - Play on enter, reverse on leave

### Animation Properties
- **Movement**: `x: 300` → `x: 0` (slide from right to left)
- **Opacity**: `0.7` → `1` (fade in effect)
- **Easing**: `"power2.out"` for smooth deceleration
- **Stagger**: `0.15` seconds between each image

## Code Structure

```javascript
// Set initial state
gsap.set(images, { 
  x: 300, // Start 300px to the right
  opacity: 0.7 
});

// Create animation
gsap.to(images, {
  x: 0, // Move to final position
  opacity: 1, // Full opacity
  duration: 1.5,
  ease: "power2.out",
  stagger: 0.15,
  scrollTrigger: {
    trigger: imagesRef.current,
    start: "top 100%",
    end: "bottom 0%",
    toggleActions: "play none none reverse",
  }
});
```

## Key Differences from Complex Scroll Approach
1. **No Viewport Pinning**: Images animate as user scrolls normally
2. **Simple Trigger**: Based on element visibility, not scroll distance
3. **Individual Image Animation**: Each image animates independently with stagger
4. **Reversible**: Animation reverses when scrolling back up

## Debugging
The implementation includes console logs to track:
- Number of images found
- Animation creation confirmation

## Usage
The animation is automatically applied when using the `useOffsiteAnimations` hook. No additional setup required.

## Customization
- **Distance**: Change initial `x` value for different slide distance
- **Timing**: Modify `duration` and `stagger` values
- **Trigger Point**: Adjust `start` and `end` values
- **Easing**: Change `ease` property for different animation feel

## Browser Compatibility
- Requires GSAP 3.x and ScrollTrigger plugin
- Works with existing image positioning (absolute positioning preserved)
- Compatible with responsive design
