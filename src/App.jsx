import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import Home from './Home'
import AccessibleWebComponents from './AccessibleWebComponents'
import ComponentDetail from './ComponentDetail'
import ConcertBandScores from './ConcertBandScores'
import ScoreDetail from './ScoreDetail'


const App = () => {
  return (
    <>
    <ScrollToTop />
      <Routes>
              

        <Route path="/" element={<Home />} />
        <Route path="/accessible-web-components" element={<AccessibleWebComponents/>}/>
      <Route path="/accessible-web-components/:slug" element={<ComponentDetail />} />
      <Route path="/concert-band-scores" element={<ConcertBandScores />} />
      <Route path="/concert-band-scores/:slug" element={<ScoreDetail />} />
      </Routes>

    </>
  )
}

export default App