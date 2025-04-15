
import WorkCard from './WorkCard';
function Works() {
  return (
    <section id="works">
      <h2>Works</h2>
      <ul className="work-card-list">
        <li>
            <WorkCard link="/accessible-web-components"title="Accessible Web Components" description="I made accessible web components for local banks, at Bankdata"/>
        </li>
        <li>
        <WorkCard title="Concert Band Scores" description="I arranged some music"/>
        </li>
      </ul>

    </section>
  );
}
export default Works;