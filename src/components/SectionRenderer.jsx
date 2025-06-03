
function SectionRenderer({ section }) {

  switch (section.type) {
    case "heading": {
      const Tag = `h${section.level}`;
      return <Tag className="headings">{section.text}</Tag>;
    }
    case "paragraph":
      return <p className="paragraph">{section.text}</p>;
    case "image":
      return (
        // <a href={section.src} aria-label="Open image">
          <img src={section.src} alt="" aria-hidden="true"  className="image-link" />
        // </a>
      );
    case "screenshots":
      return (
        <div className="product-screenshots">
          {section.items.map((item, i) => (
            <img key={i} src={item} className="product-screenshot" alt="" aria-hidden="true" />
          ))}
        </div>
      );
    case "list":
      return (
        <ul className="bulleted-list">
          {section.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    default:
      return null;
  }
};

export default SectionRenderer;