import './Accordion.css';
function Accordion ({ summary, content }) {
//   const [isOpen, setIsOpen] = useState(false);

  return (
    <details>
        <summary>{summary}</summary>
        <div className="content">{content}</div>
    </details>
  );
}

export default Accordion;