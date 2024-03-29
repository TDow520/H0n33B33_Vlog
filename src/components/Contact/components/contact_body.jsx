import React, { useEffect } from "react";
import Copyright from "../../Homepage/copyright";
import { useState } from "react";
import L from "leaflet"; // Import Leaflet library
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import { MapContainer, TileLayer } from "react-leaflet"; // Import React-Leaflet components
import { Icon } from "leaflet";

// Define a custom icon for the marker
const markerIcon = new Icon({
    iconUrl: "marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

export default function ContactBody() {
    const [name, setName] = useState(["HoneeBee", "Butterfly"]);
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        const map = L.map("map").setView([32.331528, -86.243504], 18);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution:
                'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
            maxZoom: 20
        }).addTo(map);

        L.marker([32.331528, -86.243504] ).addTo(map);

        return () => {
            // Clean up the map when component unmounts
            map.remove();
        };
    }, []);

    function handleEmail(event) {
        const name = event.target.value;
        if (name === "HoneeBee") {
            setEmail("courtneedow@gmail.com");
        } else if (name === "Butterfly") {
            setEmail("writatee@gmail.com");
        }
    }

    function handleSubjectChange(event) {
        setSubject(event.target.value);
    }

    function handleMessageChange(event) {
        setMessage(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Email sent successfully");
        // Clear the form fields
        setName("");
        setSubject("");
        setMessage("");
    }

    return (
        <div>
            <div className="flex flex-col border border-black pb-[15%]">
                <div className="flex ml-[15%] text-2xl w-[75%]">
                    Thank you for visting our Forest. We are happy that you
                    stopped by. If you have any thoughts that you would like to
                    leave with us please drop a message to either Butterfly or
                    myself. We look forward to hearing from you all and we hope
                    that you enjoy your stay.
                    <br />
                    <br />
                    P.S. Stay away from the butterflies unless you have a wish
                    to be eaten.
                    <br />
                    <br />
                </div>
                {/* create a form that will email honeebee or butterfly */}
                {/* insert a dropdown with HoneeBee or Butterfly as the options */}
                <div
                    id="map"
                    className="flex flex-col justify-center mx-[700px] h-[250px] my-[15px]"
                ></div>

                <form
                    className="flex flex-col justify-center w-[40%] p-2 mx-[32%] bg-slate-400 rounded-lg shadow-lg shadow-slate-500"
                    onSubmit={handleSubmit}
                >
                    <div>
                        <select
                            className="my-[1.5%] bg-slate-300 ml-2 w-[96.5%] rounded-md"
                            onChange={handleEmail}
                        >
                            <option disabled selected>
                                Select the person you would like to contact
                            </option>
                            {name.map((name) => (
                                <option key={name} value={name}>
                                    {name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="User Name"
                        className="m-[2%]"
                    />

                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="User Email"
                        className="m-[2%]"
                    />
                    <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        className="m-[2%]"
                        value={subject}
                        onChange={handleSubjectChange}
                    />

                    <textarea
                        name="message"
                        id="message"
                        className="m-[2%]"
                        placeholder="Message"
                        rows="15"
                        value={message}
                        onChange={handleMessageChange}
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-slate-300 w-[15%] items-center rounded-md mx-[42.5%] mb-[2.5%]"
                    >
                        <a
                            href={`mailto:${email}?subject:${subject}&body:${message}`}
                        ></a>
                        Submit
                    </button>
                </form>
            </div>
            <div className="flex justify-center">
                <Copyright />
            </div>
        </div>
    );
}
