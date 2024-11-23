
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar  from './Components/Navbar';
import Hero from "./Components/Hero";
import About from "./Components/About"
import { Experience } from './Components/Experience';

function App() {

  return (
    
      <div className='App'>
        <Navbar />
        <Hero />
        <About />
        <Experience />
      </div>
  )
}

export default App
