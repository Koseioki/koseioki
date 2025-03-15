import Header from "./Header"
import HaloSection from "./HaloSection"
import Works from "./Works"
import AboutMe from "./AboutMe"
import Contact from "./Contact"
import Footer from "./Footer"
import './index.css'

function Home() {

  return (
    <>
      <Header />
      <main id="main-content">
        <HaloSection />
        <div className="grey-background">
          <Works />
        </div>
        <AboutMe />
        <div className="grey-background">
          <Contact />
        </div>
      </main>
      <Footer />
    
    </>
  )
}

export default Home
