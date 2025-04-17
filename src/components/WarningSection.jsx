import './WarningSection.css';
function WarningSection({ children }) {
  return (
    <section className="warning-section" aria-labelledby="info">
      <h2 id="info" className="sr-only">Accessibility information</h2>
      <p>this page includes non-accessible elements listed below:</p>
      <ul>
      {children}
      </ul>
    </section>
  );
}

export default WarningSection;