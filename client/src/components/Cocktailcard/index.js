import React from "react";
import { Card, Button } from "react-bootstrap";
import Router from "react-router-dom";
import Col from "react-bootstrap/Col";

export function Cocktailcard(props) {
  return (
    <Col md={3}>
      <Card border="secondary"  style={{ width: "12rem" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Button variant="primary">Add To Cart</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Cocktailcard;
