import React, { useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import Router from "react-router-dom";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import { QUERY_PRODUCT } from "../../utils/queries";
import { ADD_CART_ITEM } from "../../utils/mutations";
import { useMutation, useQuery } from "@apollo/client";

export function Cocktailcard(props) {
  // We can get the product_id from props to create the CartItem
// console.log ("props ", {props})
  //
  //??Can we use props as the product?
  const [addCartItem, { error }] = useMutation(ADD_CART_ITEM);
if (error) {
  console.log("err", error);
}
  const addToCart = async() => {
    // ???await?

    try {
      console.log ("try,addToCart called");
      console.log (props._id);
      // const {cartItem} = await addCartItem({variables: props._id});
      const {cartItem} = await addCartItem({variables: "61f042351c0f430abc6e3da7"});
      console.log("cItem", cartItem);
    }
    catch(err){
    console.log(err);
    }
  };

  return (
    <Col md={3} className="mb-4">
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
            <Button onClick={addToCart} variant="primary">
              Add To Cart
            </Button>
          ) : (
            <span>(log in to add to cart)</span>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Cocktailcard;
