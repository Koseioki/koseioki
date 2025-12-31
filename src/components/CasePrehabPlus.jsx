// import AccordionSection, { AccordionProvider } from "./AccordionSection";

import AccordionSection from "./AccordionSection";
import PrehabPlusAidpro from "../assets/prehab-plus/aidpro.webp";
import PrehabPlusAffinityDiagram from "../assets/prehab-plus/affinity-diagram.webp";
import PrehabPlusExperienceMapping from "../assets/prehab-plus/experience-mapping.webp";
import PrehabPlusHowMightWe from "../assets/prehab-plus/how-might-we.webp";
import PrehabPlusLoFi from "../assets/prehab-plus/lo-fi.webp";
import PrehabPlusLoFiTesting from "../assets/prehab-plus/lo-fi-test.webp";
import PrehabPlusPrioritisationMatrix from "../assets/prehab-plus/prioritisation-matrix.webp";
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


import PrehabilitationComponents from "../assets/prehab-plus/prehabilitation-components.webp";
import AidSurgPreoperativePhase from "../assets/prehab-plus/aid-surg-preoperative-phase.webp";
import ListOfValues from "../assets/prehab-plus/list-of-values.webp";
import ListOfRequirements from "../assets/prehab-plus/list-of-requirements.webp";

import LawOfProximity from "../assets/prehab-plus/law-of-proximity.webp";
import HicksLaw from "../assets/prehab-plus/hicks-law.webp";
import FittsLaw from "../assets/prehab-plus/fitts-law.webp";


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
            {/* <AccordionProvider> */}
                <ul className="accordion-container">
                    <AccordionSection title="Understanding the Full Context" index={0}>
                        <h4 className="headings">Generative Research</h4>
                        <p className="paragraph">
                            First I conducted generative research (“What’s up with…?) online, exploring the broader context of colorectal cancer treatment through online sources, to gather foundational knowledge about the disease and its associated care.
                        </p>
                        <p className="paragraph">
                            This included what colorectal cancer is, its symptoms, causes, which included several factors both a patient can control and cannot, and demographics.
                        </p>
                        <p className="paragraph">
                            According to Cancer Research UK, Typical prehabilitation includes three lifestyle changes: nutrition, exercise, and psycho-behavioural support.
                        </p>
                        <img src={PrehabilitationComponents} alt="A pie chart evenly divided into three categories: nutrition, exercise, and psycho-behavioural." />
                        <p className="paragraph">
                            Physical activity is a crucial part of the prehabilitation process, as it not only improves overall physical functioning but also helps reduce anxiety and depression, increases energy levels, and can stimulate appetite.
                        </p>

                        <p className="paragraph">
                            At Region Sjælland, after a colorectal cancer diagnosis, the medical team conducts all necessary examinations before holding a multidisciplinary team (MDT) conference.
                        </p>
                        <p className="paragraph">
                            During this conference, healthcare professionals assess the patient’s condition and assign a risk category—A, B, C, or D. This classification is then directly used to determine which prehabilitation programme the patient will follow.
                        </p>
                        <img src={PrehabPlusAidpro} alt="A visualisation showing the trajectory of the treatment." />
                        <p className="paragraph">
                            The program’s content varies based on the patient’s classification. Patients in categories A, B, and C1 undergo a two-week prehabilitation period, while those in categories C2 and D follow a four-week program.
                        </p>
                        <p className="paragraph">
                            For example, patients in category A typically require only iron infusions during their two-week period, whereas category D patients follow a more comprehensive plan that includes supervised and unsupervised physical training, protein supplementation, consultations, assessments, and other interventions.
                        </p>
                        <img src={AidSurgPreoperativePhase} alt="AID-SURG preoperative phase visualisation of classes A to D."  />
                        <p className="paragraph">
                            Supervised and home training sessions are scheduled regularly, as the prehabilitation facilitator needs to coordinate with physiotherapists in advance. In contrast, other appointments can be arranged more flexibly, depending on the patient’s condition.
                        </p>
                        <h4 className="headings">Descriptive Research</h4>
                        <p className="paragraph">
                            After gaining an overview of the processes, I then conducted descriptive research (“What and how?”) through further online investigation to gain deeper insight into the problems outlined in the problem statements.

                        </p>
                        <p className="paragraph">
                            Since I couldn’t get in touch with colorectal cancer patients due to scheduling conflicts, I read several qualitative research papers related to challenges during prehabilitation, which included patient interviews.
                        </p>
                        <p className="paragraph">
                            At the same time, I read research on the challenges faced by older generations in the digital society, published by Digitaliseringsstyrelsen, since most colorectal cancer patients are over 50 years old.
                        </p>




                    </AccordionSection>

                    <AccordionSection title="Identifying the Core Problems" index={1}>
                        <p className="paragraph">
                            After the research, I organised all the findings using an affinity diagram to identify patterns.
                        </p>
                        <img src={PrehabPlusAffinityDiagram} alt="An affinity diagram organising sticky notes that describe findings into a table in Figma."/>
                        <p className="paragraph">
                            I also created an Experience Map to both organise all the findings chronologically and identify the users’ pains and gains.
                        </p>
                        <p className="paragraph">
                            However, due to a lack of input—especially in the “Feeling” section—I decided to leave it incomplete.
                        </p>
                        <img src={PrehabPlusExperienceMapping} alt="An experience map with four horizontal phases: Diagnosis, Prehab, Operation, and Rehab, and two vertical dimensions: Doing and Feeling. The Feeling dimension declines immediately after Diagnosis and improves during Prehabilitation." />
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
                        <img src={PrehabPlusHowMightWe} alt="A table titled 'How Might We' with questions in the left column and brainstormed answers in the right column." />
                        <p className="paragraph">
                            I then used a prioritisation matrix to evaluate which potential solutions would have the most impact and be the most feasible.

                        </p>

                        <img src={PrehabPlusPrioritisationMatrix} alt="A prioritisation matrix categorising sticky notes of features by user value and effort." />

                        <p className="paragraph">
                            Based on all the research conducted and the prioritisation matrix, I prepared a comprehensive list of requirements for the solution, detailing the features to be implemented along with their corresponding UI elements.
                        </p>

                        <p className="paragraph">
                            This list served as a foundational guide for the prototyping and design stages, outlining the essential elements of the digital solution.
                        </p>
                        <img src={ListOfRequirements} alt="A table listing requirements for features alongside their corresponding UI elements."/>
                        <p className="paragraph">
                            Additionally, I developed a list of core values, which—unlike the list of requirements that outlines concrete features—focuses on the underlying principles and purpose of the solution. This values list also served as a guiding reference during the visual design phase, including the creation of the moodboard and design guidelines.
                        </p>

                        <img src={ListOfValues} alt="A list of core values: Support, Structure, Human-like, Communication, and No-learning, each accompanied by explanatory notes." />

                    </AccordionSection>

                    <AccordionSection title="Defining the Concept of the Solution" index={2}>
                        <p className="paragraph">
                            Based on the research and mapping activities, the solution would include those features:

                        </p>
                        <ul className="bulleted-list">
                            <li>Check-offable list to motivate patients to complete their daily tasks.</li>
                            <li>Clear overview of the entire schedule and process.</li>
                            <li>Easy access to support from assigned staff members.</li>
                        </ul>
                        <p className="paragraph">
                            The solution needed to meet the following criteria:
                        </p>
                        <ul className="bulleted-list">
                            <li>It had to remain intuitive without relying on digital conventions, using familiar, real-life elements such as 3D buttons, calendars, and notepads instead of modern flat style.</li>
                            <li>It had to be understandable and perceivable, combining images, text, video, and colours to support different levels of health literacy.</li>
                            <li>It had to be accessible, as guidelines from the WAI (Web Accessibility Initiative) emphasise that accessible applications benefit older users as well.</li>
                        </ul>
                    </AccordionSection>
                    <AccordionSection title="Creating Prototypes that Reflect the Real World" index={3}>
                        <h4 className="headings">Sketch to Prototype</h4>
                        <p className="paragraph">
                            Before starting any visual design work, I created a user flow based on the list of requirements, to structure how users would navigate the solution in order to complete their tasks.

                        </p>
                        <img src={PrehabPlusUserflow} alt="User flows including Login and Register, To-do List, Schedule, and Help." />
                        <p className="paragraph">
                            After completing the user flow, I moved on to the sketching phase. I began by creating rough sketches based on the user flow, using the Crazy 8’s method, which is effective for generating flexible and creative ideas within a short time frame.

                        </p>
                        <img src={PrehabPlusCrazy8s} alt="Eight messy handwritten sketches on paper." />
                        <p className="paragraph">
                            Afterwards, I created more refined sketches, adding details that could not be fully developed during the Crazy 8’s exercise.

                        </p>
                        <img src={PrehabPlusSketches} alt="Refined sketches of each component and page." />
                        <p className="paragraph">
                            Based on the sketches and user flow, I then created a Lo-Fi prototype in Figma with less emphasis on visual aesthetics, since it will be easier for me to modify after finding flaws in the flow during usability testing afterwards.

                        </p>
                        <img src={PrehabPlusLoFi} alt="A screenshot of the Figma Lo-Fi prototype, mobile screen view." />
                        <p className="paragraph">
                            In the prototype, a to-do list for daily tasks is included in the interface. Ticking off completed tasks can provide a sense of reward and accomplishment.

                        </p>
                        <img src={PrehabPlusToDoList} alt="A to-do list of training tasks in the prototype."/>
                        <p className="paragraph">
                            A list of the patient’s appointments is included in both a list view and a calendar view. This dual-format approach provides a clear chronological overview of the entire treatment process, helping to reduce uncertainty and improve the patient’s sense of control.

                        </p>
                        <img src={PrehabPlusListOfAppointments} alt="“Mit Skema” page showing both list and calendar views." />
                        <p className="paragraph">
                            A dedicated page was added where patients can directly contact their assigned staff members. This makes it easier for patients to seek human assistance when needed, fostering a sense of support regardless of their social situations.

                        </p>
                        <img src={PrehabPlusContact} alt="“Kontakt” page displaying the contact person's name, role, and three buttons for writing, calling, and video calling." />

                        <h4 className="headings">UX Laws</h4>
                        <p className="paragraph">
                            In this prototype, I applied various UX laws to enhance user navigation and overall usability.

                        </p>
                        <p className="paragraph">

                            I applied Jakob’s Law by incorporating as many familiar real-world elements as possible, enabling users to intuitively understand their function without needing to learn something new.


                        </p>
                        <p className="paragraph">
                            In this example, I used components that resemble a to-do list and a three-dimensional button commonly seen in real life, making it easier for users to “guess” their purpose.

                        </p>
                        <img src={PrehabPlusJakob1} alt="Visual comparison of the to-do list with buttons in the prototype, physical lists, and physical buttons." />
                        <p className="paragraph">
                            In this calendar example, I used the concept of a tear-off calendar to indicate the date.

                        </p>
                        <img src={PrehabPlusJakob2} alt="Visual comparison of the tear-off calendar in the prototype and the physical calendar." />
                        <p className="paragraph">
                            I deliberately avoided relying too heavily on digital layout conventions or icons, although I included some when no better real-world alternatives were available. According to Digitaliseringsstyrelsen, while older generations in Denmark do use digital devices, their primary purpose is communication rather than browsing or using apps.


                        </p>
                        <p className="paragraph">
                            As a result, their familiarity with digital conventions may be limited compared to younger generations, who are more likely to benefit from such conventions.
                        </p>
                        <p className="paragraph">
                            I applied the Law of Proximity to the list items, as visually grouped elements are perceived as related. This helps users easily understand that these items serve similar functions.
                        </p>
                        <img src={LawOfProximity} alt="Two similar items on the to-do list with seemingly similar functions." />
                        <p className="paragraph">
                            I applied Hick’s Law on the login page by providing only a single option: logging in with MitID. Research shows that older generations often struggle with setting up digital products, so by minimising cognitive load, I aimed to make the process less overwhelming for them.
                        </p>
                        <img src={HicksLaw} alt="Log-in screen showing only the title “Prehab+” and a “Login med MitID” button." />
                        <p className="paragraph">
                            In line with Fitts’s Law, I increased the size of clickable elements to make them easier for users to interact with.
                        </p>
                        <img src={FittsLaw} alt="Contact page with all call-to-action buttons enlarged for a bigger target size." />

                    </AccordionSection>

                    <AccordionSection title="Translating Emotional Insights into Visual Design" index={4}>
                        <p className="paragraph">
                            I created a moodboard to better understand the overall visual style. To select imagery that best fits the context of this solution, I referred to the list of values developed during the mapping, along with the “emotional insights” gathered throughout the research process.

                        </p>
                        <img src={PrehabPlusMoodboard} alt="Moodboard featuring a white-based colourful pastel palette with soft-touch handwritten illustrations; images mainly show paper-based objects such as flashcards, sticky notes, notebooks, and message cards." />
                        <p className="paragraph">
                            Using the Mood Board as a guide, I created a Style Tile to specify the design elements such as colours and typefaces for all the pages to ensure the solution would be visually consistent across all its pages.

                        </p>
                        <img src={PrehabPlusStyletile} alt="Style Tile on Figma showing fonts, text sizes, colours, and other components matching the moodboard's colour theme." />
                    </AccordionSection>

                    <AccordionSection title="Testing Prototypes with Real Users" index={5}>
                        <p className="paragraph">
                            I then conducted usability testing sessions on the Lo-Fi prototype to ensure that the functions are working as I intend. During the test, I followed the “Think-Aloud” method to understand where testers are struggling to find information and what is causing confusion. I used this testing method because, according to Norman Nielsen Group, it is cost-effective and easy to learn.


                        </p>
                        <p className="paragraph">
                            I asked 5 people to test the solution, since this number is the “sweet spot” to identify any crucial defects (according to Norman Nielsen Group). The group included one person over 60 years old, one non-Danish speaker, and one person with dyslexia. I aimed to involve a diverse group of users, since the research shows that cancer patients have varying abilities.

                        </p>

                        <img src={PrehabPlusLoFiTesting} alt="A table of testing tasks listing test takers and their reactions." />
                        <p className="paragraph">
                            Based on the testing results, I made updates to the high-fidelity prototype.

                        </p>
                        <p className="paragraph">
                            I added a “Skip” button to the login confirmation screen, as one participant tried to tap the screen to proceed.

                        </p>
                        <img src={PrehabPlusTesting1} alt="Lo-Fi prototype without a skip button and Hi-Fi prototype including it."/>
                        <p className="paragraph">
                            I included a checkbox on each exercise page, since some participants expected to find it there rather than needing to return to the list page.

                        </p>
                        <img src={PrehabPlusTesting2} alt="Lo-Fi prototype without a checkbox and Hi-Fi prototype with it."/>
                        <p className="paragraph">
                            On the “Skema” page, I changed the link button text from “Læs mere” to “Det sker til aftalen,” based on feedback that “Læs mere” sounded uncertain—making it unclear whether the information was essential or just additional.

                        </p>
                        <img src={PrehabPlusTesting3} alt="A button labelled “Læs mere” in Lo-Fi and “Det sker til aftalen” in Hi-Fi." />
                        <p className="paragraph">
                            I added a short explanation to the contact card, as some participants were unsure about the person’s area of expertise or whether they were the appropriate contact.


                        </p>
                        <img src={PrehabPlusTesting4} alt="Additional text explaining the contact person included in the Hi-Fi prototype." />
                        <p className="paragraph">
                            I included a brief message emphasising that all these exercises are intended for today, not for the entire treatment period. This clarification was based on one participant misunderstanding them as long-term tasks.

                        </p>
                        <img src={PrehabPlusTesting5} alt="An element with the user contact's face icon and the message “Her er dine opgaver for i dag.” positioned at the top of the to-do list page." />

                    </AccordionSection>

                    <AccordionSection title="How Might We Make the Solution Accessible to Everyone?" index={6}>
                        <p className="paragraph">
                            I followed the Web Content Accessibility Guidelines (WCAG) 2.2 level AA as a reference throughout this project, since this is the most widely adopted reference according to World Wide Web Consortium (W3C).


                        </p>
                        <p className="paragraph">
                            When creating the style tile, I made sure the colour contrast between text and background in all combinations have a minimum of 4.5:1, including buttons and toggles.

                        </p>
                        <img src={PrehabPlusA11y1} alt="Example of a colour contrast checker showing dark text on a pink background with a contrast ratio of 5.25:1." />

                        <p className="paragraph">
                            The exercise tutorial page includes both a video and a text-based tutorial. According to WCAG, all non-text content presented to users must have a text alternative that serves an equivalent purpose (Success Criterion 1.1.1: Non-text Content)

                        </p>
                        <img src={PrehabPlusA11y2} alt="Exercise tutorial containing both video and text tutorials supplemented with images." />
                        <p className="paragraph">
                            On the calendar page, I avoided using colour as the sole indicator for the type of appointments, in accordance with WCAG, which states that color must not be used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element (Success Criterion 1.4.1: Use of Color).

                        </p>
                        <img src={PrehabPlusA11y3} alt="Calendar appointments shown with relevant icons inside colored circles." />
                        <p className="paragraph">
                            I used a heading in each section in accordance with WCAG Success Criterion 1.3.1: Info and Relationships, as screen reader users often navigate pages by headings to understand the structure and quickly locate relevant content.

                        </p>
                        <img src={PrehabPlusA11y4} alt="Example of page heading structure visualisation." />
                        <p className="paragraph">
                            However, this introduced a problem: in this example, since the DOM order is checkbox → heading → time → button, when a screen reader focuses on the heading, it might miss the checkbox, as the checkbox is not programmatically associated with the heading.

                        </p>
                        <img src={PrehabPlusA11y5} alt="Visualisation of the DOM order in the user interface."/>

                        <p className="paragraph">
                            To resolve this, I inserted an invisible heading before the checkbox and applied aria-hidden=&quot;true&quot; to the visible heading. This ensures that screen readers recognise only the hidden heading, placing the checkbox under it in the accessibility tree, while the visible heading remains available for sighted users.

                        </p>
                        <p className="paragraph">
                            I implemented a bypass block in the form of a “Skip to main content” link within the navigation. This allows keyboard users and users of assistive technologies to quickly jump to the main content without having to tab through the entire navigation each time. This improves usability and supports accessibility best practices (Success Criterion 2.4.1: Bypass Blocks).

                        </p>
                        <img src={PrehabPlusA11y6} alt="Skip button appearing at the top of the page." />
                        <p className="paragraph">
                            I added visible focus indicators to all interactive elements to ensure that keyboard users can clearly identify which element is currently focused. This aligns with Success Criterion 2.4.7: Focus Visible.

                        </p>
                        <p className="paragraph">
                            Additionally, I ensured that the focus indicators meet sufficient colour contrast requirements against both the element and the background in all possible combinations, improving visibility and accessibility for users with low vision.

                        </p>
                        <img src={PrehabPlusA11y7} alt="Two buttons: one unfocused, the other focused with a dark blue outline." />
                        <p className="paragraph">
                            I added aria-labels to the link buttons in the to-do list, including the specific name of each exercise (Success Criterion 2.4.4: Link Purpose (In Context)).

                        </p>
                        <p className="paragraph">
                            This ensures that screen reader users—who may navigate using a list of links—receive meaningful context instead of repetitive and uninformative text like “Se vejledning, Se vejledning, Se vejledning…”.

                        </p>
                        <img src={PrehabPlusA11y8} alt="Button interface and corresponding code with aria-label reading “Se vejledning i [exercise title].”" />
                        <p className="paragraph">
                            Since this application is built in React, navigating between pages can sometimes result in the focus landing in the middle of the page, which may disorient users—especially those relying on screen readers or keyboard navigation.

                        </p>
                        <p className="paragraph">
                            To address this, I implemented a function that automatically sets focus to the &lt;h1&gt; heading when a user navigates to a new page.

                        </p>
                        <p className="paragraph">
                            To make the &lt;h1&gt; focusable without adding it to the tab order, I used tabIndex={-1}. This enables programmatic focus while preventing users from reaching the element through normal tab navigation.

                        </p>
                        <img src={PrehabPlusA11y9} alt="Code snippet setting focus to the heading using headingRef.current?.focus()."/>
                        <p className="paragraph">
                            I ensured that the list/calendar view toggle is fully operable for screen reader users. To support WCAG Success Criterion 1.3.1: Info and Relationships, I included a visually hidden heading labelled “Skift visning”, allowing screen reader users to easily locate the section.

                        </p>
                        <p className="paragraph">
                            The toggle button itself is assigned role=&quot;switch&quot; and aria-label=&quot;Skift visning&quot;, enabling screen readers to accurately convey the function and purpose of the control.

                        </p>
                        <p className="paragraph">
                            To inform users of the current state after interaction, I implemented an invisible aria-live region directly below the toggle.

                        </p>
                        <p className="paragraph">
                            This region dynamically announces which view is currently selected once the toggle is activated. By setting aria-live=&quot;polite&quot;, the screen reader announces the change without interrupting the user’s current task.

                        </p>
                        <img src={PrehabPlusA11y10} alt="Screenshot with VoiceOver announcing the status of the toggle." />


                    </AccordionSection>

                    <AccordionSection title="Outcomes and Finish Product" index={7}>
                        <div className="product-screenshots">
                            <img src={PrehabPlusScreenshot1} className="product-screenshot" alt="“Min to-do liste” page featuring a message from the contact person and a to-do list of training tasks with buttons linking to each tutorial page." />
                            <img src={PrehabPlusScreenshot2} className="product-screenshot" alt="“Armløft med rotation” page showing a tutorial video and text explanation with supplemental images." />
                            <img src={PrehabPlusScreenshot3} className="product-screenshot" alt="“Mit skema” list view page showing titles, dates, and times of appointments with buttons linking to detail pages." />
                            <img src={PrehabPlusScreenshot4} className="product-screenshot" alt="“Mit skema” calendar view showing May 2025 with several icons and a “Download dit skema” button at the top." />
                            <img src={PrehabPlusScreenshot5} className="product-screenshot" alt="“Min kontakt” page displaying the contact person’s name, role, explanatory text, and buttons for email, calling, and video calling." />
                        </div>
                        <p className="paragraph">
                            I created an app designed to support colorectal cancer patients at Region
                            Sjælland during the prehabilitation process, helping them through a
                            challenging time by:
                        </p>
                        <ul className="bulleted-list">
                            <li>Simplifying which exercises the patient needs to complete each day</li>
                            <li>Making task completion feel rewarding</li>
                            <li>Clarifying what appointments the patient has and when they occur</li>
                            <li>Providing a clear overview of the entire period leading up to the operation</li>
                            <li>Helping patients feel connected to someone—such as a staff member—even if they do not have support from people around them</li>
                        </ul>
                        <p className="paragraph">
                            The interface uses real-life elements to feel familiar across generations, and combines images, text, video, and colours to enhance understanding. The app is also designed with accessibility in mind, ensuring it can be used effectively by older users and those with varying levels of digital literacy.

                        </p>
                    </AccordionSection>
                </ul>
            {/* </AccordionProvider> */}
        </>
    );
}

export default CasePrehabPlus;