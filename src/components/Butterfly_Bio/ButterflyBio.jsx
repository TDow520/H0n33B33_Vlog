import React from "react";
import "./Butterfly.css";
import Butterfly_Header from "./components/ButterflyHeader";
import Butterfly_Body from "./components/ButterflyBody";
import Copyright from "../Homepage/copyright";

function ButterflyBio() {
    return (
        <div className="flex flex-col justify-center bg-green-200 font-rock_salt">
                <Butterfly_Header />
            <div className="mt-[1.5%]">
                <Butterfly_Body />
            </div>
            <footer className="text-center">
                <Copyright />
            </footer>
        </div>
    );
}

export default ButterflyBio;
