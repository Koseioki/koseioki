import PrehabPlus from "../assets/prehab-plus/prehab-plus.webp";
import PrehabPlusAidpro from "../assets/prehab-plus/aidpro.webp";
import PrehabPlusAffinityDiagram from "../assets/prehab-plus/affinity-diagram.webp";
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
                title: "Discover (Research)",
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
                title: "Define (Concept)",
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
                title: "Develop (Prototyping and Testing)",
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
                        text: "Based on user flow, I developed a Lo-Fi prototype and conducted think-aloud testing to assess its usability, particularly for first-time users."
                    },
                    {
                        type: "image",
                        src: PrehabPlusLoFi
                    },
                    {
                        type: "image",
                        src: PrehabPlusLoFiTesting
                    },
                    {
                        type: "paragraph",
                        text: "I identified several issues through the testing results and addressed them in the next iteration of the prototype."
                    }
                ]
            },
            {
                title: "Deliver (Finish Product)",
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