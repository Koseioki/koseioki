import './ImageModal.css';
function ImageModal() {
    return (
        <>

            {/* open the dialog */}
            <button className="modal-open-button" onClick={() => document.querySelector('dialog').showModal()}>
                Open Image Modal
                </button>

            {/* dialog element */}
            <dialog className="image-modal">
                {/* <div className="modal"> */}
                    <h2>Image Modal</h2>
                    <p>This is a modal for displaying images.</p>
                    <button className="modal-close-button" onClick={() => document.querySelector('dialog').close()}>Close</button>
                {/* </div> */}
            </dialog>
        </>
    )
}

export default ImageModal;