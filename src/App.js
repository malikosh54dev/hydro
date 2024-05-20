import "./App.css";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Inputs from "./components/Inputs";
import Number from "./components/Numbers";
import Contact from "./components/contact";
import SecondHero from "./components/secondHero";
import ThirdHero from "./components/thirdHero";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Contact />
      <SecondHero />
      <Cards />
      <ThirdHero />
      <Number />
      <Inputs />
      <Footer />
    </div>
  );
}

export default App;
