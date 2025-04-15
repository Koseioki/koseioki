import Header from "./components/Header";
import BreadCrumbs from "./components/BreadCrumbs";
import Footer from "./components/Footer";
import ComponentCard from "./components/ComponentCard";

function AccessibleWebComponents() {
  return (
    <>
    <Header/>
    <BreadCrumbs/>
    <div>
      <h1>Accessible Web Components</h1>
      <p>This is a simple example of a web component that is accessible.</p>
      <ul>
        
        <li><ComponentCard/></li>
        <li><ComponentCard/></li>
        <li><ComponentCard/></li>
      </ul>
    </div>
    <Footer/>
    </>
  );
}

export default AccessibleWebComponents;