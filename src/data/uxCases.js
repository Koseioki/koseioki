import PrehabPlus from "../assets/prehab-plus.webp";
import CoopManagement from "../assets/coop-management.webp";

export const uxCases = [

    {
        slug: "prehab-plus",
        title: "Prehab Plus",
        image: PrehabPlus,
        description: "I developed a web app that helps sustain the motivation of colorectal cancer patients in prehabilitation programs by providing an oragnised overview of the treatment journey, a daily to-do list, and direct communication channels with assigned healthcare staff for tangible support.",
        sections: [
            {
                "type": "heading",
                "level": 2,
                "text": "Process"
            },
            {
                "type": "paragraph",
                "text": "More details to follow."
            }

        ]
    },
    {
        slug: "coop-management",
        title: "Coop Management",
        image: CoopManagement,
        description: "Our initial aim was to create an alternative for Too Good To Go, but it ended up an inventory management system designed to reduce food waste at stores.",
        sections: [
            {
                "type": "heading",
                "level": 2,
                "text": "Challenges"
            },
            {
                "type": "paragraph",
                "text": "Too Good to Go allows businesses to sell surplus food in discount bags, aiming to reduce food waste. However, criticism has grown over its profit-driven model and 30% commission fees, potentially promoting overconsumption."
            },
            {
                "type": "paragraph",
                "text": "Our goal was to enhance our web app for B2B clients, engaging their local B2C audience and selling surplus food sustainably."
            },
            {
                "type": "heading",
                "level": 2,
                "text": "Research"
            },
            {
                "type": "paragraph",
                "text": "To better understand our target audience’s needs and how they interact with our solution, we conducted semi-structured interviews with supermarket staff."
            },
            {
                "type": "paragraph",
                "text": "Through this process, we identified key issues:"
            },
            {
                "type": "list",
                "items": [
                    "Manually checking expiring/expired food is time-consuming",
                    "Staff become frustrated when customers reserve ‘Ja Tak tilbud’ bags but do not show up to pick them up, especially in the evenings."
                ]
            },
            {
                "type": "heading",
                "level": 2,
                "text": "Prototyping and testing"
            },
            {
                "type": "paragraph",
                "text": "We researched existing products and their UI patterns to gain inspiration and understand the conventions of food inventory management systems."
            },
            {
                "type": "paragraph",
                "text": "Following this, we developed a prototype and conducted tests, including Think-aloud and Gangster tests, to check the function."
            },
            {
                "type": "heading",
                "level": 2,
                "text": "Outcomes"
            },
            {
                "type": "list",
                "items": [
                    "Identified the root cause of the issue",
                    "Simplified the process by implementing a one-click connection for the bag system",
                    "Implemented reminders to make sure customers show up on time"
                ]
            }
        ]
    }
]