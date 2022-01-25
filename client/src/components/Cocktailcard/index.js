import React from "react";
import { Card, Button } from "react-bootstrap";
import Router from "react-router-dom";
import Col from "react-bootstrap/Col";
import { Link } from 'react-router-dom';




const addToCart = () => {
   
}















export function Cocktailcard(props) {
  console.log('props', props);
  return (
    <Col md={3}>
      <Card border="secondary"  style={{ width: "12rem" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
        <Link to={`/products/${props._id}`}>
          <Card.Title>{props.name}</Card.Title>
          </Link>
          <Card.Text>{props.description}</Card.Text>
          <Button variant="primary">Add To Cart</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Cocktailcard;
