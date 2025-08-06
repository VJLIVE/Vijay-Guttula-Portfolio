import SectionHeading from '../section-heading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Code2, PenTool, BrainCircuit } from 'lucide-react';

const roles = [
  {
    icon: <PenTool className="w-12 h-12 text-primary" />,
    title: 'UI/UX Designer',
    description: 'Crafting intuitive and beautiful user interfaces that provide a seamless user experience, from wireframes to high-fidelity prototypes.',
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
  return (
    <section id="roles" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <SectionHeading>Professional Roles</SectionHeading>
        <Carousel
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
                  <Card className="h-full flex flex-col items-center text-center p-8 bg-card border-border/50 glow-on-hover">
                    <CardHeader>
                      {role.icon}
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
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Roles;
