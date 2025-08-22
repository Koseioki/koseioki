import DescriptionListWithAccordion from '../assets/components/description-list-with-accordion.webp';
import ResnponsiveTable from '../assets/components/responsive-table.webp';
import NewsFeed from '../assets/components/news-feed.webp';
import TeaserBlock from '../assets/components/teaser-block.webp';
import FormValidation from '../assets/components/form-validation.webp';
import ContactCard from '../assets/components/contact-card.webp';

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


import ProduktSammenligneren1 from '../assets/Produktsammenligneren.001.webp';
import ProduktSammenligneren2 from '../assets/Produktsammenligneren.002.webp';
import ProduktSammenligneren3 from '../assets/Produktsammenligneren.003.webp';
import ProduktSammenligneren4 from '../assets/Produktsammenligneren.004.webp';
import ProduktSammenligneren5 from '../assets/Produktsammenligneren.005.webp';
import ProduktSammenligneren6 from '../assets/Produktsammenligneren.006.webp';

export const components = [

    {
        slug: "responsive-table",
        title: "Responsive Table",
        image: ResnponsiveTable,
        demo:"https://koseioki.github.io/responsive-table/",
        github:"https://github.com/Koseioki/responsive-table.git",
        description: "A product comparison table designed to be responsive and accessible to screen readers",
        specifications: [
            {src:ProduktSammenligneren1, alt:"Use a <table> tag for the structure, with <th> elements having appropriate scope attributes for headings, and <td> elements for each cell."},
            {src:ProduktSammenligneren2, alt:"For responsiveness: the <th> elements with scope=\"row\" should disappear on smaller screens, while the table heading with aria-hidden attribute appears directly within the corresponding cell."},
            {src:ProduktSammenligneren3, alt:"The check mark inside a cell must be hidden from screen readers using aria-hidden, and the text “Yes” should be added using a screen reader–only class."},
            {src:ProduktSammenligneren4, alt:"Ensure the check mark has sufficient colour contrast against its background."},
            {src:ProduktSammenligneren5, alt:"The \"read more\" text should include additional information, such as about the Visa card, provided via a screen reader–only class."},
            {src:ProduktSammenligneren6, alt:"The same rule applies to the order card."}
        ]
    },
       {
        slug: "form-validation",
        title: "Form Validation",
        image: FormValidation,
        demo: "https://koseioki.github.io/form-validation/",
        github:"https://github.com/Koseioki/form-validation.git",
        description: "Normal and error states for different native form elements",
        specifications: [
            {src:Forms1, alt:"Error messages must be meaningful and clearly indicate what users should do next. They should be associated with input fields using aria-describedby. The error message is placed below the input field, or if for radio buttons or checkboxes, below the legend."},
            {src:Forms2, alt:"Validation sequence: on form submission, text inputs and textareas change their colour to indicate errors, and the corresponding error messages appear. At the top of the <form>, an invisible list of errors appears with links. Focus then moves to the first item in this list."},
            {src:Forms3, alt:"The error list contains anchor links to each input or fieldset, and the link text must match the corresponding error messages exactly."},
            {src:Forms4, alt:"For required fields, a star icon should appear immediately next to the label. This star icon must be hidden from screen readers, and the input should have the attribute aria-required=\"true\"."},
            {src:Forms6, alt:"Text inputs must have a label, the input element itself, and an associated error message."},
            {src:Forms7, alt:"The same requirements apply to textareas."},
            {src:Forms8, alt:"Radio buttons must be contained within a fieldset with an aria-describedby attribute and have a legend."},
            {src:Forms9, alt:"The same requirements apply to checkboxes."}
        ]
    },
    {
        slug: "news-feed",
        title: "News Feed (Carousel)",
        image: NewsFeed,
        demo:"https://koseioki.github.io/Nyhedsfeed/",
        github:"https://github.com/Koseioki/Nyhedsfeed.git",
        description: "A clickable news feed card with a carousel feature",
        specifications: [
            {src:Nyhedsfeed1, alt:"Structure: The entire card is an <article> element that is clickable using JavaScript. The <a> element is used only for the title, which is also inside an <h3>. When the <a> element is focused or the whole card is hovered over, the <h3> text should display an underline."},
            {src:Nyhedsfeed2, alt:"Visual representation for both hover and focus states."},
            {src:Nyhedsfeed3, alt:"Carousel: Include an aria-live=\"polite\" region that announces updates like “showing items 1 to 2.” Carousel control buttons should have descriptive aria-label attributes, such as “go to next slide.”"},
            {src:Nyhedsfeed4, alt:"DOM order for the carousel should be: the aria-live region, back button, first <article>, second <article>, and then the next button."}
        ]
    },
    {
        slug: "teaser-block",
        title: "Teaser Block",
        image: TeaserBlock,
        demo:"https://koseioki.github.io/Teaserblok/",
        github:"https://github.com/Koseioki/Teaserblok.git",
        description: "A clickable element with a background image and text overlay",
        specifications: [
            {src:Teaserblok1, alt:"The whole card is clickable by using CSS, and <a> is used only for the title link. When <a> is focused, the whole block gets an inset focus indicator."},
            {src:Teaserblok2, alt:"Add a black-transparent gradient on the background to enhance the colour contrast against the text."},
            {src:Teaserblok3, alt:"CSS clickable card trick: add position: relative to the card itself, and use a::after with empty content, position: absolute, and left, top, right, bottom set to 0. This expands the target area of <a> to the whole block."}
        ]
    },
 
    {
        slug: "contact-card",
        title: "Contact Card",
        image: ContactCard,
        demo: "https://koseioki.github.io/FMI/",
        github:"https://github.com/Koseioki/FMI.git",
        description: "A clickable card containing links",
        specifications: [
            {src:Fmi1, alt:"The card list is marked up as a <ul>, with each card as an <li>. The name is an <a>, and the portrait must have an empty alt attribute."},
            {src:Fmi2, alt: "When the whole card is hovered, the <a> receives an underline."},
            {src:Fmi3, alt:"The same applies to the focus indicator."},
            {src:Fmi4, alt:"For an individual card page, the same structure is used, but a <p> is used for the person’s name instead of an <a>."}
        ]
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