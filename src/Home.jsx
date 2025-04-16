import './index.css'
import './Home.css'
import Header from './components/Header'
import Profile from './components/Profile'
import Works from './components/Works'
import Contact from './components/Contact'
import Footer from './components/Footer'

function Home() {

  return (
    <>
      <Header/>
      <main id="main-content">
      <Profile/>
      <Works />
      <Contact />
      </main>
     
<Footer />
    
    </>
  )
}

export default Home
