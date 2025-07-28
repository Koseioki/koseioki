import AccordionSection, { AccordionProvider } from "./AccordionSection";

import CoopManagementAffinityDiagram from "../assets/coop-management/affinity-diagram.webp";
import CoopManagementHowMightWe from "../assets/coop-management/how-might-we.webp";
import CoopManagementLoFi from "../assets/coop-management/lo-fi.webp";
import CoopManagementLoFiTesting from "../assets/coop-management/lo-fi-test.webp";
import CoopManagementScreenshot1 from "../assets/coop-management/screenshot1.webp";
import CoopManagementScreenshot2 from "../assets/coop-management/screenshot2.webp";
import CoopManagementScreenshot3 from "../assets/coop-management/screenshot3.webp";
import CoopManagementScreenshot4 from "../assets/coop-management/screenshot4.webp";
import CoopManagementScreenshot5 from "../assets/coop-management/screenshot5.webp";
import CoopManagementUserflow from "../assets/coop-management/user-flow.webp";
import CoopManagementUserPersona from "../assets/coop-management/user-persona.webp";

function CaseCoopManagement() {
    return (
        <>
            <h2 className="headings">Challenges</h2>
            <p className="paragraph">
                Coop had been relying on a third-party provider—an expensive solution—to sell surplus food as “discount bags”.


            </p>
            <p className="paragraph">
                However, the process of selling those was time-consuming, costly, and required significant effort.


            </p>
            <p className="paragraph">
                They needed a new system that was easier to manage and more cost- and time-efficient.

            </p>

            <h2 className="headings">Design Process</h2>
            <AccordionProvider>
                <ul className="accordion-container">

                    <AccordionSection title="Discover (Research)" index={0}>
                        <p className="paragraph">
                            We began by researching the third-party provider to understand the existing context. Then, we conducted semi-structured interviews with Coop employees, focusing on their current workflow and operational challenges. Rather than asking directly about their desired features, we aimed to deeply understand their day-to-day context before proposing any solutions.

                        </p>
                        <p className="paragraph">
                            Afterwards, we organised all the findings using an affinity diagram to identify patterns.

                        </p>
                        <img src={CoopManagementAffinityDiagram} alt="" />
                        <p className="paragraph">
                            Based on the insights from the affinity diagram, we created a user persona to clarify and simplify our understanding of the target user, helping us stay focused on who we were designing the solution for.

                        </p>
                        <img src={CoopManagementUserPersona} alt="" />
                        <p className="paragraph">
                            Through this process, we identified key issues:
                        </p>
                        <ul className="bulleted-list">
                            <li>Checking expiring/expired food takes a long time to finish, since it is done manually.</li>
                            <li>Employees get frustrated when people reserve discount bags but do not appear on time.</li>
                            <li>The third-party app they were using was slow.</li>
                            <li>They used to have an app where they could sell discount bags, but since the commission fee was quite expensive, they stopped using it.</li>
                        </ul>
                        <p className="paragraph">
                            Based on the challenges identified, we used ‘How Might We’ questions to generate potential solutions.

                        </p>
                        <img src={CoopManagementHowMightWe} alt="" />
                    </AccordionSection>

                    <AccordionSection title="Define (Concept)" index={1}>
                        <p className="paragraph">
                            Based on the research and mapping activities, the solution would include those features:

                        </p>
                        <ul className="bulleted-list">
                            <li>An inventory management system directly connected to the discount bag sales platform</li>
                            <li>The ability to track who placed an order and when they are scheduled to pick it up</li>
                            <li>Automated reminders to help prevent no-shows as much as possible.</li>
                        </ul>

                    </AccordionSection>

                    <AccordionSection title="Develop (Prototyping and Testing)" index={2}>
                        <p className="paragraph">
                            Before starting any visual design work, I created a user flow based on the list of requirements, to structure how users would navigate the solution in order to complete their tasks.
                        </p>
                        <img src={CoopManagementUserflow} alt="" />
                        <p className="paragraph">
                            Following the user flow, we developed a low-fidelity prototype and conducted think-aloud testing to assess its usability, particularly for first-time users.

                        </p>
                        <p className="paragraph">
                            I identified several issues through the testing results and addressed them in the next iteration of the prototype.

                        </p>
                        <img src={CoopManagementLoFi} alt="" />
                        <img src={CoopManagementLoFiTesting} alt="" />

                    </AccordionSection>
                    <AccordionSection title="Deliver (Finish Product)" index={3}>
                        <div className="product-screenshots">
                            <img src={CoopManagementScreenshot1} className="product-screenshot" alt="" aria-hidden="true" />
                            <img src={CoopManagementScreenshot2} className="product-screenshot" alt="" aria-hidden="true" />
                            <img src={CoopManagementScreenshot3} className="product-screenshot" alt
                                ="" aria-hidden="true" />
                            <img src={CoopManagementScreenshot4} className="product-screenshot" alt="" aria-hidden="true" />
                            <img src={CoopManagementScreenshot5} className="product-screenshot" alt="" aria-hidden="true" />

                        </div>
                        <p className="paragraph">
                            We created a solution that allows Coop employees to easily manage and post discounted food bags, directly integrated with the inventory management system. The app also sends automated reminders to customers who have reserved a bag, helping reduce no-shows and food waste.

                        </p>
                    </AccordionSection>
                </ul>
            </AccordionProvider>
        </>
    );
}

export default CaseCoopManagement;