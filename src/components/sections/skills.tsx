import SectionHeading from '../section-heading';
import { Card, CardContent } from '@/components/ui/card';

const skills = [
  { name: 'React', icon: 'react' },
  { name: 'Next.js', icon: 'nextjs' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'Firebase', icon: 'firebase' },
  { name: 'Docker', icon: 'docker' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'HTML5', icon: 'html5' },
  { name: 'CSS3', icon: 'css3' },
  { name: 'Tailwind CSS', icon: 'tailwind' },
  { name: 'Solidity', icon: 'solidity' },
  { name: 'GraphQL', icon: 'graphql' },
];

const SkillIcon = ({ iconName }: { iconName: string }) => {
    const icons: { [key: string]: JSX.Element } = {
        react: (
            <svg role="img" viewBox="0 0 113.6 101.6"><g fill="#61DAFB"><path d="M68.6 4.8c-2.3-3.9-7.2-5.2-11.1-2.9s-5.2 7.2-2.9 11.1c2.3 3.9 7.2 5.2 11.1 2.9s5.2-7.2 2.9-11.1zm-25.2 7.6c-4-2.2-9-1-11.2 3s-1 9 3 11.2 9 1 11.2-3 1-9-3-11.2zM21 44.9c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z"/><ellipse transform="rotate(-60 56.8 50.8)" cx="56.8" cy="50.8" rx="48.3" ry="18.9" fill="none" stroke="#61DAFB" strokeWidth="3"/><ellipse transform="rotate(60 56.8 50.8)" cx="56.8" cy="50.8" rx="48.3" ry="18.9" fill="none" stroke="#61DAFB" strokeWidth="3"/><ellipse cx="56.8" cy="50.8" rx="48.3" ry="18.9" fill="none" stroke="#61DAFB" strokeWidth="3"/></g></svg>
        ),
        nextjs: (
            <svg role="img" viewBox="0 0 128 128"><path fillRule="evenodd" clipRule="evenodd" d="M64 128C99.3462 128 128 99.3462 128 64C128 28.6538 99.3462 0 64 0C28.6538 0 0 28.6538 0 64C0 99.3462 28.6538 128 64 128ZM44.1365 34.0833H55.4545V82.5273L75.3333 58.6477V45.2045H86.6515V93.9167H75.3333V65.4727L55.4545 89.3523V75.9091H44.1365V34.0833Z"/></svg>
        ),
        typescript: (
            <svg role="img" viewBox="0 0 128 128"><path fill="#3178C6" d="M128 64C128 99.346 99.346 128 64 128C28.654 128 0 99.346 0 64C0 28.654 28.654 0 64 0C99.346 0 128 28.654 128 64Z"/><path fill="white" d="M25.333 25.333H102.667V102.667H25.333V25.333ZM66.417 80.5H53.083V55.167L44.417 59.833V48.5L65.583 38.333H76.917V80.5H66.417Z"/></svg>
        ),
        nodejs: (
            <svg role="img" viewBox="0 0 256 256"><path fill="#8CC84B" d="M128 0a128 128 0 1 0 128 128A128.147 128.147 0 0 0 128 0zm-11.41 213.63l-45.72-79.18a3.24 3.24 0 0 1 2.81-4.88l23.1-4.71a3.24 3.24 0 0 1 3.8 2.22l25.68 44.48a3.24 3.24 0 0 1-2.81 4.88l-23.1 4.71a3.24 3.24 0 0 1-3.75-2.52zM216.09 133l-55-95.26a3.235 3.235 0 0 0-5.62 0l-55 95.26a3.24 3.24 0 0 0 2.81 4.88h110a3.24 3.24 0 0 0 2.81-4.88z"/></svg>
        ),
        firebase: (
            <svg role="img" viewBox="0 0 256 256"><path fill="#FFCA28" d="M43.34 209.52l-6.4-11.1L128 8.8l91.06 189.62-55.85-32.22z"/><path fill="#FFA000" d="M128 8.8l-84.66 200.72L128 158.4l55.85 52.84z"/><path fill="#F57C00" d="m183.85 211.24l-55.85-52.84v-99.6z"/></svg>
        ),
        docker: (
            <svg role="img" viewBox="0 0 256 256"><path fill="#2496ED" d="M247.1 128.2c-2.4-18.3-15.1-34.4-32.9-42.3-5.3-2.3-10.8-4-16.4-5-9-1.6-17.7-2.7-25-4.5-12.7-3.1-22.1-12.2-25.5-25C144.3 40 136.7 32 127.3 32h-.6c-9.4 0-17 8-17.7 19.3-3.4 12.8-12.8 21.9-25.5 25-7.3 1.8-16 2.9-25 4.5-5.6 1-11.1 2.7-16.4 5-17.9 7.9-30.5 24-32.9 42.3-1.1 8.2-1.1 16.5 0 24.7 2.4 18.3 15.1 34.4 32.9 42.3 5.3 2.3 10.8 4 16.4 5 9 1.6 17.7 2.7 25 4.5 12.7 3.1 22.1 12.2 25.5 25c2.9 10.9 11.2 18.1 21.6 18.1h.6c10.4 0 18.7-7.2 21.6-18.1 3.4-12.8 12.8-21.9 25.5-25 7.3-1.8 16-2.9 25-4.5 5.6-1 11.1-2.7 16.4-5 17.9-7.9 30.5-24 32.9-42.3 1.1-8.2 1.1-16.5 0-24.7zM96 112H80v16H64v-16H48v-16h16V80h16v16h16v16zm32 16h-16v16h-16v-16h-16v-16h16V96h16v16h16v16zm48-16h-16v16h-16v-16h-16v-16h16V80h16v16h16v16z"/></svg>
        ),
        javascript: (
            <svg role="img" viewBox="0 0 128 128"><path fill="#F7DF1E" d="M0 0h128v128H0z"/><path d="M110.1 94.9c-2.4 7.5-8.1 12.9-17.2 15.3-8.8 2.4-18.4.6-26.2-4.9-5.1-3.6-8.9-8.4-11.1-13.8-3.7-9.3-3.7-19.6 0-28.9.1-.1.1-.1.2-.2l13.6-8c.1-.1.2-.1.3 0l11.6 6.8c.1.1.2.2.1.3-4.6 7.8-4.6 17.1 0 24.9.1.2.2.2.3.2 7.8 4.6 17.1 4.6 24.9 0l.2-.1c.1-.1.2-.1.3 0l11.6 6.8c.1.1.1.2.1.3zM45.1 94.9c-2.4 7.5-8.1 12.9-17.2 15.3-8.8 2.4-18.4.6-26.2-4.9-5.1-3.6-8.9-8.4-11.1-13.8-3.7-9.3-3.7-19.6 0-28.9.1-.1.1-.1.2-.2l13.6-8c.1-.1.2-.1.3 0l11.6 6.8c.1.1.2.2.1.3-4.6 7.8-4.6 17.1 0 24.9.1.2.2.2.3.2 7.8 4.6 17.1 4.6 24.9 0l.2-.1c.1-.1.2-.1.3 0l11.6 6.8c.1.1.1.2.1.3z"/></svg>
        ),
        html5: (
            <svg role="img" viewBox="0 0 128 128"><path fill="#E34F26" d="M21.333 114.667l-8-90.667h101.334l-8 90.667L64 128z"/><path fill="#EF652A" d="M64 119.333l36-10-7.333-82H64z"/><path fill="#EBEBEB" d="M64 48h18l1.333-14.667H64V20h36.667l-1.334 14.667-2.666 29.333H64zM64 96l-14-3.333-1.333-14.667h-13.334l2.667 30L64 113z"/><path fill="#FFFFFF" d="M64 78V64h17.333l-1.333 14zM49.333 64H36l2.667 30L64 100v-4z"/></svg>
        ),
        css3: (
            <svg role="img" viewBox="0 0 128 128"><path fill="#1572B6" d="M21.333 114.667l-8-90.667h101.334l-8 90.667L64 128z"/><path fill="#33A9DC" d="M64 119.333l36-10-7.333-82H64z"/><path fill="#EBEBEB" d="M64 48h18l1.333-14.667H64V20h36.667l-1.334 14.667-2.666 29.333H64zM49.333 64L48 48h-12l1.333 14.667zM64 96l-14-3.333-1.333-14.667H36l2.667 30L64 113z"/><path fill="#FFFFFF" d="M64 78h17.333L80 64H64zM49.333 64H64v14H50.667zM64 99.333v.667l-.667-.667z"/></svg>
        ),
        tailwind: (
            <svg role="img" viewBox="0 0 256 256"><path fill="#38BDF8" d="M128 0C57.3 0 0 57.3 0 128s57.3 128 128 128 128-57.3 128-128S198.7 0 128 0zm53.4 92.2c-7.9 0-14.3-6.4-14.3-14.3s6.4-14.3 14.3-14.3 14.3 6.4 14.3 14.3-6.4 14.3-14.3 14.3zm-75.1 0c-7.9 0-14.3-6.4-14.3-14.3s6.4-14.3 14.3-14.3 14.3 6.4 14.3 14.3-6.4 14.3-14.3 14.3z"/></svg>
        ),
        solidity: (
            <svg role="img" viewBox="0 0 256 256"><path fill="#363636" d="M128 256L25.6 192V64L128 0l102.4 64v128z"/><path fill="#808080" d="M128 256V128L25.6 192z"/><path fill="#363636" d="M128 128L25.6 64v128z"/><path fill="#808080" d="M128 0v128l102.4-64z"/><path fill="#363636" d="M128 128l102.4 64V64z"/></svg>
        ),
        graphql: (
            <svg role="img" viewBox="0 0 256 256"><path fill="#E10098" d="M128 0l110.8 64v128L128 256 17.2 192V64zm0 22.4L37.8 73.2v109.6l90.2 52.1 90.2-52.1V73.2zM218.2 80l-90.2-52.1L37.8 80l45.1 26.1-45.1 78.1h90.2zm-180.4 0l90.2 52.1 90.2-52.1-45.1-26.1L128 80l-45.1-26.1zm45.1 104.2l-45.1-78.1 45.1-26.1 45.1 26.1zm0 0L82.9 158l45.1 26.2 45.1-26.2z"/></svg>
        ),
    }

    return icons[iconName] || null;
}

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading>My Tech Stack</SectionHeading>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill) => (
            <Card key={skill.name} className="group bg-card p-4 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:-translate-y-2 glow-on-hover">
              <div className="w-16 h-16 text-primary group-hover:scale-110 transition-transform duration-300">
                  <SkillIcon iconName={skill.icon}/>
              </div>
              <p className="font-semibold text-center text-card-foreground">{skill.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
