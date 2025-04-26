import './WarningSection.css';
import Icon from './Icon';
function WarningSection({ children }) {
  return (
    <section className="warning-section" aria-labelledby="info">
      
      <h2 id="info" className="sr-only">Accessibility information</h2>
      <p><Icon icon="Warning" />This page may contain the following non-accessible elements:</p>
      <ul>
      {children}
      </ul>
    </section>
  );
}

export default WarningSection;