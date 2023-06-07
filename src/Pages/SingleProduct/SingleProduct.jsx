import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {Button, Col, Row} from "react-bootstrap";
import ReactHtmlParser from 'react-html-parser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {Helmet} from "react-helmet";

const SingleProduct = () => {
    const [movie, setMovie] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const url = location.state?.from || '/';
    if(!location.state.from){
        navigate('/');
    }

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMovie(data))
    }, [])

    const handelBooking = e => {
        e.preventDefault();
        const form = e.target;
        const movieName = form.movieName.value;
        const personName = form.personName.value;
        const totalSit = form.totalSit.value;
        const formData = {
            movieName,
            personName,
            totalSit
        }

        let item = [];
        const getStorageItem = JSON.parse(localStorage.getItem('booked_movie'));

        if(getStorageItem)
        {
            item = [...getStorageItem];
        }
        item.push(formData)
        const finalResult = JSON.stringify(item);
        localStorage.setItem('booked_movie', finalResult);
        setShow(false);
        toast("Item Added");
    }

    return (
        <>
            <ToastContainer />
            <Helmet>
                <title>CineFlix || single movie</title>
            </Helmet>
            <div className="mt-4 border" style={{maxWidth: "800px", margin: "auto"}}>
                <Row>

                    <Col sm={5}>
                        <div className="d-flex align-items-center justify-content-center">
                            <img style={{height: "400px", width: "320px"}} src={movie?.image?.original} />
                        </div>
                    </Col>
                    <Col sm={7}>
                        <div className="p-3">
                            <div className="d-flex justify-content-between">
                                <p>Time: {movie?.schedule?.time}</p>
                                <p>Day: {movie?.schedule?.days[0]}</p>
                            </div>
                            <h2 className="text-center fw-bold">{movie?.name}</h2>

                            <div className="d-flex justify-content-between">
                                <p>Status: {movie?.status}</p>
                                <p>Runtime: {movie?.runtime}</p>
                                <p>Ended: {movie?.ended}</p>
                            </div>
                            <div>{ReactHtmlParser(movie?.summary)}</div>
                            <div>
                                <Button onClick={handleShow} className="w-100" variant="primary">Book Now</Button>
                            </div>
                        </div>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Modal heading</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form onSubmit={handelBooking}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Movie Name</Form.Label>
                                        <Form.Control type="text" name="movieName" value={movie?.name} disabled={true} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Your Name</Form.Label>
                                        <Form.Control type="text" name="personName"/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Total sit</Form.Label>
                                        <Form.Control type="text" name="totalSit"/>
                                    </Form.Group>
                                    <Button type="submit" className="w-100" variant="primary">Submit</Button>
                                </Form>
                            </Modal.Body>

                        </Modal>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default SingleProduct;