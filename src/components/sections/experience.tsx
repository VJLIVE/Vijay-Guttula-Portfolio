import SectionHeading from '../section-heading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, Code } from 'lucide-react';

const experiences = [
  {
    role: 'Lead Frontend Developer',
    company: 'Stellar Solutions Inc.',
    duration: '2021 - Present',
    tech: ['React', 'Next.js', 'TypeScript', 'GraphQL', 'Vercel'],
  },
  {
    role: 'Full Stack Engineer',
    company: 'Quantum Innovations',
    duration: '2019 - 2021',
    tech: ['Node.js', 'Vue.js', 'PostgreSQL', 'Docker', 'AWS'],
  },
  {
    role: 'Junior Web Developer',
    company: 'Digital Nebula',
    duration: '2017 - 2019',
    tech: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'PHP'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <SectionHeading>Work Experience</SectionHeading>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border/50" />
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 flex items-center w-full">
              <div className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                 <Card className="bg-background border-border/50 p-6 glow-on-hover text-left">
                  <CardHeader className="p-0">
                    <CardTitle className="text-xl text-primary">{exp.role}</CardTitle>
                    <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                      <Building className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0 mt-4">
                    <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className={`flex flex-wrap gap-2 ${index % 2 !== 0 ? 'justify-start' : 'md:justify-end'}`}>
                      {exp.tech.map((t) => (
                        <Badge key={t} variant="secondary">{t}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-primary text-primary-foreground rounded-full w-8 h-8 items-center justify-center">
                  <Code className="w-4 h-4" />
              </div>
               <div className="hidden md:block w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
