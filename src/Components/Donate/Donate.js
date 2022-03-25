import { React, useState, useEffect } from 'react'
import Header from '../Helper-Components/Header'
import Separator from '../Helper-Components/Separator'
import Header_Photo from "../../Images/TopRender.jpg"
import "./Donate.css"
import { Row, Col, Container } from "react-bootstrap"
import { collection, getDocs, addDoc, setDoc, doc } from "firebase/firestore";
import { db } from "./firebase.js"
import Cell from './Cell'

var takenCells = [];
var reservedCells = [];
const cells = [];

const taken_color = "#123a71";       //blue
const reserved_color = "#f1ab01";    //yellow
const available_color = "#000000";   //black

const Donate = () => {

    const [retrieved, setRetrieved] = useState(false);
    const [checked, setChecked] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [available, setAvailable] = useState(255);
    const [reserved, setReserved] = useState(0);
    const [taken, setTaken] = useState(0);
    const [names, setNames] = useState([]);
    const [user, setUser] = useState({
        cell: "",
        name: "",
        email: "",
        phone: "",
        username: "",
        verified: false
    });

    const { cell, name, email, phone, username, paid } = user;

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleChecked = (e) => {
        setChecked(e.target.checked)
    }

    const handleSubmit = async e => {
        e.preventDefault();
        if (submitted) {
            alert("Error: You have already submitted the form! Please refresh the page to submit another form or contact a lead for more assistance")
            return;
        } if (cell == "" || name == "" || email == "" || phone == "" || username == "") {
            alert("Error: Please fill out all data fields before submitting!")
            return;
        } 
        if (parseInt(cell) < 1 || parseInt(cell) > 255) {
            alert("Error: Please enter a valid cell number between 1 andd 255")
            return;
        } if (parseInt(cell) >= 1 && parseInt(cell) <= 255) {
            for (var i = 0; i < takenCells.length; i++) {
                if (parseInt(cell) == takenCells.at(i)) {
                    alert("Error: Unforutnately, this cell is already taken. Please enter another available cell!")
                    return;
                }
            }
        } 
        if (!email.includes("@") || !email.includes(".")) {
            alert("Error: Please enter a valid email")
            return;
        } if (!checked) {
            alert("Error: Please ensure to donate and check the donation box!")
            return;
        }
        try {
            // const docRef = await addDoc(collection(db, "Adopt a Cell"), user);
            await setDoc(doc(db, "Adopt a Cell", user.cell), user);
            setSubmitted(true);

        } catch (e) {
            alert("API Error: Your form did not submit properly. Please contact ucrsolarcar@gmail.com for more information.")
        }
    }

    useEffect(() => {
        (async () => {
            const querySnapshot = await getDocs(collection(db, "Adopt a Cell"));
            querySnapshot.forEach((doc) => {
                if (doc.data().verified) {
                    takenCells.push(parseInt(doc.data().cell));
                    console.log(doc.data().name)
                    setNames([...names, doc.data().name])
                } else if (doc.data().verified == false) {
                    reservedCells.push(parseInt(doc.data().cell));
                }
            });

            for (var i = 0; i < takenCells.length - 1; i++) {
                var min = i;
                for (var j = i + 1; j < takenCells.length; j++) {
                    if (takenCells.at(min) > takenCells.at(j)) {
                        min = j;
                    }
                }
                var temp = takenCells[i];
                takenCells[i] = takenCells[min];
                takenCells[min] = temp;
            }

            for (var i = 0; i < reservedCells.length - 1; i++) {
                var min = i;
                for (var j = i + 1; j < reservedCells.length; j++) {
                    if (reservedCells.at(min) > reservedCells.at(j)) {
                        min = j;
                    }
                }
                var temp = reservedCells[i];
                reservedCells[i] = reservedCells[min];
                reservedCells[min] = temp;
            }

            var j = 0;
            var k = 0;
            for (var i = 1; i <= 255; i += 1) {
                var color = available_color;
                if (reservedCells.at(k) == i) {
                    color = reserved_color;
                    k++;
                }
                if (takenCells.at(j) == i) {
                    color = taken_color;
                    j++;
                }
                cells.push(
                    <Cell color={color} index={i} key={i} />
                );
            }
            console.log(available, takenCells.length, reservedCells.length)
            setAvailable(available - takenCells.length - reservedCells.length);
            setReserved(reservedCells.length);
            setTaken(takenCells.length);
            setRetrieved(true);
        })();
    }, [])

    if (!retrieved) {
        return (
            <div>
                <Header img={Header_Photo} name="Adopt A Solar Cell Program" offset="50% 50%" />
                <Separator height="5vh" />
                <hr className='t-line' />
                <Separator height="5vh" />
                <Container>
                    <Row>
                        <Col style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <p className="loading">LOADING...</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    } else
        return (
            <div>
                <Header img={Header_Photo} name="Adopt A Cell Program" offset="50% 50%" />
                <Separator height="5vh" />
                <hr className='t-line' />
                <Separator height="5vh" />
                <div className='adopt-text-container'>
                    <p className="adopt-text">
                        Welcome to the Adopt a Cell Program! Here you can adopt one of the solar cells that will be placed on the final solar vehicle.
                        To adopt a solar cell, we kindly request a $10 for every solar cell! You may adopt multiple solar cells! Once you have donated,
                        a member of our team will confirm the donation and you will officially have adopted a solar cell. Please check out the various cells
                        we have available to pick from! You can donate cash to one of the leads or <a href="https://paypal.me/ieeeucr?locale.x=en_USv" target="_blank">Paypal</a>.
                    </p>
                </div>
                <Separator height="4vh" />
                <Container>
                    <form className="adopt-form" onSubmit={handleSubmit}>
                        <Row style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Col xs={4} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><input className="input" type="text" name="cell" placeholder="Cell Number" value={cell} onChange={handleChange} /></Col>
                            <Col xs={4} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><input className="input" type="text" name="name" placeholder="Name to Display" value={name} onChange={handleChange} /></Col>
                            <Col xs={4} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><input className="input" type="text" name="email" placeholder="Email" value={email} onChange={handleChange} /></Col>
                            <Col xs={4} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><input className="input" type="text" name="phone" placeholder="Phone" value={phone} onChange={handleChange} /></Col>
                            <Col xs={4} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><input className="input" type="text" name="username" placeholder="PayPal Username" value={username} onChange={handleChange} /></Col>
                            <Col xs={4} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><input type="checkbox" name="paid" value={checked} onChange={handleChecked}></input>
                                <label htmlFor="paid" className='checked-label'> I have donated!</label><br></br></Col>
                            <Col xs={12} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><div>
                                <button className="submit">Adopt a Cell</button>
                            </div></Col>
                        </Row>
                    </form>
                    {
                        submitted ? <p className="submission">Thank you for adopting! We will confirm your donation soon!</p> : <></>
                    }
                </Container>
                <Separator height="5vh" />
                <Container>
                    <Row style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Col xs={4} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <div className="sample-cell">
                                <div>
                                    <Cell color={available_color} index={available} />
                                </div>
                                <div>
                                    <p>Available Cells</p>
                                </div>
                            </div>

                        </Col>
                        <Col xs={4} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <div className="sample-cell">
                                <div>
                                    <Cell color={reserved_color} index={reserved} />
                                </div>
                                <div>
                                    <p>Reserved Cells</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={4} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <div className="sample-cell">
                                <div>
                                    <Cell color={taken_color} index={taken} />
                                </div>
                                <div>
                                    <p>Taken Cells</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        {
                            cells
                        }
                    </Row>
                </Container>
                <Container>
                    <p className="names-text">A Huge Thank You to Our Current Adopters</p>
                    {
                        console.log("name", names)
                    }
                    <Row style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        {
                            names.map((name) => (
                                <Col xs = {3} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <p className="name">{name}</p>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </div>
        )
}

export default Donate