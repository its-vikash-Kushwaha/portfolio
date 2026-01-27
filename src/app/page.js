import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import Experience from "@/components/Experience/Experience";
import Contact from "@/components/Contact/Contact";

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Contact />
        </main>
    );
}
