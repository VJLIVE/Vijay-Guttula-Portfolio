import { Mouse } from 'lucide-react';
import { StarsBackground } from '@/components/ui/stars-background';
import { ShootingStars } from '@/components/ui/shooting-stars';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      <StarsBackground className="-z-10" />
      <ShootingStars className="-z-10" />
      <div className="relative z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 py-2">
          Vijay Guttula
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto">
          Web Developer Intern @Codient Systems | Project Admin @GSSOC'25 | OCI Certified | NSOT Junior Coding Olympiad Rank 131 | CO Lead @ABC VJIT |
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
