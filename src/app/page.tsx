import Image from "next/image";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// import HomeSection from './components/Home';
import AboutSection from "./components/About";
import ProjectsSection from "./components/Projects";
import ContactSection from "./components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Loader />
      <Navbar />
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
