import Header from "./components/Header/Header"
import About from "./components/About/About"
import Projects from "./components/Projects/Projects"
import Skills from "./components/Skills/Skills"
import Contact from "./components/Contact/Contact"
import Gmail from "./components/Gmail/Gmail"

function App() {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
      
    </div>
  );
}

export default App;
