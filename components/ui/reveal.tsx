"use client";

import {
  ElementType,
  HTMLAttributes,
  ReactNode,
  useEffect,
  useRef,
  useState
} from "react";

type RevealProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
  delayClass?: string;
  immediate?: boolean;
} & Omit<HTMLAttributes<HTMLElement>, "className" | "children">;

export function Reveal<T extends ElementType = "div">({
  as,
  children,
  className = "",
  delayClass = "",
  immediate = false,
  ...props
}: RevealProps<T>) {
  const Component = (as || "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(immediate);

  useEffect(() => {
    if (immediate || !ref.current) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { threshold: 0.15 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [immediate]);

  return (
    <Component
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${delayClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
}
