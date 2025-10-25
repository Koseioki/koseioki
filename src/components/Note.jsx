import './Note.css';
function Note({children}) {
    return (
        <aside className="note-container">
            {children}
        </aside>
    );
}

export default Note;