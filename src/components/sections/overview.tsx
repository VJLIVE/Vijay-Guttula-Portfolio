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
                    src="https://placehold.co/400x400.png"
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
                  Hello! I'm a full-stack developer with a passion for creating beautiful and functional web applications. With over 5 years of experience in the industry, I have a proven track record of designing, developing, and deploying robust software solutions. My expertise spans across the entire development lifecycle, from concept to deployment.
                </p>
                <p className="text-lg text-muted-foreground">
                  I thrive on solving complex problems and am always eager to learn new technologies. My goal is to leverage my skills to build products that not only meet user needs but also provide an exceptional and intuitive experience. When I'm not coding, I enjoy exploring new galaxies in video games and experimenting with 3D modeling.
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
