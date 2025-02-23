import Header from "./Header"
import HaloSection from "./HaloSection"
import AboutMe from "./AboutMe"
import Contact from "./Contact"


function Home() {

  return (
    <>
    <Header />
      <main id="main-content">
        <HaloSection />
        <AboutMe />
        <Contact />
      </main>
    </>
  )
}

export default Home
