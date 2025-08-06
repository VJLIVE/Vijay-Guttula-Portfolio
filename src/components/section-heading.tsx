import type { FC, ReactNode } from 'react';

interface SectionHeadingProps {
  children: ReactNode;
}

const SectionHeading: FC<SectionHeadingProps> = ({ children }) => {
  return (
    <div className="relative mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        {children}
      </h2>
      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
    </div>
  );
};

export default SectionHeading;
