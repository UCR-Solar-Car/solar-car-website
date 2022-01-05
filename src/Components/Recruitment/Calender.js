import React from "react";
import Calendar from "@ericz1803/react-google-calendar";

const API_KEY = "AIzaSyCtUbyy00Q3FWVrYm_h2N3YKMdexhGglgE";

let styles = {
    calendar: {
        borderWidth: "0",
        background: "white",
        margin: "0",
        borderRadius: "15px",
        padding: "10px",
        color: "#003066",
        fontFamily: "'IBM Plex Serif', serif",
    },

    day: {
        fontSize: "1em"
    },

    today: {
        color: "#003066",
        border: "2px solid #003066",
        fontSize: "1.25em"
    },

    eventText: {
        color: "#003066",
        fontFamily: "'Mukta', sans-serif"        
    },

    eventCircle: {
        color: "#F1AB00"
    },
    
    multiEvent: {
        background: "#003066",
        color: "rgb(255, 255, 255)"
    },

}

let calendars = [
    { calendarId: "nt3r2mrajrpiicfrd2u1lg4jh8@group.calendar.google.com" }

];


const Calender = () => {
    return (
        <div className="calender"
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center", 
            }}>
            <div style={{ width: "90vw" }}>
                <Calendar apiKey={API_KEY} calendars={calendars} styles={styles} />
            </div>
        </div>
    )
}

export default Calender
