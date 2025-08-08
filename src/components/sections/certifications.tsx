import { ShieldCheck } from 'lucide-react';
import SectionHeading from '../section-heading';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const certifications = [
  {
    name: 'Oracle Cloud Infrastructure 2025 Foundations Associate (1Z0-1085-25)',
    issuer: 'Oracle',
    logo: <ShieldCheck className="w-10 h-10 text-primary" />,
    date: 'Issued: 2025',
  },
  {
    name: 'Google Cloud Bootcamp Certificate',
    issuer: 'GeeksforGeeks',
    logo: <ShieldCheck className="w-10 h-10 text-primary" />,
    date: 'Issued: 2023',
  },
  {
    name: 'Postman API Student Certification',
    issuer: 'Postman API',
    logo: <ShieldCheck className="w-10 h-10 text-primary" />,
    date: 'Issued: 2025',
  },
  {
    name: 'CRUD Operations in Mongo DB',
    issuer: 'Mongo DB',
    logo: <ShieldCheck className="w-10 h-10 text-primary" />,
    date: 'Issued: 2025',
  },
  {
    name: 'Google CyberSecurity Professional Certificate',
    issuer: 'Coursera',
    logo: <ShieldCheck className="w-10 h-10 text-primary" />,
    date: 'Issued: 2025',
  },
  {
    name: 'Microsoft AI Skills Challenge',
    issuer: 'Microsoft Learn',
    logo: <ShieldCheck className="w-10 h-10 text-primary" />,
    date: 'Issued: 2023',
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
              <CardHeader className="p-0 flex flex-col items-center justify-center">
                <div className="mb-4 flex items-center justify-center">{cert.logo}</div>
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
