"use client";

import { motion, useInView, Variants } from "motion/react";
import React, { ElementType, RefObject, forwardRef } from "react";

interface TimelineContentProps {
  as?: ElementType;
  animationNum?: number;
  timelineRef?: RefObject<Element | null>;
  customVariants?: Variants | { visible: (i: number) => any; hidden: any };
  className?: string;
  children?: React.ReactNode;
}

export const TimelineContent = forwardRef<HTMLElement, TimelineContentProps & React.ComponentPropsWithoutRef<any>>(
  (
    {
      as: Component = "div",
      animationNum = 0,
      timelineRef,
      customVariants,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const MotionComponent = motion.create(Component as any);
    const backupRef = React.useRef(null);
    const resolvedRef = timelineRef || backupRef;
    const inView = useInView(resolvedRef, { once: true, margin: "-50px" });

    return (
      <MotionComponent
        ref={ref || backupRef}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={animationNum}
        variants={customVariants as any}
        className={className}
        {...props}
      >
        {children}
      </MotionComponent>
    );
  }
);

TimelineContent.displayName = "TimelineContent";
