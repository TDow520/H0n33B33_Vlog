import React from "react";
import "./HoneeBio.css";
import Copyright from "../Homepage/copyright";
import Honee_Header from "./components/HoneeHeader";
import Honee_Body from "./components/HoneeBody";

function HoneeBio() {
    return (
        <div className="flex flex-col justify-center bg-yellow-50 font-gluten">
            <Honee_Header />
            <div className="mt-[1.5%]">
                <Honee_Body />
            </div>
            <footer className="text-center">
                <Copyright />
            </footer>
        </div>
    );
}

export default HoneeBio;