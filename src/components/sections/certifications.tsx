import { ShieldCheck } from 'lucide-react';
import SectionHeading from '../section-heading';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const certifications = [
  {
    name: 'Certified Next.js Developer',
    issuer: 'Vercel',
    logo: <ShieldCheck className="w-10 h-10 text-primary" />,
    date: 'Issued: May 2024',
  },
  {
    name: 'Professional Cloud Architect',
    issuer: 'Google Cloud',
    logo: <ShieldCheck className="w-10 h-10 text-primary" />,
    date: 'Issued: Dec 2023',
  },
  {
    name: 'TypeScript Expert',
    issuer: 'DevCerts',
    logo: <ShieldCheck className="w-10 h-10 text-primary" />,
    date: 'Issued: June 2023',
  },
  {
    name: 'Certified Blockchain Developer',
    issuer: 'Blockchain Council',
    logo: <ShieldCheck className="w-10 h-10 text-primary" />,
    date: 'Issued: Jan 2022',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <SectionHeading>Certifications</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="flex flex-col text-center items-center p-6 bg-background border-border/50 glow-on-hover">
              <CardHeader className="p-0">
                <div className="mb-4">{cert.logo}</div>
                <p className="text-sm font-medium text-muted-foreground">{cert.issuer}</p>
              </CardHeader>
              <CardContent className="flex-grow p-0 mt-4">
                <CardTitle className="text-lg">{cert.name}</CardTitle>
              </CardContent>
              <CardFooter className="p-0 mt-4">
                <Badge variant="secondary">{cert.date}</Badge>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
