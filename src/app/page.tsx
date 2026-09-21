import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full pt-20 max-w-[1120px] mx-auto px-4 sm:px-6 flex-1 flex flex-col">
        <Hero />
        <Projects />
        <Services />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
