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
                <title>User Experience (UX) Design Cases - Kosei&#39;s digital work</title>
            </Helmet>
            <BreadCrumbs />


            <main id="main-content">
                <h1 ref={headingRef} tabIndex="-1">
                    User Experience (UX) Design Cases
                </h1>
                <p >
                    In my UX work, I immerse myself in the context, listen to users, make design decisions based on findings, and iterate through prototyping and testing.
                </p>
                <p>
                    I always work with the goal of creating digital products that improve everyday experiences.
                </p>

                <ul className="card-list">
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