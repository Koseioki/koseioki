import Email from '../assets/email.svg';
import Github from '../assets/github.svg';
import LinkedIn from '../assets/linkedin.svg';
import File from '../assets/file.svg';
import Headphones from '../assets/headphones.svg';
import Instagram from '../assets/instagram.svg';
import Phone from '../assets/phone.svg';
import Warning from '../assets/warning.svg';
import './Icon.css';

function Icon({ icon }) {
    if (icon === 'Warning') {
        icon = Warning;
    }
    if (icon === 'Email') {
        icon = Email;
    }
    if (icon === 'Github') {
        icon = Github;
    }
    if (icon === 'LinkedIn') {
        icon = LinkedIn;
    }
    if (icon === 'File') {
        icon = File;
    }
    if (icon === 'Headphones') {
        icon = Headphones;
    }
    if (icon === 'Instagram') {
        icon = Instagram;
    }
    if (icon === 'Phone') {
        icon = Phone;
    }

    return (
        <img src={icon} alt="" aria-hidden="true" className="icon" />
    );
}

export default Icon;
