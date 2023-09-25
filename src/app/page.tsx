import Header from "./components/Header";
import Homepage from "./components/Homepage";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";

export default function Home() {
  return (
    <main>
      <Header />
      <Homepage />
    </main>
  );
}
