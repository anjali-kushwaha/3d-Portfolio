import { BrowserRouter } from "react-router-dom"
import {About , Contact , Experience , Feedbacks , Hero ,Tech ,Navbar , Works , StarsCanvas } from "./components";
import Footer from './components/Footer';

function App() {
 
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar/>
      <Hero/>
      </div>
       <About/>
       <Experience/>
       <Tech/>
       <Works />
       <div className="relative z-0">
       <Contact/>
       <StarsCanvas/>
       <Footer/>
       </div>
      </div>
    </BrowserRouter>
  )
}

export default App
