'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from '../components/SplitText';
import SplitHeading from '../components/SplitHeading';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const mainRef = useRef(null);
  const horizontalRef = useRef(null);
  const sectionsRef = useRef(null);

  useEffect(() => {
    // Horizontal scroll animation
    const horizontal = horizontalRef.current;
    const sections = sectionsRef.current;
    
    let scrollTween = gsap.to(sections, {
      x: -(sections.offsetWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: horizontal,
        start: "top top",
        end: () => `+=${sections.offsetWidth - window.innerWidth}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      }
    });

    // Cleanup
    return () => {
      scrollTween.kill();
    };
  }, []);

  const sections = [
    {
      title: "Elegant Design",
      description: "Creating sophisticated digital experiences with modern animations and seamless interactions."
    },
    {
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge technology and creative solutions."
    },
    {
      title: "Excellence",
      description: "Delivering unparalleled quality in every pixel and interaction."
    }
  ];

  return (
    <main ref={mainRef} className="relative">
      {/* Vertical Section 1 */}
      <section className="h-screen flex flex-col justify-center items-center px-4 bg-primary">
        <SplitHeading className="text-6xl md:text-8xl font-bold mb-8 text-center">
          Welcome to the Future
        </SplitHeading>
        <SplitText className="text-xl md:text-2xl text-center max-w-2xl text-gray-300">
          Scroll down to explore our journey through innovation
        </SplitText>
      </section>

      {/* Horizontal Scrolling Section */}
      <section ref={horizontalRef} className="relative h-screen bg-secondary/5">
        <div ref={sectionsRef} className="absolute h-full flex">
          {sections.map((section, index) => (
            <div
              key={index}
              className="h-screen w-screen flex flex-col justify-center items-center p-8"
              style={{ minWidth: '100vw' }}
            >
              <SplitHeading className="text-5xl md:text-7xl font-bold mb-8 text-center">
                {section.title}
              </SplitHeading>
              <SplitText className="text-xl md:text-2xl text-center max-w-2xl text-gray-300">
                {section.description}
              </SplitText>
            </div>
          ))}
        </div>
      </section>

      {/* Vertical Section 2 */}
      <section className="min-h-screen flex flex-col justify-center items-center px-4 bg-primary">
        <SplitHeading className="text-6xl md:text-8xl font-bold mb-8 text-center">
          Let's Create Together
        </SplitHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-16">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-secondary/5 backdrop-blur-sm p-8 rounded-lg hover:bg-secondary/10 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4">
                Feature {item}
              </h3>
              <p className="text-gray-400">
                Experience the power of modern web animations and interactions.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
} 