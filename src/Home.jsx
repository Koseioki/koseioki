import { Helmet } from 'react-helmet-async';
import './index.css'
import Works from './components/Works'
import Kosei from './assets/kosei.webp'
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
          el.scrollIntoView({ behavior: 'auto' });
        }
      }, 0); // Delay one tick

      return () => clearTimeout(timeout);
    }
  }, [hash]);

  return (
    <>
      <Helmet>
        <title>Kosei&#39;s digital work</title>
      </Helmet>
      <main id="main-content">
        <h1 className="sr-only">Kosei&#39;s digital work</h1>
        <Works />

        <section>
          <h2>Involved Organisations</h2>
          <ul>
            <li>
              <a href="https://www.teachaccess.org/">Teach Access</a> — member of
              Teach Access Europe working groups
            </li>
            <li>
              <a href="https://www.w3.org">W3C</a> — member of Nordic Accessibility Community Group
            </li>
          </ul>
        </section>


        <section id="about">
          <h2>Who I am</h2>
          <p>
            I've been nerding out about front-end development and universal design since around 2008.

          </p>
          <p>
            I have a background in both software development and intersectional studies.
          </p>
          <p>
            Apart from my engineering work, I've been involved with several NGOs, focusing on cross-cultural
            communication, social justice, disability rights, and Queer
            communities.
          </p>
          <p>
            I'm also certified as an IAAP Certified Professional in Accessibility
            Core Competencies (CPACC).
          </p>
          <img src={Kosei} alt="a selfie of a man, styled short hair and wearing a black windbreaker, smiling, photo" />

          <h3>You can find me on</h3>
          <ul>
            <li>
              <a href="https://linkedin.com/in/koseioki">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/koseioki">GitHub</a>
            </li>
          </ul>
        </section>
      </main>


    </>
  )
}

export default Home
