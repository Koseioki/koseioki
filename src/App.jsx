import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import DialogPaaTvaers from './DialogPaaTvaers'


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/dialog-paa-tvaers" element={<DialogPaaTvaers />} />
    </Routes>
  )
}

export default App