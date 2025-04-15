import './GridCard.css';
import {Link} from 'react-router-dom';

function GridCard({ title, description, image, link }) {
    // const handleClick = () => {
    //     window.open(link)
    // }

    return (
        <article className="grid-card transition">
            <div className="grid-title">
 
                <Link to={link}>
                    <h4>{title}</h4>
                </Link>
                <span className="arrows" aria-hidden="true">→</span>
            </div>
            <img className="work-images" src={image} alt="" />
            <p>{description}</p>
        </article>
    )
}

export default GridCard;