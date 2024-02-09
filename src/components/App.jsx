import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // Import HashRouter instead of BrowserRouter
import "../css/App.css";
import Home from "./Homepage/home.jsx";
import VideoLib from "./Library_page/vid_lib.jsx";
import HoneeBio from "./HoneeBee_Bio/HoneeBio.jsx";
import ButterflyBio from "./Butterfly_Bio/ButterflyBio.jsx";
import Contact from "./Contact/contact_main";

function App() {
    return (
        <Router>
            {" "}
            {/* Use HashRouter instead of BrowserRouter */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/library" element={<VideoLib />} />
                <Route path="/honee" element={<HoneeBio />} />
                <Route path="/butterfly" element={<ButterflyBio />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;
