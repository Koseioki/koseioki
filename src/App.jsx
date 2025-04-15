import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import Home from './Home'
import DialogPaaTvaers from './DialogPaaTvaers'


const App = () => {
  return (
    // <Router>
    <>
    <ScrollToTop />
      <Routes>
              

        <Route path="/" element={<Home />} />
        <Route path="/dialog-paa-tvaers" element={<DialogPaaTvaers />} />
      </Routes>

    </>
  )
}

export default App