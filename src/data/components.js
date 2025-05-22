import DescriptionListWithAccordion from '../assets/description-list-with-accordion.webp';
import ResnponsiveTable from '../assets/responsive-table.webp';
import NewsFeed from '../assets/news-feed.webp';
import TeaserBlock from '../assets/teaser-block.webp';
import FormValidation from '../assets/form-validation.webp';
import ContactCard from '../assets/contact-card.webp';

import Teaserblok1 from '../assets/Teaserblok.001.webp';
import Teaserblok2 from '../assets/Teaserblok.002.webp';
import Teaserblok3 from '../assets/Teaserblok.003.webp';

import Nyhedsfeed1 from '../assets/nyhedsfeed.001.webp';
import Nyhedsfeed2 from '../assets/nyhedsfeed.002.webp';
import Nyhedsfeed3 from '../assets/nyhedsfeed.003.webp';
import Nyhedsfeed4 from '../assets/nyhedsfeed.004.webp';

import Fmi1 from '../assets/fmi1.webp';
import Fmi2 from '../assets/fmi2.webp';
import Fmi3 from '../assets/fmi3.webp';
import Fmi4 from '../assets/fmi4.webp';

import Forms1 from '../assets/Forms.001.webp';
import Forms2 from '../assets/Forms.002.webp';
import Forms3 from '../assets/Forms.003.webp';
import Forms4 from '../assets/Forms.004.webp';
import Forms6 from '../assets/Forms.006.webp';
import Forms7 from '../assets/Forms.007.webp';
import Forms8 from '../assets/Forms.008.webp';
import Forms9 from '../assets/Forms.009.webp';


import ProduktSammenLigneren1 from '../assets/ProduktSammenligneren.001.webp';
import ProduktSammenLigneren2 from '../assets/ProduktSammenligneren.002.webp';
import ProduktSammenLigneren3 from '../assets/ProduktSammenligneren.003.webp';
import ProduktSammenLigneren4 from '../assets/ProduktSammenligneren.004.webp';
import ProduktSammenLigneren5 from '../assets/ProduktSammenligneren.005.webp';
import ProduktSammenLigneren6 from '../assets/ProduktSammenligneren.006.webp';

export const components = [

    {
        slug: "responsive-table",
        title: "Responsive Table",
        image: ResnponsiveTable,
        demo:"https://koseioki.github.io/responsive-table/",
        github:"https://github.com/Koseioki/responsive-table.git",
        description: "A product comparison table designed to be responsive and accessible to screen readers",
        specifications: [ProduktSammenLigneren1, ProduktSammenLigneren2, ProduktSammenLigneren3, ProduktSammenLigneren4, ProduktSammenLigneren5, ProduktSammenLigneren6]
    },
    {
        slug: "news-feed",
        title: "News Feed (Carousel)",
        image: NewsFeed,
        demo:"https://koseioki.github.io/Nyhedsfeed/",
        github:"https://github.com/Koseioki/Nyhedsfeed.git",
        description: "A clickable news feed card with a carousel feature",
        specifications: [Nyhedsfeed1, Nyhedsfeed2, Nyhedsfeed3, Nyhedsfeed4]
    },
    {
        slug: "teaser-block",
        title: "Teaser Block",
        image: TeaserBlock,
        demo:"https://koseioki.github.io/Teaserblok/",
        github:"https://github.com/Koseioki/Teaserblok.git",
        description: "A clickable element with a background image and text overlay",
        specifications: [Teaserblok1, Teaserblok2, Teaserblok3]
    },
    {
        slug: "form-validation",
        title: "Form Validation",
        image: FormValidation,
        demo: "https://koseioki.github.io/form-validation/",
        github:"https://github.com/Koseioki/form-validation.git",
        description: "Normal and error states for different native form elements"
        , specifications: [Forms1, Forms2, Forms3, Forms4, Forms6, Forms7, Forms8, Forms9]
    },
    {
        slug: "contact-card",
        title: "Contact Card",
        image: ContactCard,
        demo: "https://koseioki.github.io/FMI/",
        github:"https://github.com/Koseioki/FMI.git",
        description: "A clickable card containing links",
        specifications: [Fmi1, Fmi2, Fmi3, Fmi4]
    },
        {
        slug: "description-list-with-accordion",
        title: "Description List with Accordion",
        image: DescriptionListWithAccordion,
        demo:"https://koseioki.github.io/datatable-with-accordion/",
        github:"https://github.com/Koseioki/datatable-with-accordion.git",
        description: "An expandable description list"


    }

];