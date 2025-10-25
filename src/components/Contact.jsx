import Icon from './Icon.jsx';

function Contact() {
  return (
    <section>
      <hr aria-hidden="true" />
      <h2 id="contact" tabIndex={-1} className="headings">Contact</h2>
      <ul className="link-list paragraph">
        <li>
            <a className="plain-link" href="tel:+45 9196 4325">
              <Icon icon="Phone" fontSize="p"/>+45 9196 4325
              </a>
        </li>
        <li>
            <a className="plain-link" href="mailto:koseioki1225@gmail.com">
              <Icon icon="Email" fontSize="p"/>koseioki1225@gmail.com</a>
        </li>
      </ul>
       <h3 className="headings">Social Media</h3>
        <ul className="link-list paragraph">

          <li>
            <a className="plain-link" href="https://www.linkedin.com/in/kosei-oki-340129234/">
              <Icon icon="LinkedIn" fontSize="p"/>LinkedIn
            </a>
          </li>
          <li>
            <a className="plain-link" href="https://github.com/Koseioki">
              <Icon icon="Github" fontSize="p"/>GitHub</a>
          </li>
          <li>
            <a className="plain-link" href="https://www.instagram.com/koseioki1225/">
              <Icon icon="Instagram" fontSize="p"/>Instagram
            </a>
          </li>
        </ul>
    </section>
  );
}
export default Contact;