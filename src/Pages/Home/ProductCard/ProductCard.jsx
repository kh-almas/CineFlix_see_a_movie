import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Button} from "react-bootstrap";

const ProductCard = () => {
    return (
        <Row xs={1} md={3} className="g-4">
            {Array.from({ length: 8 }).map((_, idx) => (
                <Col key={idx}>
                    <Card>
                        <Card.Img style={{height: '300px'}} variant="top" src="https://static.tvmaze.com/uploads/images/original_untouched/425/1064746.jpg" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                            <Button variant="primary w-100">View Details</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default ProductCard;