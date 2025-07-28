'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

export default function SplitHeading({ children, className = '' }) {
  const headingRef = useRef(null);
  const splitRef = useRef(null);

  useEffect(() => {
    if (!headingRef.current) return;

    // Create the split text instance exactly as specified
    splitRef.current = SplitText.create(headingRef.current, {
      type: "words, chars"
    });

    // Set initial state
    gsap.set(splitRef.current.chars, {
      y: 100,
      autoAlpha: 0
    });

    // Create the animation exactly as specified
    gsap.from(splitRef.current.chars, {
      duration: 1,
      y: 100,
      autoAlpha: 0,
      stagger: 0.05,
      ease: "power4.out"
    });

    // Cleanup function
    return () => {
      if (splitRef.current) {
        splitRef.current.revert();
      }
    };
  }, [children]);

  return (
    <h1 ref={headingRef} className={`split ${className}`}>
      {children}
    </h1>
  );
} 