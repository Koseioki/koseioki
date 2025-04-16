import Kosei from '../assets/kosei.webp';
import './Profile.css';
function Profile() {
  return (
    <section id="profile">
      <div>
        <img className="profile-picture" src={Kosei} alt="" />
      </div>
      <div>
        <h1>Kosei Oki</h1>
        <p>I’m an inclusive digital product designer, intersectionalist, percussionist.</p>
          <p>I also like fruits.</p>
        <ul>
          <li><a href="https://www.instagram.com/koseioki1225/">Instagram</a></li>
          <li><a href="https://www.linkedin.com/in/kosei-oki-340129234/">LinkedIn</a></li>
        </ul>
      </div>
    </section>
  );
}
export default Profile;