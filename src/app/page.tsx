import Homepage from "./Hero/page";
import Contact from "./components/Contact";
import Projects from "./projects/page";
import "./globals.css";

export default function Home() {
  return (
    <main className="scroll-smooth overflow-x-hidden">
      <Homepage />
      <Projects />
      <Contact />
    </main>
  );
}
