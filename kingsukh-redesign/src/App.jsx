import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Rooms from './Components/Rooms/Rooms'
import Services from './Components/Services/Services'
import Footer from './Components/Footer/Footer'
import Contact from './Components/Contact/Contact'
import Gallary from './Components/Gallary/Gallary'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <About />
      <Rooms />
      <Services />
      <Gallary />
      <Contact/>
      <Footer />
    </div>
  )
}

export default App