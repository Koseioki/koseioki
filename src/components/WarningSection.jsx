import './WarningSection.css';
import Icon from './Icon';
function WarningSection({ children }) {
  return (
    <section className="warning-section" aria-labelledby="info">
      
      <h2 id="info" className="sr-only">Accessibility information</h2>
      <p><Icon icon="Warning" />This page contains the following non-accessible elements:</p>
      <ul className="bulleted-list">
      {children}
      </ul>
      <p>I'm currently working on fixing these issues to ensure an equivalent experience for all!</p>
    </section>
  );
}

export default WarningSection;