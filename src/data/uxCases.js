import PrehabPlus from "../assets/prehab-plus/prehab-plus.webp";
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


import CoopManagementAffinityDiagram from "../assets/coop-management/affinity-diagram.webp";
import Coop from "../assets/coop-management/coop.webp";
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

import CoopManagement from "../assets/coop-management.webp";

export const uxCases = [

    {
        slug: "prehab-plus",
        title: "Prehab Plus",
        image: PrehabPlus,
        client: "Region Sjælland",
        clientLogo: RegionSjaelland,
        customSection: "CasePrehabPlus",
        summary: [
            {
                type: "paragraph",
                text: "I developed a web app that supports colorectal cancer prehabilitation programmes at Region Sjælland and helps make the entire process manageable during a difficult time in patients’ lives.",

            }
        ],
        problem: [
            {
                type: "paragraph",
                text: "Although prehabilitation is beneficial for patients, it can be difficult to get them to follow the program."
            },
            {
                type: "paragraph",
                text: "Patients already receive a lot of paperwork, and most cancer patients are older adults who may have limited experience with technology."
            },
            {
                type: "paragraph",
                text: "On top of that, they are in a state of crisis—so the experience should feel supportive, not like an additional burden."
            }
        ],
        sections: [
            {
                title: "Research and Mapping",
                content: [
                    {
                        type: "paragraph",
                        text: "I conducted both generative research (exploring the question ‘What’s going on?’) to build foundational knowledge about the disease and its associated care, and descriptive research (focusing on ‘What is happening, and how?’) to gain deeper insight into the specific challenges."
                    },
                    {
                        type: "paragraph",
                        text: "This included gathering insights from the surgeon and prehabilitation coordinator at Region Sjælland, as well as analysing interviews from previous research papers."
                    },
                    {
                        type: "paragraph",
                        text: "Additionally, I researched the difficulties older generations in Denmark face when using digital solutions, as typical patients are aged 50 and above."
                    },
                    {
                        type: "image",
                        src: PrehabPlusAidpro
                    },
                    {
                        type: "paragraph",
                        text: "Afterwards, I organised all the findings using an affinity diagram to identify patterns."
                    },
                    {
                        type: "image",
                        src: PrehabPlusAffinityDiagram
                    },
                    {
                        type: "paragraph",
                        text: "I also created an Experience Map to both organise all the findings chronologically and identify the users’ pains and gains."
                    },
                    {
                        type: "paragraph",
                        text: "However, due to a lack of input—especially in the “Feeling” section—I decided to leave it incomplete."
                    },
                    {
                        type: "image",
                        src: PrehabPlusExperienceMapping
                    },
                    {
                        type: "paragraph",
                        text: "I didn’t create a user persona, which is often used to define the main users, because this approach tends to highlight only the “best candidate” for solutions."
                    },
                    {
                        type: "paragraph",
                        text: "In other words, it can overlook the diversity of people and situations, which goes directly against the goals of this solution."
                    },
                    {
                        type: "paragraph",
                        text: "After the research, I found out that:"
                    }
                    ,
                    {
                        type: "list",
                        items: [
                            "Lack of support can lead to patients not completing prehabilitation.",
                            "Low health literacy and language barriers are also major factors contributing to non-completion.",
                            "Too many appointments and scattered information create confusion and overwhelm.",
                            "Exercise is the most important component—once patients start exercising, they gain a sense of autonomy, feel significantly better, and are more likely to complete the program.",
                            "Some patients prefer in-person communication over digital solutions, and some do not own digital devices at all."
                        ]
                    },
                    {
                        type: "paragraph",
                        text: "Based on the challenges identified, I used ‘How Might We’ questions to generate potential solutions."
                    },
                    {
                        type: "image",
                        src: PrehabPlusHowMightWe
                    },
                    {
                        type: "paragraph",
                        text: "I then used a prioritisation matrix to evaluate which potential solutions would have the most impact and be the most feasible."
                    },
                    {
                        type: "image",
                        src: PrehabPlusPrioritisationMatrix
                    }


                ]
            },

            {
                title: "Define Concept",
                content: [
                    {
                        type: "paragraph",
                        text: "Based on the research and mapping activities, the solution would include those features:"
                    },
                    {
                        type: "list",
                        items: [
                            "Check-offable list to motivate patients to complete their daily tasks.",
                            "Clear overview of the entire schedule and process.",
                            "Easy access to support from assigned staff members."
                        ]
                    },
                    {
                        type: "paragraph",
                        text: "The solution needed to meet the following criteria:"
                    },
                    {
                        type: "list",
                        items: [
                            "It had to remain intuitive without relying on digital conventions, using familiar, real-life elements such as 3D buttons, calendars, and notepads instead of modern flat style.",
                            "It had to be understandable and perceivable, combining images, text, video, and colours to support different levels of health literacy.",
                            "It had to be accessible, as guidelines from the WAI (Web Accessibility Initiative) emphasise that accessible applications benefit older users as well"
                        ]
                    }
                ]
            },
            {
                title: "Prototyping",
                content: [
                    {
                        type: "paragraph",
                        text: "Before starting any visual design work, I created a user flow based on the list of requirements, to structure how users would navigate the solution in order to complete their tasks."
                    },
                    {
                        type: "image",
                        src: PrehabPlusUserflow
                    },
                    {
                        type: "paragraph",
                        text: "After completing the user flow, I moved on to the sketching phase. I began by creating rough sketches based on the user flow, using the Crazy 8’s method, which is effective for generating flexible and creative ideas within a short time frame."

                    },
                    {
                        type: "image",
                        src: PrehabPlusCrazy8s
                    },
                    {
                        type: "paragraph",
                        text: "Afterwards, I created more refined sketches, adding details that could not be fully developed during the Crazy 8’s exercise."
                    },
                    {
                        type: "image",
                        src: PrehabPlusSketches
                    },
                    {
                        type: "paragraph",
                        text: "Based on the sketches and user flow, I then created a Lo-Fi prototype in Figma with less emphasis on visual aesthetics, since it will be easier for me to modify after finding flaws in the flow during usability testing afterwards."
                    },
                    {
                        type: "image",
                        src: PrehabPlusLoFi
                    },
                    {
                        type: "paragraph",
                        text: "In the prototype, a to-do list for daily tasks is included in the interface. Ticking off completed tasks can provide a sense of reward and accomplishment."
                    },
                    {
                        type: "image",
                        src: PrehabPlusToDoList
                    },
                    {
                        type: "paragraph",
                        text: "A list of the patient’s appointments is included in both a list view and a calendar view. This dual-format approach provides a clear chronological overview of the entire treatment process, helping to reduce uncertainty and improve the patient’s sense of control."
                    },
                    {
                        type: "image",
                        src: PrehabPlusListOfAppointments
                    },
                    {
                        type: "paragraph",
                        text: "A dedicated page was added where patients can directly contact their assigned staff members. This makes it easier for patients to seek human assistance when needed, fostering a sense of support regardless of their social situations."
                    },
                    {
                        type: "image",
                        src: PrehabPlusContact
                    },
                    {
                        type: "paragraph",
                        text: "In this prototype, I applied various UX laws to enhance user navigation and overall usability."

                    },
                    {
                        type: "paragraph",
                        text: "I applied Jakob’s Law by incorporating as many familiar real-world elements as possible, enabling users to intuitively understand their function without needing to learn something new."
                    },
                    {
                        type: "paragraph",
                        text: "In this example, I used components that resemble a to-do list and a three-dimensional button commonly seen in real life, making it easier for users to “guess” their purpose."
                    },
                    {
                        type: "image",
                        src: PrehabPlusJakob1
                    },
                    {
                        type: "paragraph",
                        text: "In this calendar example, I used the concept of a tear-off calendar to indicate the date."
                    },
                    {
                        type: "image",
                        src: PrehabPlusJakob2
                    },
                    {
                        type: "paragraph",
                        text: "I deliberately avoided relying too heavily on digital layout conventions or icons, although I included some when no better real-world alternatives were available. According to Digitaliseringsstyrelsen, while older generations in Denmark do use digital devices, their primary purpose is communication rather than browsing or using apps."
                    },
                    {
                        type: "paragraph",
                        text: "As a result, their familiarity with digital conventions may be limited compared to younger generations, who are more likely to benefit from such conventions."
                    }
                ]
            },
            {
                title: "Visual Design",
                content: [
                    {
                        type: "paragraph",
                        text: "I created a moodboard to better understand the overall visual style. To select imagery that best fits the context of this solution, I referred to the list of values developed during the mapping, along with the “emotional insights” gathered throughout the research process."
                    },
                    {
                        type: "image",
                        src: PrehabPlusMoodboard
                    },
                    {
                        type: "paragraph",
                        text: "Using the Mood Board as a guide, I created a Style Tile to specify the design elements such as colours and typefaces for all the pages to ensure the solution would be visually consistent across all its pages."
                    },
                    {
                        type: "image",
                        src: PrehabPlusStyletile
                    }
                ]
            },
            {
                title: "Testing",
                content: [
                    {
                        type: "paragraph",
                        text: "I then conducted usability testing sessions on the Lo-Fi prototype to ensure that the functions are working as I intend. During the test, I followed the “Think-Aloud” method to understand where testers are struggling to find information and what is causing confusion. I used this testing method because, according to Norman Nielsen Group, it is cost-effective and easy to learn."
                    },
                    {
                        type: "paragraph",
                        text: "I asked 5 people to test the solution, since this number is the “sweet spot” to identify any crucial defects (according to Norman Nielsen Group). The group included one person over 60 years old, one non-Danish speaker, and one person with dyslexia. I aimed to involve a diverse group of users, since the research shows that cancer patients have varying abilities."
                    },
                    {
                        type: "image",
                        src: PrehabPlusLoFiTesting
                    },
                    {
                        type: "paragraph",
                        text: "Based on the testing results, I made updates to the high-fidelity prototype."
                    },
                    {
                        type: "paragraph",
                        text: "I added a “Skip” button to the login confirmation screen, as one participant tried to tap the screen to proceed."
                    },
                    {
                        type: "image",
                        src: PrehabPlusTesting1
                    },
                    {
                        type: "paragraph",
                        text: "I included a checkbox on each exercise page, since some participants expected to find it there rather than needing to return to the list page."
                    },
                    {
                        type: "image",
                        src: PrehabPlusTesting2
                    },
                    {
                        type: "paragraph",
                        text: "On the “Skema” page, I changed the link button text from “Læs mere” to “Det sker til aftalen,” based on feedback that “Læs mere” sounded uncertain—making it unclear whether the information was essential or just additional."
                    },
                    {
                        type: "image",
                        src: PrehabPlusTesting3
                    },
                    {
                        type: "paragraph",
                        text: "I added a short explanation to the contact card, as some participants were unsure about the person’s area of expertise or whether they were the appropriate contact."
                    },
                    {
                        type: "image",
                        src: PrehabPlusTesting4
                    },
                    {
                        type: "paragraph",
                        text: "I included a brief message emphasising that all these exercises are intended for today, not for the entire treatment period. This clarification was based on one participant misunderstanding them as long-term tasks."
                    },
                    {
                        type: "image",
                        src: PrehabPlusTesting5
                    }

                ]
            },
            {
                title: "Accessibility",
                content: [
                    {
                        type: "paragraph",
                        text: "I followed the Web Content Accessibility Guidelines (WCAG) 2.2 level AA as a reference throughout this project, since this is the most widely adopted reference according to World Wide Web Consortium (W3C)."
                    },
                    {
                        type: "paragraph",
                        text: "When creating the style tile, I made sure the colour contrast between text and background in all combinations have a minimum of 4.5:1, including buttons and toggles."
                    },
                    {
                        type: "image",
                        src: PrehabPlusA11y1
                    },
                    {
                        type: "paragraph",
                        text: "The exercise tutorial page includes both a video and a text-based tutorial. According to WCAG, all non-text content presented to users must have a text alternative that serves an equivalent purpose (Success Criterion 1.1.1: Non-text Content)"
                    },
                    {
                        type: "image",
                        src: PrehabPlusA11y2
                    },
                    {
                        type: "paragraph",
                        text: "On the calendar page, I avoided using colour as the sole indicator for the type of appointments, in accordance with WCAG, which states that color must not be used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element (Success Criterion 1.4.1: Use of Color)."
                    },
                    {
                        type: "image",
                        src: PrehabPlusA11y3
                    },
                    {
                        type: "paragraph",
                        text: "I used a heading in each section in accordance with WCAG Success Criterion 1.3.1: Info and Relationships, as screen reader users often navigate pages by headings to understand the structure and quickly locate relevant content."
                    },
                    {
                        type: "image",
                        src: PrehabPlusA11y4
                    },
                    {
                        type: "paragraph",
                        text: "However, this introduced a problem: in this example, since the DOM order is checkbox → heading → time → button, when a screen reader focuses on the heading, it might miss the checkbox, as the checkbox is not programmatically associated with the heading."
                    },
                    {
                        type: "image",
                        src: PrehabPlusA11y5
                    },
                    {
                        type: "paragraph",
                        text: "To resolve this, I inserted an invisible heading before the checkbox and applied aria-hidden=\"true\" to the visible heading. This ensures that screen readers recognise only the hidden heading, placing the checkbox under it in the accessibility tree, while the visible heading remains available for sighted users."
                    },
                    {
                        type: "paragraph",
                        text: "I implemented a bypass block in the form of a “Skip to main content” link within the navigation. This allows keyboard users and users of assistive technologies to quickly jump to the main content without having to tab through the entire navigation each time. This improves usability and supports accessibility best practices (Success Criterion 2.4.1: Bypass Blocks)."
                    },
                    {
                        type: "image",
                        src: PrehabPlusA11y6
                    },
                    {
                        type: "paragraph",
                        text: "I added visible focus indicators to all interactive elements to ensure that keyboard users can clearly identify which element is currently focused. This aligns with Success Criterion 2.4.7: Focus Visible."
                    },
                    {
                        type: "paragraph",
                        text: "Additionally, I ensured that the focus indicators meet sufficient colour contrast requirements against both the element and the background in all possible combinations, improving visibility and accessibility for users with low vision."
                    },
                    {
                        type: "image",
                        src: PrehabPlusA11y7
                    },
                    {
                        type: "paragraph",
                        text: "I added aria-labels to the link buttons in the to-do list, including the specific name of each exercise (Success Criterion 2.4.4: Link Purpose (In Context))."
                    },
                    {
                        type: "paragraph",
                        text: "This ensures that screen reader users—who may navigate using a list of links—receive meaningful context instead of repetitive and uninformative text like “Se vejledning, Se vejledning, Se vejledning…”."
                    },
                    {
                        type: "image",
                        src: PrehabPlusA11y8
                    },
                    {
                        type: "paragraph",
                        text: "Since this application is built in React, navigating between pages can sometimes result in the focus landing in the middle of the page, which may disorient users—especially those relying on screen readers or keyboard navigation."
                    },
                    {
                        type: "paragraph",
                        text: "To address this, I implemented a function that automatically sets focus to the <h1> heading when a user navigates to a new page."
                    },
                    {
                        type: "paragraph",
                        text: "To make the <h1> focusable without adding it to the tab order, I used tabIndex={-1}. This enables programmatic focus while preventing users from reaching the element through normal tab navigation."
                    },
                    {
                        type: "image",
                        src: PrehabPlusA11y9
                    },
                    {
                        type: "paragraph",
                        text: "I ensured that the list/calendar view toggle is fully operable for screen reader users. To support WCAG Success Criterion 1.3.1: Info and Relationships, I included a visually hidden heading labelled “Skift visning”, allowing screen reader users to easily locate the section."
                    },
                    {
                        type: "paragraph",
                        text: "The toggle button itself is assigned role=\"switch\" and aria-label=\"Skift visning\", enabling screen readers to accurately convey the function and purpose of the control."
                    },
                    {
                        type: "paragraph",
                        text: "To inform users of the current state after interaction, I implemented an invisible aria-live region directly below the toggle."
                    },
                    {
                        type: "paragraph",
                        text: "This region dynamically announces which view is currently selected once the toggle is activated. By setting aria-live=\"polite\", the screen reader announces the change without interrupting the user’s current task."
                    },
                    {
                        type: "image",
                        src: PrehabPlusA11y10
                    }





                ]
            },
            {
                title: "Finish Product",
                content: [
                    {
                        type: "screenshots",
                        items: [
                            PrehabPlusScreenshot1,
                            PrehabPlusScreenshot2,
                            PrehabPlusScreenshot3,
                            PrehabPlusScreenshot4,
                            PrehabPlusScreenshot5
                        ]
                    },
                    {
                        type: "paragraph",
                        text: "The final product is a web app that provides an overview of the entire prehabilitation process, allowing patients to check off tasks as they complete them. It also includes a chat feature for easy access to support from assigned staff members."
                    },
                    {
                        type: "paragraph",
                        text: "The interface uses real-life elements to feel familiar across generations, and combines images, text, video, and colours to enhance understanding. The app is also designed with accessibility in mind, ensuring it can be used effectively by older users and those with varying levels of digital literacy."
                    }

                ]
            }

        ]
    },
    {
        slug: "coop-management",
        title: "Coop Management (Concept)",
        client: "Coop Danmark",
        clientLogo: Coop,
        image: CoopManagement,
        customSection: "CaseCoopManagement",

        summary: [
            {
                type: "paragraph",
                text: "A web app for Coop supermarkets that manages the sale of discounted bags of surplus food, which was eventually integrated with the inventory management system."
            }
        ],
        problem: [
            {
                type: "paragraph",
                text: "Coop had been relying on a third-party provider—an expensive solution—to sell surplus food as “discount bags”."
            },
            {
                type: "paragraph",
                text: "However, the process of selling those was time-consuming, costly, and required significant effort."
            },
            {
                type: "paragraph",
                text: "They needed a new system that was easier to manage and more cost- and time-efficient."
            }
        ],
        sections: [
            {
                title: "Discover (Research)",
                content: [
                    {
                        type: "paragraph",
                        text: "We began by researching the third-party provider to understand the existing context. Then, we conducted semi-structured interviews with Coop employees, focusing on their current workflow and operational challenges. Rather than asking directly about their desired features, we aimed to deeply understand their day-to-day context before proposing any solutions."
                    },
                    {
                        type: "paragraph",
                        text: "Afterwards, we organised all the findings using an affinity diagram to identify patterns."
                    },
                    {
                        type: "image",
                        src: CoopManagementAffinityDiagram
                    },
                    {
                        type: "paragraph",
                        text: "Based on the insights from the affinity diagram, we created a user persona to clarify and simplify our understanding of the target user, helping us stay focused on who we were designing the solution for."
                    },
                    {
                        type: "image",
                        src: CoopManagementUserPersona
                    },
                    {
                        type: "paragraph",
                        text: "Through this process, we identified key issues:"
                    },
                    {
                        type: "list",
                        items: [
                            "Checking expiring/expired food takes a long time to finish, since it is done manually.",
                            "Employees get frustrated when people reserve discount bags but do not appear on time.",
                            "The third-party app they were using was slow.",
                            "They used to have an app where they could sell discount bags, but since the commission fee was quite expensive, they stopped using it."
                        ]
                    },
                    {
                        type: "paragraph",
                        text: "Based on the challenges identified, we used ‘How Might We’ questions to generate potential solutions."
                    },
                    {
                        type: "image",
                        src: CoopManagementHowMightWe
                    }
                ]
            },
            {
                title: "Define (Concept)",
                content: [
                    {
                        type: "paragraph",
                        text: "Based on the research and mapping activities, the solution would include those features:"
                    },
                    {
                        type: "list",
                        items: [
                            "An inventory management system directly connected to the discount bag sales platform",
                            "The ability to track who placed an order and when they are scheduled to pick it up",
                            "Automated reminders to help prevent no-shows as much as possible."
                        ]
                    }
                ]
            },
            {
                title: "Develop (Prototyping and Testing)",
                content: [
                    {
                        type: "paragraph",
                        text: "Before starting any visual design work, I created a user flow based on the list of requirements, to structure how users would navigate the solution in order to complete their tasks."
                    },
                    {
                        type: "image",
                        src: CoopManagementUserflow
                    },
                    {
                        type: "paragraph",
                        text: "Following the user flow, we developed a low-fidelity prototype and conducted think-aloud testing to assess its usability, particularly for first-time users."
                    },
                    {
                        type: "paragraph",
                        text: "I identified several issues through the testing results and addressed them in the next iteration of the prototype."
                    },
                    {
                        type: "image",
                        src: CoopManagementLoFi
                    },
                    {
                        type: "image",
                        src: CoopManagementLoFiTesting
                    }
                ]
            },
            {
                title: "Deliver (Finish Product)",
                content: [
                    {
                        type: "screenshots",
                        items: [
                            CoopManagementScreenshot1,
                            CoopManagementScreenshot2,
                            CoopManagementScreenshot3,
                            CoopManagementScreenshot4,
                            CoopManagementScreenshot5
                        ]
                    },
                    {
                        type: "paragraph",
                        text: "We created a solution that allows Coop employees to easily manage and post discounted food bags, directly integrated with the inventory management system. The app also sends automated reminders to customers who have reserved a bag, helping reduce no-shows and food waste."
                    }
                ]
            }

        ]
    }

]