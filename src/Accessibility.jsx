import { Helmet } from 'react-helmet-async';
import BreadCrumbs from "./components/BreadCrumbs";
import {useRef, useEffect} from "react";
function Accessibility() {

      const headingRef = useRef(null);
    
      useEffect(() => {
        if (headingRef.current) {
          headingRef.current.focus();
        }
      }, []);
    return (
        <>

            <Helmet>
                <title>Accessibility - Kosei Oki</title>
            </Helmet>
            <BreadCrumbs />
            <main id="main-content">
                <h1 ref={headingRef}>Accessibility</h1>
                <p>This is the accessibility page.</p>
            </main>
        </>
    )
}

export default Accessibility