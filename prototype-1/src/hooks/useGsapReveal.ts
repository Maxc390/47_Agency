import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function useGsapReveal(stagger = 0.12) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const elements = ref.current!.querySelectorAll('.reveal');

      gsap.set(elements, {
        y: 30,
        opacity: 0
      });

      gsap.to(elements, {
        y: 0,
        opacity: 1,
        stagger,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.2
      });
    }, ref);

    return () => ctx.revert();
  }, [stagger]);

  return ref;
}

export function useGsapHover() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const handleMouseEnter = () => {
      gsap.to(element, {
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return ref;
}
