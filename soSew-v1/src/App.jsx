import { BrowserRouter, Routes, Route , } from "react-router-dom";
import { ThemeProvider } from "@mui/material";


import Home from '../src/views/Home'
import Dashboard from '../src/views/Dashboard'
import Capsule from '../src/views/Capsule'
import Message from '../src/views/Message'
import Patern from '../src/views/Patern'
import Project from '../src/views/Project'


import theme from './theme'
import Layout from "./layout/layout";


function App() {
 
  return (
    <>
     <ThemeProvider theme={theme}  >
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/layout" element={<Layout />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/patern" element={<Patern/>   } />
          <Route path="/Capsule" element={<Capsule/>   } />
          <Route path="/Message" element={<Message/>   } />
          <Route path="/Project" element={<Project/>   } />
        </Routes>
      </BrowserRouter>
     </ThemeProvider> *
    </>
  )
}

export default App
