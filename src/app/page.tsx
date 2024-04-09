import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./projects/page";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";

export default function Home() {
  return (
    <main>
      <Header />
      <Homepage />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
