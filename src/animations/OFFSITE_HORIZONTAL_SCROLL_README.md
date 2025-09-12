# Offsite Horizontal Scroll Animation

## Overview
This animation creates a horizontal scroll effect for the offsite section images, where the images container slides horizontally based on the user's scroll position. The viewport is pinned during the animation to create a smooth horizontal scrolling experience.

## Implementation Approach
Uses the GSAP ScrollTrigger plugin with a container and wrapper approach, similar to the provided example:

```javascript
const container = document.querySelector(".offsite-images-container");
const imagesWrapper = container.querySelector(".offsite-images-wrapper");
const totalScroll = imagesWrapper.scrollWidth - container.clientWidth;

gsap.to(imagesWrapper, {
  x: () => `-${totalScroll}px`,
  ease: "none",
  scrollTrigger: {
    trigger: container,
    start: "center center",
    end: () => `+=${totalScroll}`,
    scrub: true,
    pin: true,
    anticipatePin: 1,
  }
});
```

## Component Structure
The offsite component uses a two-level container structure:

1. **Container** (`.offsite-images-container`): 
   - Has `overflow-hidden` to clip the content
   - Fixed dimensions: `md:h-[826px] h-[320px]`
   - Acts as the viewport for the horizontal scroll

2. **Wrapper** (`.offsite-images-wrapper`):
   - Has `width: max-content` to accommodate all images
   - Contains all the images with absolute positioning
   - This element moves horizontally during the animation

## Animation Behavior

### Trigger Point
- **Start**: When the offsite section reaches the center of the viewport (`center center`)
- **End**: After scrolling by the calculated total scroll distance

### Scroll Calculation
- `totalScroll = imagesWrapper.scrollWidth - container.clientWidth`
- This ensures the animation covers exactly the distance needed to show all images
- Only creates animation if `totalScroll > 0` (has content to scroll)

### Animation Properties
- **Movement**: Images wrapper moves from `x: 0` to `x: -${totalScroll}px`
- **Easing**: `ease: "none"` for linear scroll-tied movement
- **Scrubbing**: `scrub: true` for smooth scroll-based animation
- **Pinning**: `pin: true` prevents normal scroll during animation

## Technical Features

### Performance Optimizations
- `invalidateOnRefresh: true` recalculates on window resize
- `refreshPriority: -1` gives lower priority during refresh
- Conditional animation creation (only if content exists)

### Event Handling
- `onUpdate`: Optional progress tracking (commented out for production)
- `onComplete`: Animation completion callback (commented out for production)

### Responsive Design
- Works with both desktop (`md:h-[826px]`) and mobile (`h-[320px]`) layouts
- Automatically calculates scroll distances based on current viewport
- Maintains image positioning and sizing across breakpoints

## Usage
The animation is automatically applied when using the `useOffsiteAnimations` hook:

```typescript
const { titleRef, descriptionRef, imagesRef, imagesWrapperRef, bottomContentRef } = useOffsiteAnimations();
```

## Customization Options

### Animation Timing
- Modify `start` value to change when animation begins
- Adjust `end` calculation for different scroll distances
- Change `scrub` value for different scroll sensitivity

### Visual Effects
- Modify `ease` for different movement characteristics
- Add `onUpdate` callbacks for progress-based effects
- Customize pin behavior with `anticipatePin` values

### Layout Adjustments
- Modify container dimensions in the component
- Adjust wrapper width calculation
- Change image positioning within the wrapper

## Browser Compatibility
- Requires GSAP 3.x and ScrollTrigger plugin
- Modern browsers with CSS transform support
- Mobile devices with touch scroll support
- Responsive design considerations included

## Troubleshooting
- Ensure both `imagesRef` and `imagesWrapperRef` are properly connected
- Check that container has `overflow-hidden` and proper dimensions
- Verify that wrapper has `width: max-content` for proper scroll calculation
- Monitor console for any ScrollTrigger refresh issues
