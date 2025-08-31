import Image from 'next/image';
import SectionHeading from '../section-heading';
import { Card, CardContent } from '@/components/ui/card';

const Overview = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <SectionHeading>About Me</SectionHeading>
        <Card className="bg-background border-none shadow-2xl shadow-primary/10">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
              <div className="md:col-span-1">
                <div className="aspect-square rounded-full overflow-hidden border-4 border-primary/50 shadow-lg mx-auto w-48 h-48 md:w-full md:h-full">
                  <Image
                    src="/overview/vijay.jpg"
                    alt="Alex Doe"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                    data-ai-hint="professional portrait"
                  />
                </div>
              </div>
              <div className="md:col-span-2 space-y-4">
                <p className="text-lg text-muted-foreground">
                  I'm a passionate Full-Stack Developer with hands-on experience in the MERN stack, Next.js, Flutter, Firebase, and Blockchain technologies. Currently pursuing a B.Tech in Information Technology at Vidya Jyothi Institute of Technology, I specialize in building scalable, user-friendly, and impactful digital solutions.
                </p>
                <p className="text-lg text-muted-foreground">
                  Along with my technical skills, I have a strong foundation in data structures and algorithms, which enhances my problem-solving abilities. I'm an active open-source contributor and have been recognized for my contributions in various coding competitions.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Overview;
