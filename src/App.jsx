import "./app.scss"
import Skills from "./components/certificates/Skills";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";

const App = () => {
  return <div>
      <section id="Homepage">
        <Navbar/>
        <Hero/>
        </section>
      <section id="Skills"><Parallax type="skills"/></section>
      <section><Skills/></section>
      <section id="Projects"><Parallax type="portfolio"/></section>
      <Portfolio/>
      <section id="Contact"><Contact/></section>
  </div>;
};

export default App;
