import AccordionSection, { AccordionProvider } from "./AccordionSection";

import PrehabPlusAidpro from "../assets/prehab-plus/aidpro.webp";
import PrehabPlusAffinityDiagram from "../assets/prehab-plus/affinity-diagram.webp";
import PrehabPlusExperienceMapping from "../assets/prehab-plus/experience-mapping.webp";
import PrehabPlusHowMightWe from "../assets/prehab-plus/how-might-we.webp";
import PrehabPlusLoFi from "../assets/prehab-plus/lo-fi.webp";
import PrehabPlusLoFiTesting from "../assets/prehab-plus/lo-fi-test.webp";
import PrehabPlusPrioritisationMatrix from "../assets/prehab-plus/prioritisation-matrix.webp";
import RegionSjaelland from "../assets/prehab-plus/region-sjaelland.webp";
import PrehabPlusScreenshot1 from "../assets/prehab-plus/screenshot1.webp";
import PrehabPlusScreenshot2 from "../assets/prehab-plus/screenshot2.webp";
import PrehabPlusScreenshot3 from "../assets/prehab-plus/screenshot3.webp";
import PrehabPlusScreenshot4 from "../assets/prehab-plus/screenshot4.webp";
import PrehabPlusScreenshot5 from "../assets/prehab-plus/screenshot5.webp";
import PrehabPlusUserflow from "../assets/prehab-plus/user-flow.webp";

import PrehabPlusContact from "../assets/prehab-plus/contact.webp";
import PrehabPlusCrazy8s from "../assets/prehab-plus/crazy-8s.webp";
import PrehabPlusJakob1 from "../assets/prehab-plus/jakob-1.webp";
import PrehabPlusJakob2 from "../assets/prehab-plus/jakob-2.webp";
import PrehabPlusListOfAppointments from "../assets/prehab-plus/list-of-appointments.webp";
import PrehabPlusMoodboard from "../assets/prehab-plus/moodboard.webp";
import PrehabPlusSketches from "../assets/prehab-plus/sketches.webp";
import PrehabPlusStyletile from "../assets/prehab-plus/styletile.webp";
import PrehabPlusTesting1 from "../assets/prehab-plus/testing1.webp";
import PrehabPlusTesting2 from "../assets/prehab-plus/testing2.webp";
import PrehabPlusTesting3 from "../assets/prehab-plus/testing3.webp";
import PrehabPlusTesting4 from "../assets/prehab-plus/testing4.webp";
import PrehabPlusTesting5 from "../assets/prehab-plus/testing5.webp";
import PrehabPlusToDoList from "../assets/prehab-plus/to-do-list.webp";

import PrehabPlusA11y1 from "../assets/prehab-plus/a11y1.webp";
import PrehabPlusA11y2 from "../assets/prehab-plus/a11y2.webp";
import PrehabPlusA11y3 from "../assets/prehab-plus/a11y3.webp";
import PrehabPlusA11y4 from "../assets/prehab-plus/a11y4.webp";
import PrehabPlusA11y5 from "../assets/prehab-plus/a11y5.webp";
import PrehabPlusA11y6 from "../assets/prehab-plus/a11y6.webp";
import PrehabPlusA11y7 from "../assets/prehab-plus/a11y7.webp";
import PrehabPlusA11y8 from "../assets/prehab-plus/a11y8.webp";
import PrehabPlusA11y9 from "../assets/prehab-plus/a11y9.webp";
import PrehabPlusA11y10 from "../assets/prehab-plus/a11y10.webp";

function CasePrehabPlus() {
    return (
        <>
            <h2 className="headings">Challenges</h2>
            <p className="paragraph">
                Although prehabilitation is beneficial for patients, it can be difficult to get them to follow the program.
            </p>
            <p className="paragraph">
                Patients already receive a lot of paperwork, and most cancer patients are older adults who may have limited experience with technology.
            </p>
            <p className="paragraph">
                On top of that, they are in a state of crisis—so the experience should feel supportive, not like an additional burden.
            </p>
            <h2 className="headings">Design Process</h2>
            <AccordionProvider>
                <ul className="accordion-container">
                    <AccordionSection title="Research and Mapping" index={0}>
                        <p className="paragraph">
                            I conducted both generative research (exploring the question ‘What’s going on?’) to build foundational knowledge about the disease and its associated care, and descriptive research (focusing on ‘What is happening, and how?’) to gain deeper insight into the specific challenges.
                        </p>
                        <p className="paragraph">
                            This included gathering insights from the surgeon and prehabilitation coordinator at Region Sjælland, as well as analysing interviews from previous research papers.
                        </p>
                        <p className="paragraph">
                            Additionally, I researched the difficulties older generations in Denmark face when using digital solutions, as typical patients are aged 50 and above.
                        </p>
                        <img src={PrehabPlusAidpro} alt="" />
                        <p className="paragraph">
                            Afterwards, I organised all the findings using an affinity diagram to identify patterns.
                        </p>
                        <img src={PrehabPlusAffinityDiagram} alt="" />
                        <p className="paragraph">
                            I also created an Experience Map to both organise all the findings chronologically and identify the users’ pains and gains.
                        </p>
                        <p className="paragraph">
                            However, due to a lack of input—especially in the “Feeling” section—I decided to leave it incomplete.
                        </p>
                        <img src={PrehabPlusExperienceMapping} alt="" />
                        <p className="paragraph">
                            I didn’t create a user persona, which is often used to define the main users, because this approach tends to highlight only the “best candidate” for solutions.
</p>
                        <p className="paragraph">
                            In other words, it can overlook the diversity of people and situations, which goes directly against the goals of this solution.

</p>
                        <p className="paragraph">
                            After the research, I found out that:
                        </p>
                        <ul className="bulleted-list">
                            <li>Lack of support can lead to patients not completing prehabilitation.</li>
                            <li>Low health literacy and language barriers are also major factors contributing to non-completion.</li>
                            <li>Too many appointments and scattered information create confusion and overwhelm.</li>
                            <li>Exercise is the most important component—once patients start exercising, they gain a sense of autonomy, feel significantly better, and are more likely to complete the program.</li>
                            <li>Some patients prefer in-person communication over digital solutions, and some do not own digital devices at all.</li>
                        </ul>
                        <p className="paragraph">
                            Based on the challenges identified, I used ‘How Might We’ questions to generate potential solutions.
                        </p>
                        
                    </AccordionSection>

                    <AccordionSection title="Design Phase" index={1}>
                        <p>Content for Design Phase</p>
                        <p>Content for Design Phase</p>
                        <p>Content for Design Phase</p>
                    </AccordionSection>
                </ul>
            </AccordionProvider>
        </>
    );
}

export default CasePrehabPlus;