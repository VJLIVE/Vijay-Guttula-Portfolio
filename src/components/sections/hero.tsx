import { Mouse } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-grid -z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
      <div className="relative z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 py-2">
          Alex Doe
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto">
          A creative developer weaving cosmic digital experiences from front-end to back-end, passionate about building modern, responsive, and performant web applications.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="#projects">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20">
              View My Work
            </Button>
          </Link>
          <Link href="#contact">
            <Button variant="outline" size="lg" className="border-accent text-accent-foreground hover:bg-accent hover:text-accent-foreground shadow-lg shadow-accent/20">
              Contact Me
            </Button>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-10 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-1">Scroll</span>
        <Mouse className="w-8 h-8 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
