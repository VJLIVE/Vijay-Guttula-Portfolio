"use client";

import SectionHeading from '../section-heading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Code2, PenTool, BrainCircuit } from 'lucide-react';
import { IoLogoAndroid } from "react-icons/io";
import { useRef, useEffect } from 'react';

const roles = [
  {
    icon: <IoLogoAndroid className="w-12 h-12 text-primary" />,
    title: 'App Developer',
    description: 'Building fast, reliable, and user-centric mobile applications—from initial concept to polished, high-performance apps.',
  },
  {
    icon: <Code2 className="w-12 h-12 text-primary" />,
    title: 'Frontend Developer',
    description: 'Bringing designs to life with clean, efficient, and responsive code. Specializing in modern JavaScript frameworks like React and Next.js.',
  },
  {
    icon: <BrainCircuit className="w-12 h-12 text-primary" />,
    title: 'Backend Engineer',
    description: 'Building robust and scalable server-side applications, APIs, and databases that power the frontend.',
  },
  {
    icon: <Code2 className="w-12 h-12 text-primary" />,
    title: 'Blockchain Developer',
    description: 'Developing decentralized applications and smart contracts on various blockchain platforms.',
  }
];

const Roles = () => {
  const carouselRef = useRef<any>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        // Try to use the exposed next method if available
        if (typeof carouselRef.current.next === 'function') {
          carouselRef.current.next();
        } else {
          // Fallback: trigger click on next button
          const nextBtn = document.querySelector('.carousel-next');
          if (nextBtn) (nextBtn as HTMLElement).click();
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="roles" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <SectionHeading>Professional Roles</SectionHeading>
        <Carousel
          ref={carouselRef}
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {roles.map((role, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-full min-h-[320px] flex flex-col items-center text-center p-8 bg-card border-border/50 glow-on-hover">
                    <CardHeader className="flex flex-col items-center justify-center">
                      <div className="flex items-center justify-center w-full">
                        {role.icon}
                      </div>
                      <CardTitle className="mt-4 text-2xl">{role.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{role.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="carousel-prev hidden md:flex" />
          <CarouselNext className="carousel-next hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Roles;
