import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Hero/Home/Home";
import Services from "./Components/Services/Services";
import Qualifications from "./Components/Qualifications/Qualifications";
import Contact from "./Components/Contact/Contact";
import ToTop from "./Components/ToTop/totop";
import About from "./Components/About/About";
import Porfolio from "./Components/Porfolio/Porfolio";

function App() {
  return (
    <>
      <NavBar />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Porfolio />
        <Qualifications />
        <Contact />
      </main>

      <ToTop />

      <footer></footer>
    </>
  );
}

export default App;
