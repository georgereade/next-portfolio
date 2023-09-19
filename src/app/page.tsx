import Header from "./components/Header";
import Landing from "./components/Landing";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";

export default function Home() {
  return (
    <main>
      <Header />
      <Landing />
    </main>
  );
}
