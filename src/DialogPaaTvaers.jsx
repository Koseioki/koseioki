import Accordion from "./Accordion";
import ProjectHeader from "./ProjectHeader";
import Header from "./Header";
import ImageModal from "./ImageModal";

import thumbnail from "./assets/dialog-paa-tvaers.webp";

function DialogPaaTvaers() {
    return (
        <>
            <Header />


            <main id="main-content" className="page-width section-margin-padding" >

                <ProjectHeader
                    title="Dialog på Tværs (ongoing project)"
                    shortDescription="Web accessibility assessment and improvements"
                    longDescription={
                        <>
                            <p>Since taking over the website of Dialog på Tværs from the previous web administrator, I’ve been working to improve its web accessibility.</p>
                            <p>
                                The website is built using WordPress and Elementor, which natively offer many accessible elements. I’ve been focusing on ensuring that these features are properly implemented and function well in terms of accessibility.</p>

                            <p>In this case, I’ve been using WCAG 2.2 Level AA as a reference.</p>
                            <p><a href="https://www.dialogpaatvaers.dk/">Visit Dialog på Tværs (external link)</a></p>
                        </>}
                    img={thumbnail}
                />

                <Accordion
                    summary="DialogPaaTvaers"
                    content="I’m an inclusive multimedia designer, intersectionalist, percussionist." />


<ImageModal/>
            </main>

        </>
    )
}

export default DialogPaaTvaers;