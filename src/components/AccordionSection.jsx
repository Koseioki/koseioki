// import { useRef, useEffect, useState, Children, useContext, createContext } from 'react';
import './AccordionSection.css';

function AccordionSection({ children, title }) {
  return (
    <li className="accordion">
      <details>
      <summary>
        <h3>{title}</h3>
        <span aria-hidden="true"></span>
        </summary>
      <div className="accordion-content">
        {children}
      </div>
      </details>
    </li>
  );
}


export default AccordionSection;

// // Create context for accordion state
// const AccordionContext = createContext();

// // function AccordionSection({ section, index, open, onToggle }) {
// function AccordionSection({ children, title, index }) {
//   const { openSections, toggleSection } = useContext(AccordionContext);
//   const open = openSections.includes(index);

//   const contentRef = useRef(null);
//   const [maxHeight, setMaxHeight] = useState(open ? 'none' : '0px');

//   useEffect(() => {
//     if (open && contentRef.current) {
//       setMaxHeight(`${contentRef.current.scrollHeight}px`);
//     } else {
//       setMaxHeight('0px');
//     }
//   }, [open, children]);

//   return (
//     <li className="accordion">
//       <h3 id={`section-${index}`}>
//         <button
//           aria-expanded={open}
//           aria-controls={`section-content-${index}`}
//           onClick={() => toggleSection(index)}
//         ><span aria-hidden="true"></span>
//           {title}
//         </button>
//       </h3>
//       <section
//         id={`section-content-${index}`}
//         aria-labelledby={`section-${index}`}
//         className={`accordion-content${open ? ' open' : ''}`}
//         ref={contentRef}
//         style={{
//           maxHeight: open ? maxHeight : '0px',
//           overflow: 'hidden',
//           transition: 'max-height 0.3s ease'
//         }}
//         aria-hidden={!open}
//       >
//         {children}
//       </section>
//     </li>
 
//   );
// }

// // AccordionProvider component to manage state
// export function AccordionProvider({ children }) {
//   const [openSections, setOpenSections] = useState([]);

//   const toggleSection = (idx) => {
//     setOpenSections(prev =>
//       prev.includes(idx)
//         ? prev.filter(i => i !== idx)
//         : [...prev, idx]
//     );
//   };

//   return (
//     <AccordionContext.Provider value={{ openSections, toggleSection }}>
//       {children}
//     </AccordionContext.Provider>
//   );
// }

// export default AccordionSection;