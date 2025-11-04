import './DataAccordion.css';
function DataAccordion({ children, title }) {
  return (
    <details className="data-accordion">
      <summary className="data-accordion-title">Details of {title}</summary>
      <div className="data-accordion-content">{children}</div>
    </details>
  );
}

export default DataAccordion;
