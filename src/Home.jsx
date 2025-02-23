import Header from "./Header"
import HaloSection from "./HaloSection"
import AboutMe from "./AboutMe"


function Home() {

  return (
    <>
    <Header />
      <main id="main-content">
        <HaloSection />
        <AboutMe />
      </main>
    </>
  )
}

export default Home
