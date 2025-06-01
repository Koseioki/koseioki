import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
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
                <p className="paragraph">
                    In my UX work, I immerse myself in the context, engage deeply with users through active listening, synthesise findings, and iterate through prototyping and testing — always with the goal of creating digital products that improve everyday experiences.
                    </p>

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