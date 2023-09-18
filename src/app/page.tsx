import Header from "./components/Header";
import Landing from "./components/Landing";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

// library.add(fab, faCheckSquare, faCoffee)

export default function Home() {
  return (
    <main>
      <Header />
      <Landing />
    </main>
  );
}
