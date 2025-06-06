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
                text: "I developed a web app that supports colorectal cancer prehabilitation programmes at Region Sjælland and provides an overview of the entire process.",

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
                            "Exercise is the most important component—once patients start exercising, they gain a sense of autonomy, feel significantly better, and are more likely to complete the program."
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
                        text: "Based on the research and mapping activities, the solution needed to meet the following criteria:"
                    },
                    {
                        type: "list",
                        items: [
                            "Be check-offable to motivate patients to complete their daily tasks",
                            "Provide a clear overview of the entire schedule and process",
                            "Enable easy access to support from assigned staff members"
                        ]
                    }
                ]
            },
            {
                title: "Develop (Prototyping and Testing)",
                content: [
                    {
                        type: "paragraph",
                        text: "Before starting any visual design work, I created a user flow to structure how users would navigate the solution in order to complete their tasks."
                    },
                    {
                        type: "image",
                        src: PrehabPlusUserflow
                    },
                    {
                        type: "paragraph",
                        text: "Following the user flow, I developed a low-fidelity prototype and conducted think-aloud testing to assess its usability, particularly for first-time users."
                    },
                    {
                        type: "image",
                        src: PrehabPlusLoFi
                    },
                    {
                        type: "image",
                        src: PrehabPlusLoFiTesting
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
                text: "A web app for Coop supermarkets that enables the easy and sustainable sale of discounted surplus food."
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
                text: "They needed a new system that was easier to manage, more cost-effective, and practical for everyday use."
            }
        ],
        sections: [
            {
                title: "Discover (Research)",
                content: [
                    {
                        type: "paragraph",
                        text: "We began by researching the third-party provider to understand the existing context. Then, we conducted semi-structured interviews with Coop employees to gain insights into their current workflow and operational challenges."
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
                        text: "After the research, we found out that:"
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
                        text: "Based on the research and mapping activities, the solution needed to meet the following criteria:"
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
                        text: "Before starting any visual design work, we created a user flow to structure how users would navigate the solution in order to complete their tasks."
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
                        text: "The final product is a web app that allows Coop employees to easily manage surplus food sales, providing an efficient way to sell discounted items while reducing waste."
                    }
                ]
            }
          
        ]
    }

]