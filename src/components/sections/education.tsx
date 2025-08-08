import SectionHeading from '../section-heading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';

const educationHistory = [
  {
    degree: 'Bachelor of Technology in Information Technology',
    institution: 'Vidya Jyothi Institute of Technology',
    duration: '2023 - 2027',
    details: ['GPA: 9.25/10', 'Relevant Coursework: DSA, DBMS, CN, OS'],
  },
  {
    degree: 'Higher Secondary Education',
    institution: 'Ratna Junior College',
    duration: '2023',
    details: ['Percentage: 90.1%', 'Python'],
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading>Education</SectionHeading>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border/50" />
          {educationHistory.map((edu, index) => (
            <div key={index} className="relative mb-12 flex justify-between items-center w-full">
              <div className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:order-3 md:text-right'}`}>
                <Card className="bg-card border-border/50 p-6 glow-on-hover">
                  <CardHeader className={`p-0 ${index % 2 !== 0 ? 'md:text-right' : ''}`}> 
                    <CardTitle className="text-xl text-primary">{edu.degree}</CardTitle>
                    <div className={`flex items-center gap-2 mt-2 text-muted-foreground ${index % 2 !== 0 ? 'justify-end' : ''}`}> 
                      <GraduationCap className="w-4 h-4" />
                      <span>{edu.institution}</span>
                    </div>
                  </CardHeader>
                  <CardContent className={`p-0 mt-4 ${index % 2 !== 0 ? 'md:text-right' : ''}`}> 
                    <div className={`flex items-center gap-2 mb-4 text-sm text-muted-foreground ${index % 2 !== 0 ? 'justify-end' : ''}`}> 
                      <Calendar className="w-4 h-4" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'justify-start' : 'md:justify-end'}`}> 
                      {edu.details.map((detail) => (
                        <Badge key={detail} variant="secondary">{detail}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-primary text-primary-foreground rounded-full w-8 h-8 items-center justify-center">
                  <BookOpen className="w-4 h-4" />
              </div>
               <div className="hidden md:block w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
