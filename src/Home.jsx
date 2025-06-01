import { Helmet } from 'react-helmet-async';
import './index.css'
import './Home.css'
import Profile from './components/Profile'
import Works from './components/Works'
import Contact from './components/Contact'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';


function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Defer focus until DOM is ready
      const timeout = setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.focus();
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0); // Delay one tick

      return () => clearTimeout(timeout);
    }
  }, [hash]);

  return (
    <>
      <Helmet>
        <title>Kosei Oki</title>
      </Helmet>
      <main id="main-content">
        <Profile />
        <Works />
        <Contact />
      </main>


    </>
  )
}

export default Home
