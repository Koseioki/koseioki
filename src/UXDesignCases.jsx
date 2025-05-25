import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import BreadCrumbs from './components/BreadCrumbs';
import { uxCases } from './data/uxCases'
import CaseCard from './components/CaseCard';



function UXDesignCases() {

    const headingRef = useRef(null);

    useEffect(() => {
        if (headingRef.current) {
            headingRef.current.focus();
        }
    }, []);

    return (
        <>
            <Helmet>
                <title>UX Design Cases - Kosei Oki</title>
            </Helmet>
            <Header />
            <BreadCrumbs />


            <main id="main-content">
                <h1 ref={headingRef} tabIndex="-1" className="headings">UX Design Cases</h1>
                <p className="paragraph">text here</p>

                <ul>
                    {uxCases.map((caseItem) => (
                        <CaseCard
                            key={caseItem.slug}
                            caseItem={caseItem} 
                        />
                    ))}
                </ul>

            </main>
        </>
    );
}
export default UXDesignCases;