import Icon from './Icon.jsx';

function Contact() {
  return (
    <section>
      <hr aria-hidden="true" />
      <h2 id="contact" tabIndex={-1} className="headings">Contact</h2>
      <ul>
        <li>
            <a className="plain-link" href="tel:+45 9196 4325">
              <Icon icon="Phone"/>+45 9196 4325
              </a>
        </li>
        <li>
            <a className="plain-link" href="mailto:koseioki1225@gmail.com">
              <Icon icon="Email"/>koseioki1225@gmail.com</a>
        </li>
      </ul>
    </section>
  );
}
export default Contact;