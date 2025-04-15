import GridCard from './GridCard';
import PCBear from './assets/pc-bear.svg';
import Escargo from './assets/escargo.svg';
import Dialogpaatvaers from './assets/dialog-paa-tvaers.webp';
import CoopManagement from './assets/coop-management.webp';
import MusicMania from './assets/musicmania.webp';
import MiamiCarnival from './assets/miami-carnival.webp';
import Orchestration from './assets/orchestration.webp';
import Song1 from './assets/song1.webp';


function Works() {
    return (
        <section id="works" className="page-width section-margin-padding">
            <h2>Works</h2>

            {/* <!-- Multimedeia design --> */}
            <section>
                <div className="flex-layout-container reverse-direction">
                    <div>
                        <h3>Multimedia Design</h3>

                        <p>I care about the accessibility and usability of my products. I use various research and testing methods
                            to
                            create better designs for everyone. I am also working to meet WCAG 2.2 compliance in each project.</p>
                    </div>
                    <div>
                        <img className="side-image" id="bear-image" src={PCBear}
                            alt="a drawing of a smily bear using a MacBook" />
                    </div>
                </div>


                <div className="grid">

                    <GridCard
                        title="Dialog på Tværs (ongoing project)"
                        description="Working to adhere to WCAG 2.2 guidelines while maintaining visual aesthetics and the
                overall theme."
                        image={Dialogpaatvaers}
                        link="/dialog-paa-tvaers" />

                    <GridCard
                        title="Coop Management"
                        description="A web app that prevents food waste from supermarkets.
                Focused on user research and testing."
                        image={CoopManagement}
                        link="https://koseioki.dk/coop-management/" />

                    <GridCard
                        title="MusicMania"
                        description="An e-commerce case study of a fictional online store, with a focus on general usability."
                        image={MusicMania}
                        link="https://koseioki.dk/musicmania/" />


                </div>
            </section>
            <hr />
            <section>

                <div className="flex-layout-container">
                    <div>
                        <h3>Musical Performance and Composing</h3>
                        <p>I play percussion and Steelpan and compose music. I also arrange music for wind orchestra in my spare
                            time.
                        </p>

                    </div>
                    <div>
                        <img className="side-image" src={Escargo}
                            alt="a drawing of an escargo wearing a pair of headphones and listening to music" />
                    </div>

                </div>


                <div className="grid">

                    <GridCard
                        title="Miami Carnival Panorama 2022"
                        description="I was invited to perform at Miami Carnival Panorama 2022 as a member of Waiwai Steel Band."
                        image={MiamiCarnival}
                        link="https://wsvn.com/entertainment/deco-drive/japans-waiwai-steel-band-to-show-off-skills-at-miami-carnival-panorama/" />

                    <GridCard
                        title="Orchestration Studies"
                        description="I created several wind orchestra arrangements and scores under the name iwosushi from 2016 to 2018."
                        image={Orchestration}
                        link="https://soundcloud.com/verywosushi" />


                    <GridCard
                        title="Song 1"
                        description="Very very good song by me."
                        image={Song1}
                        link="https://soundcloud.com/koseioki/song1" />

                </div>
            </section>

        </section>
    )
}

export default Works;