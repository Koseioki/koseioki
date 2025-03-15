import './Accordion.css';
function Accordion ({ summary, content }) {
//   const [isOpen, setIsOpen] = useState(false);

  return (
    <details>
        <summary><h2>{summary} </h2></summary>
        <div className="content">{content}</div>
    </details>
  );
}

export default Accordion;