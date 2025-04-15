import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import Home from './Home'
import AccessibleWebComponents from './AccessibleWebComponents'

const App = () => {
  return (
    <>
    <ScrollToTop />
      <Routes>
              

        <Route path="/" element={<Home />} />
        <Route path="/accessible-web-components" element={<AccessibleWebComponents/>}/>
      </Routes>

    </>
  )
}

export default App