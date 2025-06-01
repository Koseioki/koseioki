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
        title: "Coop Management",
        image: CoopManagement,
        summary: [
            {
                type: "paragraph",
                text: "summary summary We aimed to develop a more sustainable alternative to Too Good To Go for reducing food waste.",

            },
            {
                type: "paragraph",
                text: "The goal was to create a system that helps businesses manage surplus food without encouraging overconsumption."
            }
        ],
        problem: [
            {
                type: "paragraph",
                text: "Too Good to Go allows businesses to sell surplus food, but has been criticized for its profit-driven model and high fees."
            },
            {
                type: "paragraph",
                text: "Our challenge was creating a solution for B2B clients that could genuinely engage local B2C audiences."
            }
        ],
        conclusion: [
            {
                type: "paragraph",
                text: "The resulting system helps businesses track and manage surplus more effectively, without encouraging overconsumption."
            }
        ],
        sections: [
            {
                title: "User Research",
                content: [
                    { type: "paragraph", text: "We conducted interviews with store managers..." },
                    { type: "list", items: ["Lack of time", "Lack of tools", "Limited insights"] }
                ]
            },
            {
                title: "Wireframing",
                content: [
                    { type: "image", src: "/path/to/wireframe.jpg" },
                    { type: "paragraph", text: "Early sketches helped define our IA..." }
                ]
            }
        ]
    }
]