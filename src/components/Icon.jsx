import Email from '../assets/icons/email.svg';
import Github from '../assets/icons/github.svg';
import GithubBlack from '../assets/icons/github-black.svg';
import LinkedIn from '../assets/icons/linkedin.svg';
import File from '../assets/icons/file.svg';
import Headphones from '../assets/icons/headphones.svg';
import Instagram from '../assets/icons/instagram.svg';
import Phone from '../assets/icons/phone.svg';
import Warning from '../assets/icons/warning.svg';
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
    if (icon === 'GithubBlack'){
        icon = GithubBlack;

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
