
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar  from './Components/Navbar';
import Hero from "./Components/Hero";
import About from "./Components/About"

function App() {

  return (
    
    <div className="container-fluid">
      <div className='App'>
      <Navbar />
      <Hero />
      <About />
      </div>
    </div>
  )
}

export default App
