import React from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PlazaAlbum from "./pages/PlazaAlbum";
import UmeaAlbum from "./pages/UmeaAlbum";

import MuriFasnachtAlbum from "./pages/MuriFasnachtAlbum";
import "./App.css";
import PTB13Album from "./pages/PTB13Album";


const App = () => {
  return (
    <BrowserRouter basename="/">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plaza_25_01_25" element={<PlazaAlbum />} />
        <Route path="/umea_31_12_24" element={<UmeaAlbum />} />
        <Route path="/muri-fasnacht" element={<MuriFasnachtAlbum />} />
          <Route path="/ptb13" element={<PTB13Album />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
