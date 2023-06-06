import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Button} from "react-bootstrap";
import Badge from 'react-bootstrap/Badge';
import useGetAllMovie from "../../../Hooks/useGetAllMovie.jsx";
import { FaStar } from 'react-icons/fa';

const ProductCard = () => {
    const [movie] = useGetAllMovie();
    console.log(movie);
    return (
        <Row xs={1} md={5} className="g-4 mt-3">
            {movie.map((item, index) =>
                <Col key={index}>
                    <Card>
                        <Card.Img style={{height: "300px"}} variant="top" src={item.show.image.original} />
                        <div className="position-absolute mt-4 ms-3 ">
                            <p className="bg-dark text-white px-2 py-1 d-inline rounded"><FaStar className="me-1"></FaStar><span className="mt-1">{item.show?.rating?.average || 0}</span></p>
                        </div>
                        <Card.Body>
                            <Card.Title>{item.show.name}</Card.Title>
                            <div>
                                {
                                    item.show?.genres.map(genre =>
                                        <Badge bg="secondary me-1">genre</Badge>
                                    )
                                }

                            </div>
                        </Card.Body>
                        <Button variant="primary w-100">View details</Button>
                    </Card>
                </Col>
            )}
        </Row>
    );
};

export default ProductCard;