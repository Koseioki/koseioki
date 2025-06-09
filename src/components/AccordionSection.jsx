import SectionRenderer from './SectionRenderer.jsx';
import './AccordionSection.css';

function AccordionSection({ section, index, open, onToggle }) {
  return (
    <div className="accordion">
      <h3 id={`section-${index}`}>
        <button
          aria-expanded={open}
          aria-controls={`section-content-${index}`}
          onClick={() => onToggle(index)}
          className="accordion-btn"
        ><span aria-hidden="true"></span>
          {section.title}
        </button>
      </h3>
      {open && (
        <section
          id={`section-content-${index}`}
          aria-labelledby={`section-${index}`}
          className="accordion-content"
        >
          {section.content.map((block, j) => (
            <SectionRenderer key={`block-${index}-${j}`} section={block} />
          ))}
        </section>
      )}
    </div>
  );
}

export default AccordionSection;