import EatingABanana from "./assets/eating-a-banana.svg"
function HaloSection (){

    return(
        // <!-- Halo! -->
    <section className="page-width section-margin-padding flex-layout-container">
      <div>
        <h1 aria-label="Halloh, my name is Có-say">Halo, my name is Kosei</h1>
        <p>I’m an inclusive multimedia designer, intersectionalist, percussionist.</p>
      </div>
      <div>
        <img className="top-image" src={EatingABanana}
          alt="a drawing of myself, eating a banana, wearing a black cap"/>
      </div>

    </section>
    )
}

export default HaloSection;