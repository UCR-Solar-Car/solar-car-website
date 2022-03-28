import React, { useEffect, useState } from 'react'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, db } from "../Donate/firebase.js";
import Header from '../Helper-Components/Header';
import Photo from "../../Images/GroupPhoto_1.jpg"
import { collection, getDocs } from "firebase/firestore";
import Dashboard from './Dashboard.js';
import Separator from '../Helper-Components/Separator.js';
import { Container, Row, Col } from "react-bootstrap"
import "./Admin.css"

const Admin = () => {
    const [emails, setEmails] = useState([])
    const [email, setEmail] = useState("");
    const [verified, setVerified] = useState(false);
    const [name, setName] = useState("");
    const [retrieved, setRetrieved] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    const signIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                var address = result.user.email;
                var display = result.user.displayName;
                setEmail(address);
                setName(display)
                setLoggedIn(true);
                for (var i = 0; i < emails.length; i++) {
                    if (emails[i] === email) {
                        setVerified(true);
                        return;
                    }
                }
            }).catch((error) => {
                alert(error)
            });
    }

    useEffect(() => {
        (async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "Authorized Admins"));
                querySnapshot.forEach((doc) => {
                    setEmails(emails => [...emails, doc.data().email])
                });
            } catch (error) {
                alert(error)
            }

        })();
        setRetrieved(true);
    }, [])

    useEffect(() => {
        for (var i = 0; i < emails.length; i++) {
            if (emails[i] === email) {
                setVerified(true);
                return;
            }
        }
    }, [loggedIn])

    if (!retrieved) {
        return (
            <div>
                <Header img={Photo} name="Admin Portal" offset="50% 45%" />
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
    } else {
        if (verified) {
            return (
                <div>
                    <Header img={Photo} name="Admin Portal" offset="50% 45%" />
                    <Separator height="5vh" />
                    <Dashboard name={name} />
                </div>
            )
        } else {
            return (
                <div>
                    <Header img={Photo} name="Admin Portal" offset="50% 45%" />
                    <Separator height="5vh" />
                    <div className='admin-login'>
                        <p className="loading">Please login with a UCR verified email</p>
                        <button className="login" onClick={signIn}>Login</button>
                    </div>
                </div>
            )
        }
    }
}

export default Admin