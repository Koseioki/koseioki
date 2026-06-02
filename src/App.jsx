import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import Home from './Home'
import Accessibility from './Accessibility'
import Privacy from './Privacy'
import UXDesignCases from './UXDesignCases'
import CaseDetail from './CaseDetail'
import Header from './components/Header'
import Footer from './components/Footer'



const App = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="accessibility" element={<Accessibility />} />
        <Route path="/privacy" element={<Privacy />} />
           <Route path="/ux-design-cases" element={<UXDesignCases />} />
        <Route path="/ux-design-cases/:slug" element={<CaseDetail />} />
        <Route path="*" element={<Home />} />
       </Routes>
      <Footer />

    </>
  )
}

export default App