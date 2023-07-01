import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from '../src/views/Home'
import Dashboard from '../src/views/Dashboard'

import Pattern from '../src/views/Home'
// import { ThemeProvider } from "@mui/material";
// import theme from './theme'


function App() {
 
  return (
    <>
    {/* <ThemeProvider theme={theme}  > */}
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pattern" element={<Pattern/>   } />
        </Routes>
      </BrowserRouter>
      {/* </ThemeProvider> */}
    </>
  )
}

export default App
