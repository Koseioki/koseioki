import Accordion from "./Accordion";
import Header from "./Header";

function DialogPaaTvaers(){
    return(
        <>
        <Header />


        <main id="main-content" className="page-width section-margin-padding" >
       
            <h1>DialogPaaTvaers</h1>
            <Accordion 
            summary="DialogPaaTvaers" 
            content="I’m an inclusive multimedia designer, intersectionalist, percussionist."/>
            </main>
        
        </>
    )
}

export default DialogPaaTvaers;