// App.jsx
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Topbar from './scences/global/Topbar';
import Sidebar from './scences/global/Sidebar';
import Dashboard from './scences/dashbord/index';
import Team from './scences/team/index';
import Invoices from './scences/invoices/index';
import Contacts from './scences/contacts/index';
import Bar from './scences/bar/index';
import Form from './scences/form/index';
import Line from './scences/line/index';
import Pie from './scences/pie/index';
import FAQ from './scences/faq/index';
import Geography from './scences/geography/index';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './themes';
import Calendar from './scences/calendar/calendar';
import { Box } from '@mui/system';

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const contentPadding = isSidebarOpen ? '250px' : '0';

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ display: 'flex' }}>
          <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
          <Box
            component="main"
            className="content"
            sx={{
              flexGrow: 1,
              padding: '20px',
              marginLeft: isSidebarOpen ? '250px' : '0',
              transition: 'margin-left 0.3s ease',
            }}
          >
            <Topbar setIsSidebarOpen={setIsSidebarOpen} />
            <Box sx={{ padding: '20px' }}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/geography" element={<Geography />} />
              </Routes>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
