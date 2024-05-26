import './App.css';
import React, { useMemo } from 'react';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { Box, CssBaseline } from '@mui/material';
import { themeSettings } from './theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./components/navbar"; 
import Dashboard from './scenes/dashboard';

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box width={"100%"} height={"100%"} padding={"10px 15px"}>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Dashboard/>} />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
