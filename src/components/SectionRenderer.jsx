function SectionRenderer ({ section }) {
  
  switch (section.type) {
    case "heading": {
      const Tag = `h${section.level}`;
      return <Tag className="headings">{section.text}</Tag>;
    }
    case "paragraph":
      return <p className="paragraph">{section.text}</p>;
    case "image":
      return <img src={section.src} alt="" />;
    case "list":
      return (
        <ul className="bulleted-list">
          {section.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    // Add more cases as needed
    default:
      return null;
  }
};

export default SectionRenderer;