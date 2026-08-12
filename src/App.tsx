import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Intention } from "./components/Intention";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { CustomCursor } from "./components/ui/CustomCursor";

function App() {
  return (
    <div className="relative min-h-screen bg-navy-900 selection:bg-terracotta-500">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Intention />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
