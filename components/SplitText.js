'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { SplitText as GSAPSplitText } from 'gsap/SplitText';

gsap.registerPlugin(GSAPSplitText);

export default function SplitText({ children, className, type = "words,chars" }) {
  const textRef = useRef(null);
  const splitRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    // Create the split text instance
    splitRef.current = new GSAPSplitText(textRef.current, {
      type: type,
      wordsClass: "split-word",
      charsClass: "split-char"
    });

    // Ensure chars are initially hidden
    gsap.set(splitRef.current.chars, { 
      yPercent: 100,
      opacity: 0
    });

    // Create the animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

    tl.to(splitRef.current.chars, {
      duration: 1,
      yPercent: 0,
      opacity: 1,
      stagger: {
        amount: 0.6,
        from: "random"
      },
      ease: "power4.out"
    });

    // Cleanup
    return () => {
      if (splitRef.current) {
        splitRef.current.revert();
      }
    };
  }, [children, type]);

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  );
} 