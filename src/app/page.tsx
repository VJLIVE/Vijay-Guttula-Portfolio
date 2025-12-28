import Header from '@/components/header';
import Hero from '@/components/sections/hero';
import Overview from '@/components/sections/overview';
import Skills from '@/components/sections/skills';
import Experience from '@/components/sections/experience';
import Projects from '@/components/sections/projects';
import Education from '@/components/sections/education';
import Achievements from '@/components/sections/achievements';
import Certifications from '@/components/sections/certifications';
import Contact from '@/components/sections/contact';
import Footer from '@/components/footer';
import BackToTop from '@/components/back-to-top';
import MotionSection from '@/components/motion-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <MotionSection>
          <Overview />
        </MotionSection>
        <MotionSection>
          <Skills />
        </MotionSection>
        <MotionSection>
          <Experience />
        </MotionSection>
        <MotionSection>
          <Projects />
        </MotionSection>
        <MotionSection>
          <Education />
        </MotionSection>
        <MotionSection>
          <Achievements />
        </MotionSection>
        <MotionSection>
          <Certifications />
        </MotionSection>
        <MotionSection>
          <Contact />
        </MotionSection>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
