import PrehabPlus from "../assets/prehab-plus.webp";
import CoopManagement from "../assets/coop-management.webp";

export const uxCases = [

    {
        slug: "prehab-plus",
        title: "Prehab Plus",
        image: PrehabPlus,
        description: "I developed a web app that helps sustain the motivation of colorectal cancer patients in prehabilitation programs by providing an oragnised overview of the treatment journey, a daily to-do list, and direct communication channels with assigned healthcare staff for tangible support.",
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