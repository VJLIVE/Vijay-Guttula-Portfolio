import Header from '@/components/header';
import Hero from '@/components/sections/hero';
import Overview from '@/components/sections/overview';
import Skills from '@/components/sections/skills';
import Roles from '@/components/sections/roles';
import Experience from '@/components/sections/experience';
import Projects from '@/components/sections/projects';
import Education from '@/components/sections/education';
import Achievements from '@/components/sections/achievements';
import Certifications from '@/components/sections/certifications';
import Contact from '@/components/sections/contact';
import Footer from '@/components/footer';
import BackToTop from '@/components/back-to-top';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Overview />
        <Skills />
        <Roles />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
