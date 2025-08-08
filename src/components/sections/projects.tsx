"use client";

import Image from 'next/image';
import { useState } from 'react';
import SectionHeading from '../section-heading';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const allProjects = [
  {
    title: 'KeyNest',
    category: 'web',
    image: 'https://github.com/user-attachments/assets/174cd367-df00-49b0-9544-19e4f8f94d10',
    description: 'Store, and manage API keys with enterprise-grade security. Built for developers who demand both simplicity and robust protection.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Neon DB', 'Tailwind CSS', 'NextAuth.js', 'JWT', 'AES Encryption',],
    link: 'https://key-nest-sigma.vercel.app/',
    aiHint: 'web application for API key management',
    status: 'pending',
  },
  {
    title: 'Athletix',
    category: 'mobile',
    image: '/projects/athletix.png',
    description: 'A mobile application for athletes to track their workouts, nutrition, and performance metrics, built with Flutter and Firebase.',
    tags: ['Flutter', 'Dart', 'Firebase', 'Firestore Database','GCP','Google Maps SDK', 'Cloudinary API','Git', 'GitHub', 'REST API', 'Material UI'],
    link: 'https://github.com/VJLIVE/Athletix',
    aiHint: 'mobile application',
    status: 'completed',
  },
  {
    title: 'NFT Terminal Monad',
    category: 'blockchain',
    image: 'https://github.com/user-attachments/assets/0da1f769-6756-465a-b4a6-49594d726a25',
    description: 'A decentralized NFT marketplace on the Ethereum blockchain, allowing users to mint, buy, and sell digital assets.',
    tags: ['Next.js', 'TypeScript','Metamask Wallet','Solidity', 'Hardhat', 'Ethers.js','Pinata Cloud','Shadcn UI', 'Aceternity UI'],
    link: 'https://nftterminal.netlify.app/',
    aiHint: 'blockchain interface',
    status: 'completed',
  },
];

const categories = ['all', 'web', 'mobile', 'blockchain', 'AI/ML'];

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? allProjects
    : allProjects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <SectionHeading>Projects</SectionHeading>
        <div className="flex justify-center mb-12">
          <div className="p-1 bg-background rounded-full border border-border/50">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={filter === cat ? 'default' : 'ghost'}
                onClick={() => setFilter(cat)}
                className="capitalize rounded-full"
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.title} className="flex flex-col bg-background overflow-hidden border-border/50 glow-on-hover">
              <CardHeader className="p-0">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                    data-ai-hint={project.aiHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xl font-semibold">{project.title}</span>
                  <span className="flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full bg-muted-foreground/10">
                    <span
                      className={`inline-block w-2 h-2 rounded-full ${project.status === 'completed' ? 'bg-green-500' : 'bg-yellow-400'}`}
                      aria-label={project.status === 'completed' ? 'Completed' : 'Pending'}
                    ></span>
                    {project.status === 'completed' ? 'Completed' : 'Pending'}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link href={project.link} className="w-full">
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">View Project</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
