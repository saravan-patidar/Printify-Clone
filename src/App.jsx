
import './App.css'
import HeroSection from './Components/HeroSection'
import Feature from './Components/Feature'
import NavBar from './Components/Navbar/NavBar'
import Working from './Components/Working'
import { Footer } from './Components/Footer/Footer'
import PriceSection from './Components/Price/PriceSection'
import ConnectStore from './Components/ConnectStore'
import Testimonal from './Components/Testimonal'

function App() {

  return (
    <>
      <NavBar/>
      <HeroSection/>
      <Feature/>
      <Working/>
      <ConnectStore/>
      <Testimonal/>
      <PriceSection/>
      <Footer/>
    </>
  )
}

export default App
