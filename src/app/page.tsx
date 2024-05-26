import Homepage from "./Homepage/page";
import Contact from "./components/Contact";
import Projects from "./projects/page";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";

export default function Home() {
  return (
    <main>
      <Homepage />
      <Projects />
      <Contact />
    </main>
  );
}
