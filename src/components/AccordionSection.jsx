import { useRef, useEffect, useState } from 'react';
import SectionRenderer from './SectionRenderer.jsx';
import './AccordionSection.css';

function AccordionSection({ section, index, open, onToggle }) {
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState(open ? 'none' : '0px');

  useEffect(() => {
    if (open && contentRef.current) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight('0px');
    }
  }, [open, section.content]);

  return (
    <div className="accordion">
      <h3 id={`section-${index}`}>
        <button
          aria-expanded={open}
          aria-controls={`section-content-${index}`}
          onClick={() => onToggle(index)}
        ><span aria-hidden="true"></span>
          {section.title}
        </button>
      </h3>
      <section
        id={`section-content-${index}`}
        aria-labelledby={`section-${index}`}
        className={`accordion-content${open ? ' open' : ''}`}
        ref={contentRef}
        style={{
          maxHeight: open ? maxHeight : '0px',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease'
        }}
        aria-hidden={!open}
      >
        {section.content.map((block, j) => (
          <SectionRenderer key={`block-${index}-${j}`} section={block} />
        ))}
      </section>
    </div>
  );
}

export default AccordionSection;