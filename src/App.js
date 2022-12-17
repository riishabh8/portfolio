import Home from "./components/Home";
import "./app.css";
import About from "./components/About";
import Skills from "./components/Skills";
import ExperienceSection from "./components/experience/Experience-Section";
import Handles from "./components/Handles/Handles";
function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Skills />
      <ExperienceSection />
      <Handles />
    </div>
  );
}

export default App;
