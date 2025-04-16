import './WarningSection.css';
function WarningSection({ children }) {
  return (
    <section className="warning-section" aria-labelledby="info">
      <h2 id="info">Info</h2>
      <p>this page includes non-accessible elements listed below:</p>
      <ul>
      {children}
      </ul>
    </section>
  );
}

export default WarningSection;