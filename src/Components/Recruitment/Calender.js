import React from "react";
import Calendar from "@ericz1803/react-google-calendar";

const API_KEY = process.env.REACT_APP_API_KEY;

let styles = {
    calendar: {
        borderWidth: "0",
        background: "white",
        margin: "0",
        borderRadius: "15px",
        padding: "10px",
        color: "#123a71",
        fontFamily: "Georgia, 'Times New Roman', Times, serif"
    },

    day: {
        fontSize: "1em"
    },

    today: {
        color: "#123a71",
        border: "2px solid #123a71",
        fontSize: "1.25em"
    },

    eventText: {
        color: "#123a71",
        fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
        fontSize: ".75em"

    },

    eventCircle: {
        color: "#F1AB00"
    },
    
    multiEvent: {
        background: "#123a71",
        color: "rgb(255, 255, 255)"
    },

}

let calendars = [
    { calendarId:  process.env.REACT_APP_CALENDER_KEY}
];

const Calender = () => {
    return (
        <div className="calender"
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center", 
            }}>
            <div style={{ width: "80vw" }}>
                <Calendar apiKey={API_KEY} calendars={calendars} styles={styles} />
            </div>
        </div>
    )
}

export default Calender
