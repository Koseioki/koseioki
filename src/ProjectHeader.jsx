import './ProjectHeader.css';
function ProjectHeader({ title, shortDescription, longDescription, img }) {
    return (
        <div>
            <h1>{title}</h1>
            <p>{shortDescription}</p>
            <div className="project-header-container">
                <div>
                    <h2>Project Description</h2>
                    <div>{longDescription}</div>
                </div>
                <div>
                    <img alt="" src={img} />
                </div>
            </div>
        </div>
    );
}

export default ProjectHeader;