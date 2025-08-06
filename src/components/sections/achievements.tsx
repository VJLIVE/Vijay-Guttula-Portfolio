import { Award, Trophy } from 'lucide-react';
import SectionHeading from '../section-heading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const achievements = [
  {
    icon: <Trophy className="h-8 w-8 text-primary" />,
    title: 'Innovator of the Year',
    description: 'Awarded for developing a novel real-time data processing engine, increasing system efficiency by 200%.',
    date: '2023',
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: 'First Place - Global Hackathon',
    description: 'Led a team to victory in a 48-hour coding competition by building a blockchain-based solution for supply chain transparency.',
    date: '2022',
  },
  {
    icon: <Trophy className="h-8 w-8 text-primary" />,
    title: 'Open Source Contributor Award',
    description: 'Recognized for significant contributions to a major open-source machine learning library.',
    date: '2021',
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading>Achievements</SectionHeading>
        <div className="max-w-4xl mx-auto space-y-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="bg-card/50 border-border/50 overflow-hidden glow-on-hover">
              <div className="flex items-start p-6">
                <div className="flex-shrink-0 mr-6 mt-1">{achievement.icon}</div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-card-foreground">{achievement.title}</h3>
                  <p className="text-muted-foreground mt-2">{achievement.description}</p>
                </div>
                {achievement.date && (
                  <div className="ml-6 text-right text-sm text-muted-foreground font-medium whitespace-nowrap">{achievement.date}</div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
