"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface MotionSectionProps {
  children: React.ReactNode;
  className?: string;
}

const MotionSection: React.FC<MotionSectionProps> = ({ children, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default MotionSection;
