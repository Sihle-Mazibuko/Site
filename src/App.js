import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Hero/Home/Home";
import Services from "./Components/Services/Services";
import Qualifications from "./Components/Qualifications/Qualifications";

function App() {
  return (
    <>
      <NavBar />
      <main className="main">
        <Home />
        <Services />
        <Qualifications />
      </main>
    </>
  );
}

export default App;
