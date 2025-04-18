import { Helmet } from 'react-helmet';

import './index.css'
import './Home.css'
import Header from './components/Header'
import Profile from './components/Profile'
import Works from './components/Works'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';


function Home() {
  const location = useLocation();
  useEffect(() => {
    if(location.hash){
      const element = document.querySelector(location.hash); 
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } 
    }
  },[location]);  

  return (
    <>
      <Helmet>
        <title>Kosei Oki</title>
        </Helmet>
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
