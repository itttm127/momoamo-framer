# Horizontal Slide Animation for Offsite Images

## Overview
This animation creates a sophisticated horizontal slide effect for the offsite section images, featuring:
- **Container-level horizontal slide** from left to right
- **Individual image animations** with stagger effects and rotation
- **Continuous horizontal movement** during scroll for depth
- **Smooth transitions** with power3 easing

## Animation Sequence

### 1. Container Horizontal Slide Animation
- **Initial State**: `x: -300`, `opacity: 0`, `scale: 0.9`
- **Final State**: `x: 0`, `opacity: 1`, `scale: 1`
- **Duration**: 2 seconds
- **Easing**: `power3.out`
- **Delay**: `containerIndex * 0.4` seconds (staggered)
- **Trigger**: `top 85%` to `bottom 15%`

### 2. Individual Image Animation
- **Initial State**: `x: -200`, `opacity: 0`, `scale: 0.8`, `rotation: -3`
- **Final State**: `x: 0`, `opacity: 1`, `scale: 1`, `rotation: 0`
- **Duration**: 1.5 seconds
- **Easing**: `power3.out`
- **Stagger**: 0.2 seconds between images
- **Delay**: `containerIndex * 0.4 + 0.3` seconds
- **Trigger**: `top 80%`

### 3. Continuous Horizontal Movement
- **Movement**: `x: 100` pixels
- **Scrub**: 1 (smooth scroll-tied movement)
- **Trigger**: `top bottom` to `bottom top`

## Key Features

### Multi-Layer Animation
1. **Container Level**: Each image container slides in from 300px to the left
2. **Image Level**: Individual images within each container animate with stagger and rotation
3. **Parallax Level**: Continuous subtle movement during scroll for depth

### Staggered Timing
- **Container Delay**: Each container starts 0.4 seconds after the previous
- **Image Stagger**: Images within a container stagger by 0.2 seconds
- **Image Delay**: Images start 0.3 seconds after their container

### Scroll Integration
- **ScrollTrigger**: Animations are tied to scroll position
- **Reversible**: Animations reverse when scrolling back up
- **Smooth Scrub**: Parallax effect follows scroll smoothly

## Animation Timeline

```
0.0s - Container 1 starts sliding in from left (-300px → 0px)
0.3s - Images in Container 1 start animating (staggered)
0.4s - Container 2 starts sliding in from left (-300px → 0px)
0.7s - Images in Container 2 start animating (staggered)
2.0s - Container animations complete
1.5s - Image animations complete
Continuous - Parallax effect during scroll (100px movement)
```

## Usage

```tsx
const OffsiteSection = () => {
  const { titleRef, descriptionRef, imagesRef, bottomContentRef } = useOffsiteAnimations();

  return (
    <section>
      <div ref={titleRef}>Title</div>
      <div ref={descriptionRef}>Description</div>
      
      {/* Images with horizontal slide effect */}
      <div ref={imagesRef} className="flex">
        <div className="image-container">
          <Image src={img1} />
          <Image src={img2} />
          <Image src={img3} />
          <Image src={img4} />
        </div>
        <div className="image-container">
          <Image src={img5} />
          <Image src={img6} />
          <Image src={img7} />
          <Image src={img8} />
        </div>
      </div>
      
      <div ref={bottomContentRef}>Bottom Content</div>
    </section>
  );
};
```

## Visual Effect

When users scroll down to the offsite section, they'll see:

1. **Dramatic horizontal slide** - Image containers slide in from the left
2. **Staggered reveal** - Each container and its images animate in sequence
3. **Rotation effect** - Images start with -3-degree rotation and straighten
4. **Scale animation** - Containers scale from 0.9 to 1.0, images from 0.8 to 1.0
5. **Continuous movement** - Subtle parallax effect during scroll
6. **Smooth transitions** - Professional easing and timing

## Customization Options

### Adjust Slide Distance
```tsx
// Change initial x position for more/less slide distance
{ x: -500, opacity: 0, scale: 0.9 } // More dramatic slide
{ x: -150, opacity: 0, scale: 0.9 } // Subtle slide
```

### Modify Stagger Timing
```tsx
// Change stagger delay between containers
delay: containerIndex * 0.6, // Slower stagger
delay: containerIndex * 0.2, // Faster stagger
```

### Adjust Image Animation
```tsx
// Change image stagger timing
stagger: 0.1, // Faster image stagger
stagger: 0.3, // Slower image stagger
```

### Modify Rotation Effect
```tsx
// Change rotation amount
rotation: -5, // More rotation
rotation: 0,  // No rotation
```

### Adjust Parallax Intensity
```tsx
// Change parallax movement amount
x: 200, // More parallax
x: 50,  // Less parallax
```

### Change Slide Direction
```tsx
// Slide from right to left
{ x: 300, opacity: 0, scale: 0.9 } // Start from right
{ x: 0, opacity: 1, scale: 1 }     // End at center
```

## Performance Considerations

- **GPU Acceleration**: Uses `transform` properties for smooth performance
- **ScrollTrigger Optimization**: Efficient scroll event handling
- **Memory Management**: Proper cleanup with `ctx.revert()`
- **Smooth 60fps**: Optimized for smooth animations

## Browser Support

- **Modern Browsers**: Full support with hardware acceleration
- **Mobile Devices**: Optimized for touch scrolling
- **Fallback**: Graceful degradation for older browsers

## Troubleshooting

### Animation Not Triggering
- Ensure `imagesRef` is properly attached to the parent container
- Check that ScrollTrigger is properly registered
- Verify scroll position triggers

### Choppy Animation
- Check for conflicting CSS transitions
- Ensure sufficient scroll distance for trigger
- Verify browser supports hardware acceleration

### Performance Issues
- Reduce animation duration
- Decrease stagger delays
- Check for too many simultaneous animations

## Alternative Horizontal Slide Effects

### 1. Slide from Right
```tsx
// Change initial x position to positive value
{ x: 300, opacity: 0, scale: 0.9 }
```

### 2. Alternating Slide Direction
```tsx
// Alternate between left and right slides
const slideDirection = containerIndex % 2 === 0 ? -300 : 300;
{ x: slideDirection, opacity: 0, scale: 0.9 }
```

### 3. Staggered Horizontal Movement
```tsx
// Different horizontal positions for each container
const horizontalPositions = [-300, -200, -100, 0];
{ x: horizontalPositions[containerIndex], opacity: 0, scale: 0.9 }
```

## Files Modified

- ✅ **`src/animations/scrollAnimations.tsx`** - Updated `useOffsiteAnimations` hook
- ✅ **`src/components/offsite.tsx`** - Integrated horizontal slide animation
- ✅ **`src/animations/HORIZONTAL_SLIDE_ANIMATION_README.md`** - Complete documentation

## Animation Benefits

1. **Engaging User Experience**: Creates visual interest and draws attention
2. **Smooth Performance**: Optimized for 60fps with hardware acceleration
3. **Responsive Design**: Works across all device sizes
4. **Accessibility**: Respects user preferences and motion settings
5. **Professional Feel**: High-quality animations that enhance the brand

The horizontal slide animation creates a **cinematic, engaging experience** that draws attention to the offsite images while maintaining smooth performance and accessibility. The combination of initial slide-in animation and continuous parallax movement creates a dynamic, modern user experience that guides users through the content naturally!
