import { Award, Trophy } from 'lucide-react';
import SectionHeading from '../section-heading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const achievements = [
  {
    icon: <Trophy className="h-8 w-8 text-primary" />,
    title: 'Grand Finalist - Smart India Hackathon 2025',
    description: 'Achieved Grand Finalist position among 3000+ teams in Smart India Hackathon 2025 organized by the Government of India.',
    date: '2025',
  },
  {
    icon: <Trophy className="h-8 w-8 text-primary" />,
    title: '14th Rank - Social Summer of Code 2025',
    description: 'Ranked 14th out of 1360+ contributors for outstanding open-source contributions during Social Summer of Code 2025.',
    date: '2025',
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Silver Winner - Algo Git Squad'25 (July)",
    description: 'Won 150 Algos as Silver Winner in Algo Git Squad July 2025.',
    date: '2025',
  },
  {
    icon: <Trophy className="h-8 w-8 text-primary" />,
    title: 'Rank 131 of 16,398 participants in Junior Coding Olympiad',
    description: 'Ranked 131 out of 16,398 participants in the Junior Coding Olympiad by Newton School of Technology',
    date: '2024',
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
