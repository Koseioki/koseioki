import './Contact.css'
import Mail from './assets/mail.svg'
import Phone from './assets/phone.svg'
import LinkedIn from './assets/linkedin.png'
import Instagram from './assets/instagram.svg'
import Speed from './assets/speed.svg'

function Contact() {
  return (
    // <!-- Contact -->
    
      <section id="contact" className="page-width section-margin-padding flex-layout-container">
        <div>
          <h2>Contact</h2>
          <ul id="contact-list">

            <li>
              <a className="contact-link transition" href="mailto:koseioki1225@gmail.com"
                aria-label="Email address, koseioki1225@gmail.com">
                <img className="icon" src={Mail} alt="" />
                <span>koseioki1225@gmail.com</span>
              </a>
            </li>

            <li>
              <a className="contact-link transition" href="tel:+4591964325" aria-label="phone number, +45 91 96 43 25">
                <img className="icon" src={Phone} alt="" />
                <span>+45 91 96 43 25</span>
              </a>
            </li>

            <li>
              <a className="contact-link transition" href="https://www.linkedin.com/in/kosei-oki-340129234/"
                aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <img className="icon" src={LinkedIn} alt="" />
                <span>LinkedIn</span>
              </a>
            </li>

            <li>
              <a className="contact-link transition" href="https://www.instagram.com/koseioki1225/" aria-label="Instagram"
                target="_blank" rel="noopener noreferrer">
                <img className="icon" src={Instagram} alt="" />
                <span>Instagram</span>
              </a>
            </li>
          </ul>
        </div>
        <img className="side-image" src={Speed}
          alt="a drawing of a red bird, having an envelope in its beak, the text underneath says, speed" />
      </section>
  )
}

export default Contact