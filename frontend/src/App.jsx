import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useMemo } from "react";
import { useSelector } from "react-redux";

import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

import Home from './views/Home'
import Dashboard from './views/Dashboard'
import Capsule from './views/Capsule'
import Message from './views/Message'
import Patern from './views/Patern'
import Project from './views/Project'
import Layout from "./views/Layout";

import { themeSettings } from "./theme";


function App() {
    const mode = useSelector((state) => state.global.mode);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <BrowserRouter >
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate  to="/dashboard" replace />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="patern" element={<Patern />} />
              <Route path="Capsule" element={<Capsule />} />
              <Route path="Message" element={<Message />} />
              <Route path="Project" element={<Project />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider> 
    </div>
  );
}

export default App;
