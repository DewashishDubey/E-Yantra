import About from "./About"
import Cards from "./Cards"
import Footer from "./Footer"
import Nav from "./Nav"
import Staff from "./Staff"
import './Home.css'
import HeroC from "./HeroC"


function Home() {
  return (
    <>
      <div className="body">
      <Nav />
        <About />
        <HeroC/>
      <Cards />
      <Staff />
        <Footer />
        </div>
  </>
  )
}

export default Home
