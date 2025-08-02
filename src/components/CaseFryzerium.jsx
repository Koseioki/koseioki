import AccordionSection, { AccordionProvider } from "./AccordionSection";

function CaseFryzerium() {
    return (
        <>
                    <h2 className="headings">Challenges</h2>
                    <p className="paragraphs">
                        challenges
                        </p>
                                    <h2 className="headings">Design Process</h2>

                        <AccordionProvider>
                <ul className="accordion-container">
                     <AccordionSection title="Research" index={0}>
                        <p className="paragraphs">
                            Research content
                        </p>
                    </AccordionSection>
                    </ul>
                        </AccordionProvider>
</>
        );
    }

export default CaseFryzerium;