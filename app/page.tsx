import { Hero } from "./components/Hero";
import { SelectedWork } from "./components/SelectedWork";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <About />
      <Skills />
      <Contact />
    </>
  );
}
