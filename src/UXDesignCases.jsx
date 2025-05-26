import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
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
            <BreadCrumbs />


            <main id="main-content">
                <h1 ref={headingRef} tabIndex="-1" className="headings">UX Design Cases</h1>
                <p className="paragraph">I have worked on UX cases where I immersed myself in the context and actively listened to users to design digital products that improve everyday life.</p>

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