import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import BreadCrumbs from './components/BreadCrumbs';
import { uxCases } from './data/uxCases'
import CaseCard from './components/CaseCard';
import './UXDesignCases.css';



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
                    In my UX work, I immerse myself in the context, listen to users, make design decisions based on findings, and iterate through prototyping and testing.
                </p>
                <p className="paragraph">
                    I always work with the goal of creating digital products that improve everyday experiences.
                </p>

                <ul className="case-list">
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