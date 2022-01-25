import React from "react";
import { Card, Button } from "react-bootstrap";
import Router from "react-router-dom";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Auth from '../../utils/auth';

export function Cocktailcard(props) {

  const addToCart = () => {


  };

  return (
    <Col md={3} className="mb-4" >
      {/* <Card border="secondary" mb-3 style={{ width: "12rem" }}> */}
      <Card border="secondary" style={{ width: "12rem" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Link to={`/products/${props._id}`}>
            <Card.Title>{props.name}</Card.Title>
          </Link>

          <Card.Text>{props.price}</Card.Text>
          {/* Check to see if the user is logged in. If so render a button to Add to Cart */}
          {Auth.loggedIn() ? (
            <Button onClick={addToCart} variant="primary" >
              Add To Cart
            </Button>
          ) : (
            <span>(log in to add to cart)</span>
          )}
          <Button onClick={addToCart} variant="primary">
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Cocktailcard;
