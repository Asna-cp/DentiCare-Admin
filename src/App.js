import React from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Resort from "./scenes/contacts";
// import Booking from "./scenes/booking";
// import Facilities from "./scenes/facilities";
// import Coupon from "./scenes/coupon";
// import RoomType from "./scenes/roomtype";
// import Geography from "./scenes/geography";
// import Calendar from "./scenes/calendar";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/user" element={<Team />} />
              <Route path="/resort" element={<Resort />} />
              {/* <Route path="/booking" element={<Booking />} /> */}
              {/* <Route path="/facilities" element={<Facilities />} /> */}
              {/* <Route path="/coupon" element={<Coupon />} /> */}
              {/* <Route path="/roomtype" element={<RoomType />} /> */}
              {/* <Route path="/geography" element={<Geography />} /> */}
              {/* <Route path="/calendar" element={<Calendar />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;