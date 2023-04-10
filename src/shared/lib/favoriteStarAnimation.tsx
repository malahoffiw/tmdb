export const favoriteStarAnimation = (el: Element, action: 'add' | 'remove' | 'remain') => {
  let keyframes: Keyframe[] = [];

  if (action === 'add') {
    keyframes = [
      { transform: 'scale(1)', opacity: 0 },
      { transform: 'scaleX(1.5)', opacity: 1, offset: 0.75 },
      { transform: 'scaleX(1)', opacity: 1 },
    ];
  }

  if (action === 'remove') {
    keyframes = [
      { transform: 'scale(1)', opacity: 1 },
      { transform: 'scale(1.5)', opacity: 1, offset: 0.33 },
      { transform: 'scale(0.5)', opacity: 0 },
    ];
  }

  return new KeyframeEffect(el, keyframes, {
    duration: 200,
    easing: 'ease-in-out',
  });
};
