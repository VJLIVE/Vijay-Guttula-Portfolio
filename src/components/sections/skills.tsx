'use client';

import { useState } from 'react';
import Image from 'next/image';
import SectionHeading from '../section-heading';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const categorizedSkills: { [category: string]: { name: string; img: string }[] } = {
  'Web Development': [
    { name: 'JavaScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'HTML5', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Tailwind CSS', img: 'https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg' },
    { name: 'React.js', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg' },
    { name: 'Next.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Node.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Nest.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg' },
    { name: 'Express.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'Firebase', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'Git', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Google Cloud', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
    { name: 'Vercel', img: 'https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg' },
  ],
  'App Development': [
    { name: 'React Native', img: 'https://reactnative.dev/img/header_logo.svg' },
    { name: 'Flutter', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
    { name: 'Dart', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
    { name: 'Android Studio', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg' },
    { name: 'Java', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  ],
  Blockchain: [
    { name: 'Solidity', img: 'https://docs.soliditylang.org/en/latest/_images/solidity_logo.svg' },
    { name: 'Hardhat', img: '/logo/tech/hardhat.png' },
    { name: 'TypeScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'AlgoSdk', img: '/logo/tech/algorand.png' },
    { name: 'Metamask', img: 'https://images.ctfassets.net/clixtyxoaeas/1ezuBGezqfIeifWdVtwU4c/d970d4cdf13b163efddddd5709164d2e/MetaMask-icon-Fox.svg' },
    { name: 'Pinata Cloud', img: 'https://avatars.githubusercontent.com/u/43088506?s=200&v=4' },
  ],
  'AI / ML': [
    { name: 'Python', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'TensorFlow', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
    { name: 'NumPy', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
    { name: 'Pandas', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
    { name: 'OpenCV', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
    { name: 'Jupyter', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg' },
  ],
  Databases: [
    { name: 'MongoDB', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Firebase', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'MySQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'PostgreSQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'SQLite', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' },
    { name: 'Neon DB', img: 'https://neon.com/brand/neon-logomark-light-color.svg' },
    { name: 'Supabase', img: 'https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg' },
    { name: 'Prisma', img: 'https://cdn.worldvectorlogo.com/logos/prisma-4.svg' },
    { name: 'Drizzle', img: '/logo/tech/drizzle.png' },
  ],
  'Tools & Others': [
    { name: 'C', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    { name: 'C++', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'Arduino', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg' },
    { name: 'Bash', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg' },
    { name: 'Raspberry Pi', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg' },
  ],
};

const Skills = () => {
  const categories = Object.keys(categorizedSkills);

  return (
    <section id="skills" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        <SectionHeading>My Tech Stack</SectionHeading>

        <div className="flex flex-col gap-8 items-center justify-center w-full max-w-6xl mx-auto">
          {categories.map((category, idx) => (
            <div key={category} className="flex flex-col md:flex-row items-start gap-6 w-full justify-start">
              <div
                className="min-w-[180px] md:w-1/4 text-lg font-semibold mb-2 md:mb-0 text-white text-left"
                style={{
                  textShadow: '0 0 4px #fff, 0 0 8px #00f6ff',
                  filter: 'brightness(1.2)',
                }}
              >
                {category}
              </div>
              <TooltipProvider>
                <div
                  className={`flex flex-wrap gap-4 md:gap-6 justify-start${idx === 0 ? ' ml-4 md:ml-8' : ''}`}
                >
                  {categorizedSkills[category].map((skill) => (
                    <Tooltip key={skill.name}>
                      <TooltipTrigger>
                        <div className="group flex flex-col items-center justify-center gap-1">
                          <div
                            className="bg-white border border-gray-200 shadow-lg rounded-xl p-1 flex items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                            style={{ width: '40px', height: '40px' }}
                          >
                            <Image
                              src={skill.img}
                              alt={skill.name + ' logo'}
                              width={24}
                              height={24}
                              className="object-contain drop-shadow-md"
                            />
                          </div>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="font-semibold text-sm text-primary drop-shadow-sm">
                          {skill.name}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </TooltipProvider>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
