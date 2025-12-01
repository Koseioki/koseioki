import './Note.css';
function Note({children, id}) {
    return (
        <section aria-labelledby={id} className="note-container">
            {children}
        </section>
    );
}

export default Note;