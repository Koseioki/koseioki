import './Pronunciation.css';
import Icon from './Icon.jsx';

function Pronunciation() {

    return (
        <aside className="pronunciation-container">
            <div>
                <p>
                    Pronounced as
                </p>

                <p className="pronunciation-ipa">
                    /ˈkoʊ.seɪ/
                </p>
            </div>
            <button className="primary-button" onClick={() => new Audio('/path/to/pronunciation.mp3').play()}>
                <Icon icon="Speaker" color="white" />
                <span aria-hidden="true">Listen</span>
                <span className="sr-only">Listen to pronunciation</span>

            </button>




        </aside>

    );
}
export default Pronunciation;