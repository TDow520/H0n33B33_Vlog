import React from "react";
import "./home.css";
import Nav from "./nav.jsx";
import Main from "./main_body.jsx";
import Summary from "./summary.jsx";
import Copyright from "./copyright";

function Home() {
    return (
        <>
            <div className="bg-gradient-to-t from-white from-10% to-black ">
                <Nav />
                <div className="flex justify-evenly max-h-42 font-rock_salt ">
                    <img
                        src="../images/Warrior_HoneeBee.JPEG"
                        className="App-logo mb-3.5 w-1/5 opacity-75"
                        alt="HoneeBee_Warrior"
                    />
                    <h1 className="font-semibold 2xl:text-5xl text-slate-100">
                        Butterfly <br /><br />
                        and <br /><br />
                        Bee
                    </h1>
                    <img
                        src="../images/Butterfly_majestic.JPEG"
                        className="App-logo mb-3.5 w-1/5 opacity-75 "
                        alt="Butterfly_majestic"
                    />
                </div>
            </div>

            <Main />

            <Summary />
            <footer className="text-center m-10">
                <Copyright />
            </footer>
        </>
    );
}

export default Home;
