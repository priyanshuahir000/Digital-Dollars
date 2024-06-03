import React, { useRef, useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

export function Number({ n, type }) {
  const [inView, setInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // Stop observing once in view
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const { number } = useSpring({
    from: { number: 0 },
    to: { number: inView ? n : 0 }, // Start animation when in view
    config: { duration: 2000 },
  });

  if (type === "tspan") {
    return (
      <animated.tspan ref={ref}>
        {number.to((n) => n.toFixed(0))}
      </animated.tspan>
    );
  }
  return (
    <animated.div ref={ref}>{number.to((n) => n.toFixed(0))}</animated.div>
  );
}
