import './GridCard.css';


function GridCard({ title, description, image, link }) {
    const handleClick = () => {
        window.open(link)
    }

    return (
        <article className="grid-card transition" onClick={handleClick}>
            <div className="grid-title">
                <a href={link} >
                    <h4>{title}</h4>
                </a>
                <span className="arrows" aria-hidden="true">→</span>
            </div>
            <img className="work-images" src={image} alt="" />
            <p>{description}</p>
        </article>
    )
}

export default GridCard;