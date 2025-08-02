import PrehabPlus from "../assets/prehab-plus/prehab-plus.webp";
import RegionSjaelland from "../assets/prehab-plus/region-sjaelland.webp";
import CoopManagement from "../assets/coop-management.webp";
import Coop from "../assets/coop-management/coop.webp";
import FryzeriumLogo from "../assets/fryzerium/fryzerium-2-logo.webp";
import Fryzerium2 from "../assets/fryzerium/fryzerium-2.webp";


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
        ]
    },
    {
        slug: "fryzerium-2.0",
        title: "Fryzerium 2.0 Joanna & Łukasz",
        client: "Fryzerium 2.0 Joanna & Łukasz",
        clientLogo: FryzeriumLogo,
        image: Fryzerium2,
        customSection: "CaseFryzerium",
        summary: [
            {
                type: "paragraph",
                text: "Summary here"
            }
        ]
    }

]