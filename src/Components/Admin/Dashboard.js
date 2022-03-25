import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from "react-bootstrap"
import { db, auth } from "../Donate/firebase.js";
import { collection, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { Coin, Trash } from "react-bootstrap-icons"
import "./Dashboard.css"


const Dashboard = (props) => {

    const [retrieved, setRetrieved] = useState(false);
    // const [solarCells, setSolarCells] = useState([])
    const [takenCells, setTakenCells] = useState([]);
    const [reservedCells, setReservedCells] = useState([]);
    const [trashStatus, setTrashStatus] = useState(false);
    const [coinStatus, setCoinStatus] = useState(false);
    const [update, setUpdate] = useState(false);

    const handleUpdate = () => {
        setUpdate(!update);
    }

    const handleTrash = (cell) => {
        (async () => {
            await deleteDoc(doc(db, "Adopt a Cell", cell.cell));
            setTrashStatus(!trashStatus);
        })();
    }

    const verifyPayment = (cell) => {
        (async () => {
            await updateDoc(doc(db, "Adopt a Cell", cell.cell), {
                verified: true
            });
            setCoinStatus(!coinStatus);
        })();

    }

    const unverifyPayment = (cell) => {
        (async () => {
            await updateDoc(doc(db, "Adopt a Cell", cell.cell), {
                verified: false
            });
            setCoinStatus(!coinStatus);
        })();
    }

    const sortTaken = () => {
        const takenSorted = takenCells.sort((a, b) => {
            return parseInt(b.cell) - parseInt(a.cell);
        });
        setTakenCells(takenSorted);
    };

    const sortReserved = () => {
        const reservedSorted = reservedCells.sort((a, b) => {
            return parseInt(b.cell) - parseInt(a.cell);
        });
        setReservedCells(reservedSorted);
    };

    useEffect(() => {
        setTakenCells([]);
        setReservedCells([]);
        (async () => {
            const querySnapshot = await getDocs(collection(db, "Adopt a Cell"));
            querySnapshot.forEach((doc) => {
                // setSolarCells(solarCells => [...solarCells, doc.data()]);
                if (doc.data().verified == false) {
                    setReservedCells(reservedCells => [...reservedCells, doc.data()]);
                } else if (doc.data().verified == true) {
                    setTakenCells(takenCells => [...takenCells, doc.data()]);
                }
            });



            setRetrieved(true);
        })();
    }, [coinStatus, trashStatus, update])

    if (!retrieved) {
        return (
            <Container>
                <Row>
                    <Col style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <p className="loading">LOADING...</p>
                    </Col>
                </Row>
            </Container>
        )
    } else if (retrieved) {
        return (
            <div>
                <p className='welcome-message'>
                    Hello {props.name}! Welcome to the UCR Solar Car Admin Portal!
                </p>
                <p className='program-name'>Adopt a Cell Program</p>
                <div className="update-button">
                    <button className="update" onClick={handleUpdate}>Update</button>
                </div>
                <Container>
                    <Row>
                        <Col xs={6} style={{ height: "100%", padding: "5px", display: "flex", justifyContent: "center", alignItems: "top", flexDirection: "column" }}>
                            <p className='cells-title'>
                                Reserved Cells
                            </p>
                            <Row style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                                {
                                    reservedCells.map(reservedCell => (
                                        <Row style={{ padding: "8px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                            <Row style={{ border: "2px solid black" }}>
                                                <Col xs={1} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                    <div>
                                                        <p className="cell-number">{reservedCell.cell}</p>
                                                    </div>
                                                </Col>
                                                <Col xs={4} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                    <div>
                                                        <p className="cell-name">{reservedCell.name}</p>
                                                    </div>
                                                </Col>
                                                <Col xs={5} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                    <div>
                                                        <p className="cell-contact">{reservedCell.email}<br />{reservedCell.phone}</p>
                                                    </div>
                                                </Col>
                                                <Col xs={2} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                    <div className='icons'>
                                                        <div onClick={() => verifyPayment(reservedCell)}>
                                                            <Coin className="coin" />
                                                        </div>
                                                        <div onClick={() => handleTrash(reservedCell)}>
                                                            <Trash className="trash" />
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Row>
                                    ))
                                }
                            </Row>
                        </Col>
                        <Col Col xs={6} style={{ height: "100%", padding: "5px", display: "flex", justifyContent: "center", alignItems: "top", flexDirection: "column" }}>
                            <p className='cells-title'>
                                Taken Cells
                            </p>
                            <Row style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                {
                                    takenCells.map(takenCell => (
                                        <Row style={{ padding: "8px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                            <Row style={{ border: "2px solid black" }}>
                                                <Col xs={1} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                    <div>
                                                        <p className="cell-number">{takenCell.cell}</p>
                                                    </div>
                                                </Col>
                                                <Col xs={5} style={{ display: "flex", justifyContent: "left", alignItems: "center" }}>
                                                    <div>
                                                        <p className="cell-name">{takenCell.name}</p>
                                                    </div>
                                                </Col>
                                                <Col xs={4} style={{ display: "flex", justifyContent: "left", alignItems: "center" }}>
                                                    <div>
                                                        <p className="cell-contact">{takenCell.email}<br />{takenCell.phone}</p>
                                                    </div>
                                                </Col>
                                                <Col xs={2} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                    <div className='icons'>
                                                        <div onClick={() => unverifyPayment(takenCell)}>
                                                            <Coin className="coin" />
                                                        </div>
                                                        <div onClick={() => handleTrash(takenCell)}>
                                                            <Trash className="trash" />
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xs={{ offset: 1, span: 3 }}>
                                                    <div>
                                                        {takenCell.username}
                                                    </div>

                                                </Col>

                                            </Row>
                                        </Row>
                                    ))
                                }
                            </Row>
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}

export default Dashboard