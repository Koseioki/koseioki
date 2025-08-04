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


import RemaningInformation from "../assets/coop-management/remaining-information.webp";
import InterviewQuestions from "../assets/coop-management/interview-questions.webp";
import ListOfRequirements from "../assets/coop-management/list-of-requirements.webp";
import OOUX from "../assets/coop-management/ooux.webp";
import Jakob from "../assets/coop-management/jakob.webp";
import HiFi from "../assets/coop-management/hi-fi.webp";
import Fitts from "../assets/coop-management/fitts.webp";
import Hick from "../assets/coop-management/hick.webp";
import DesignSystem from "../assets/coop-management/design-system.webp";
import FeedbackGrid from "../assets/coop-management/feedback-grid.webp";
import UserTasks from "../assets/coop-management/user-tasks.webp";
import Testing1 from "../assets/coop-management/testing1.webp";
import Testing2 from "../assets/coop-management/testing2.webp";
import Sketches from "../assets/coop-management/sketches.webp";

import KvicklyViby from "../assets/coop-management/kvickly-viby.webp";

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

                    <AccordionSection title="Research" index={0}>
                        <p className="paragraph">
                            Firstly, we started with desk research in order to have a fundamental understanding of this project, including the situation of food waste in Denmark, the background of the stakeholders, and how the current solutions work.

                        </p>
                        <p className="paragraph">
                            By doing this research, we aimed to get a clear overview of the ongoing situation.

                        </p>
                        <p className="paragraph">
                            After conducting desk research, we gained an overview of the industry’s approach to tackling food waste. We then organised the remaining information for interviews into a table.
                        </p>
                        <img src={RemaningInformation} alt="" aria-hidden="true" />
                        <p className="paragraph">

                            To get to know more about the true needs and priorities of our target audience, and to understand the context in which they will interact with the solution, we conducted semi-structured interviews with people working at a supermarket.

                        </p>
                        <img src={InterviewQuestions} alt="" aria-hidden="true" />
                        <p className="paragraph">
                            Based on the table, we created a qualitative interview guide with open-ended questions. When conducting interviews, we followed Cresswell&apos;s guide to qualitative research design (2014) to allow the interviewees to decide the direction of the conversation and share their experiences freely.
                        </p>
                        <p className="paragraph">
                            We conducted 3 interviews with employees at Kvickly Viby J, who are working in the bakery section, the meat section, and the fruits and vegetable section in the store, who have control over managing food waste at the store.
                        </p>
                        <img src={KvicklyViby} alt="" aria-hidden="true" />
                    </AccordionSection>

                    <AccordionSection title="Mapping" index={1}>
                        <p className="paragraph">
                            After conducting our desk research and interviews, we analysed all the gathered data by creating an Affinity Diagram in order to identify patterns.

                        </p>
                        <img src={CoopManagementAffinityDiagram} alt="" aria-hidden="true" />

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
                        <img src={CoopManagementHowMightWe} alt="" aria-hidden="true" />
                        <p className="paragraph">
                            Based on the insights from the affinity diagram, we created a user persona to clarify and simplify our understanding of the target user, helping us stay focused on who we were designing the solution for.

                        </p>
                        <img src={CoopManagementUserPersona} alt="" aria-hidden="true" />


                        <p className="paragraph">
                            In summary, we prepared a list of all the requirements for the solution from the previous mappings. This will be a guide for what elements to put in the website in the design stage.
                        </p>

                        <img src={ListOfRequirements} alt="" aria-hidden="true" />
                    </AccordionSection>



                    <AccordionSection title="Define Concept" index={2}>
                        <p className="paragraph">
                            Based on the research and mapping activities, the solution would include those features:

                        </p>
                        <ul className="bulleted-list">
                            <li>An inventory management system directly connected to the discount bag sales platform</li>
                            <li>The ability to track who placed an order and when they are scheduled to pick it up</li>
                            <li>Automated reminders to help prevent no-shows as much as possible.</li>
                        </ul>

                    </AccordionSection>

                    <AccordionSection title="Prototyping and Testing" index={3}>
                        <h4 className="headings">Wireframe to Sketch</h4>
                        <p className="paragraph">
                            To organise the elements on the list that some of the pages would have, we created Object-Oriented User Experience(OOUX) schemes.

                        </p>
                        <img src={OOUX} alt="" aria-hidden="true" />
                        <p className="paragraph">
                            At the same time, we created a user flow based on the list of requirements to structure how users would navigate the solution in order to complete their tasks.
                        </p>
                        <img src={CoopManagementUserflow} alt="" aria-hidden="true" />
                        <p className="paragraph">
                            After completing the user flow, we moved on to the sketching phase. We began by creating rough sketches based on the user flow, using the Crazy 8’s method, which is effective for generating flexible and creative ideas within a short time frame.
                        </p>
                        <p className="paragraph">
                            We created several sketches and then combined them to form a more refined version.

                        </p>
                        <img src={Sketches} alt="" aria-hidden="true" />

                        <h4 className="heading">UX Laws</h4>
                        <p className="paragraph">
                            While designing the interface we kept in mind Jacob’s law, in order to design the webapp&apos;s layout and navigation in a way that is familiar to users who are accustomed to similar maintenance apps.
                        </p>
                        <p className="paragraph">
                            The navigation is placed at the top and the left side of the interface, to make it easy for users to find their way around the app.

                        </p>
                        <img src={Jakob} alt="" aria-hidden="true" />
                        <p className="paragraph">
                            To adhere to Hick’s law, we made the decision to provide users with only the most necessary options and avoid overwhelming them with a plethora of choices.
                        </p>
                        <p className="paragraph">
                            We organised similar features into concise categories to make navigation easier and less daunting. We identified the most frequently used features and functions in the app, and based on their importance, prioritised them.
                        </p>
                        <img src={Hick} alt="" aria-hidden="true" />
                        <p className="paragraph">
                            To make it easier for users to click, interactive elements such as buttons are made larger per Fitts’s law.
                        </p>
                        <img src={Fitts} alt="" aria-hidden="true" />
                        <h4 className="heading">Low-Fidelity Prototype and Testing
                        </h4>
                        <p className="paragraph">
                            We created a Low-Fidelity (Lo-Fi) prototype on Figma based on the sketches and user flow with less emphasis on visual aesthetics since it is easier to modify after finding flaws in the flow during usability testing.
                        </p>
                        <img src={CoopManagementLoFi} alt="" aria-hidden="true" />

                        <p className="paragraph">
                            We conducted usability testing sessions on the Lo-Fi prototype to ensure that the functions were working as we intended. To begin with, we revisited our persona&apos;s goals and prepared tasks for the testers, based on those goals.

                        </p>
                        <img src={UserTasks} alt="" aria-hidden="true" />
                        <p className="paragraph">
                            During the test, we followed the “Think Aloud” method to understand why and where the testers were having trouble finding the right information and what was causing confusion. We asked 5 people to test the solution, since this number is the “sweet spot” to identify any crucial defects.

                        </p>

                        <img src={CoopManagementLoFiTesting} alt="" aria-hidden="true" />

                        <p className="paragraph">
                            After conducting tests, we create a grid to capture feedback. This would help us organise and better understand what changes had to be made based on the users’ likes, criticisms, questions, and ideas.
                        </p>
                        <img src={FeedbackGrid} alt="" aria-hidden="true" />
                        <h4 className="heading">High-Fidelity Prototype and Testing
                        </h4>
                        <p className="paragraph">
                            In our high-fidelity (Hi-Fi) prototype, we used QuickInfo’s design system to ensure our solution matched the style of their existing products.
                        </p>
                        <img src={DesignSystem} alt="" aria-hidden="true" />
                        <p className="paragraph">
                            We developed the Hi-Fi prototype by incorporating QuickInfo’s design system into our low-fidelity (Lo-Fi) prototype.
                        </p>
                        <img src={HiFi} alt="" aria-hidden="true" />
                        <p className="paragraph">
                            Based on feedback from previous user testing, we implemented several changes in the Hi-Fi prototype.
                        </p>
                        <p className="paragraph">
                            The menu items were renamed: “Pending orders” became “Reserved Bags”; “Create a post” became “Create a Bag.” An “All Bags” page was also added.
                        </p>
                        <img src={Testing1} alt="" aria-hidden="true" />
                        <p className="paragraph">
                            The list of bags layout was changed from a stacked list to an icon grid. The option “Mark as picked up” was added in the bottom right corner. Additionally, a filter feature was introduced to organise all ordered bags into categories: Completed, Pending, and Cancelled.
                        </p>
                        <img src={Testing2} alt="" aria-hidden="true" />
                        <p className="paragraph">
                            We conducted testing sessions for the Hi-Fi prototype in the same way as we did for the Lo-Fi version. Afterwards, we analysed the results and identified the main issues, as we had done with the Lo-Fi prototypes.
                        </p>
                    </AccordionSection>
                    <AccordionSection title="Outcomes and Finish Product" index={4}>
                        <div className="product-screenshots">
                            <img src={CoopManagementScreenshot1} className="product-screenshot" alt="" aria-hidden="true" />
                            <img src={CoopManagementScreenshot2} className="product-screenshot" alt="" aria-hidden="true" />
                            <img src={CoopManagementScreenshot3} className="product-screenshot" alt="" aria-hidden="true" />
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