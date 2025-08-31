import { Helmet } from 'react-helmet-async';
import BreadCrumbs from "./components/BreadCrumbs";
import { useRef, useEffect } from "react";
function Privacy() {

  const headingRef = useRef(null);

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.focus();
    }
  }, []);
  return (
    <>

      <Helmet>
        <title>Privacy - Kosei Oki</title>
      </Helmet>
      <BreadCrumbs />
      <main id="main-content">
        <h1 className="headings" tabIndex="-1" ref={headingRef}>Privacy</h1>
        <h2 className="headings">No Data Collection Privacy Policy</h2>
        <p className="paragraph">I don&apos;t collect, store, or share any personal data from you. I don&apos;t use cookies, log personal information, nor track user activity in any way.</p>
        <h2 className="headings">Links to other websites</h2>
        <p className="paragraph">This website contains links to other websites. Please note that I have no control over the content or privacy practices of these external sites.</p>
        <p className="paragraph">If you visit another website from this one, please read the privacy policy on that website to learn how your information is handled.
</p>


      </main>
    </>
  )
}

export default Privacy;