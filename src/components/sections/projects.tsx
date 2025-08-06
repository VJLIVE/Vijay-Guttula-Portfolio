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
    title: 'Cosmic E-commerce Platform',
    category: 'web',
    image: 'https://placehold.co/600x400.png',
    description: 'A full-featured e-commerce site built with Next.js, Stripe, and Sanity CMS for a seamless shopping experience.',
    tags: ['Next.js', 'React', 'Stripe'],
    link: '#',
    aiHint: 'e-commerce website'
  },
  {
    title: 'Galaxy Fit - Fitness Tracker',
    category: 'mobile',
    image: 'https://placehold.co/600x400.png',
    description: 'A cross-platform mobile app using React Native to track workouts, monitor progress, and connect with friends.',
    tags: ['React Native', 'Firebase'],
    link: '#',
    aiHint: 'mobile application'
  },
  {
    title: 'CryptoVerse NFT Marketplace',
    category: 'blockchain',
    image: 'https://placehold.co/600x400.png',
    description: 'A decentralized NFT marketplace on the Ethereum blockchain, allowing users to mint, buy, and sell digital assets.',
    tags: ['Solidity', 'Hardhat', 'Ethers.js'],
    link: '#',
    aiHint: 'blockchain interface'
  },
  {
    title: 'Starship Analytics Dashboard',
    category: 'web',
    image: 'https://placehold.co/600x400.png',
    description: 'A real-time data visualization dashboard for tracking interstellar fleet metrics, built with D3.js and WebSockets.',
    tags: ['D3.js', 'Node.js', 'WebSocket'],
    link: '#',
    aiHint: 'data dashboard'
  },
  {
    title: 'Nebula Notes - Mobile App',
    category: 'mobile',
    image: 'https://placehold.co/600x400.png',
    description: 'A simple yet powerful note-taking app for iOS and Android with cloud synchronization and offline capabilities.',
    tags: ['Flutter', 'Firebase'],
    link: '#',
    aiHint: 'note taking app'
  },
  {
    title: 'DeFi Staking Protocol',
    category: 'blockchain',
    image: 'https://placehold.co/600x400.png',
    description: 'A decentralized finance protocol for staking tokens and earning rewards, audited for security and efficiency.',
    tags: ['Smart Contracts', 'DeFi'],
    link: '#',
    aiHint: 'finance dashboard'
  },
];

const categories = ['all', 'web', 'mobile', 'blockchain'];

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? allProjects
    : allProjects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
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
                <CardTitle className="mb-2 text-xl">{project.title}</CardTitle>
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
