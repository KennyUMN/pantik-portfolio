import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { WhyUs } from "@/components/sections/WhyUs";
import { Team } from "@/components/sections/Team";
import { Awards } from "@/components/sections/Awards";
import { FlagshipPantik } from "@/components/sections/FlagshipPantik";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Organizations } from "@/components/sections/Organizations";
import { Capabilities } from "@/components/sections/Capabilities";
import { DomainFit } from "@/components/sections/DomainFit";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <WhyUs />
        <Team />
        <Awards />
        <FlagshipPantik />
        <Projects />
        <Experience />
        <Organizations />
        <Capabilities />
        <DomainFit />
        <HowWeWork />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
