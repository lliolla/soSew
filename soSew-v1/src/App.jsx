import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from '../src/views/Home'
import Dashboard from '../src/views/Dashboard'

import Pattern from '../src/views/Home'



function App() {
 
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pattern" element={<Pattern/>   } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
