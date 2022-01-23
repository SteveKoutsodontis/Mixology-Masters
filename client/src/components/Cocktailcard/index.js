import React from "react";
import { Card, Button } from "react-bootstrap";
import Router from "react-router-dom";

export function Cocktailcard(props) {
  return (
    <div className="cocktail">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Button variant="primary">Add To Cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cocktailcard;
