import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";

import Home from './views/Home'
import Dashboard from './views/Dashboard'
import Capsule from './views/Capsule'
import Message from './views/Message'
import Patern from './views/Patern'
import Project from './views/Project'
import Layout from "./layout/layout";

import theme from './theme'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/layout" element={<Layout />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="patern" element={<Patern />} />
              <Route path="Capsule" element={<Capsule />} />
              <Route path="Message" element={<Message />} />
              <Route path="Project" element={<Project />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
