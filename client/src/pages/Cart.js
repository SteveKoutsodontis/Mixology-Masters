import React from "react";
import { Card,Button } from "react-bootstrap";


export const Cart = () => {
  
  return(
  <div className= "row">
    <div className="col-9 cartItemsContainer">
    <Card>
        {/* <Card.Img variant="top" src={props.image} /> */}
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>Card text</Card.Text>
          <Button variant="primary">remove from cart</Button>
        </Card.Body>
      </Card>
      <Card>
        {/* <Card.Img variant="top" src={props.image} /> */}
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>Card text</Card.Text>
          <Button variant="primary">remove from cart</Button>
        </Card.Body>
      </Card> <Card>
        {/* <Card.Img variant="top" src={props.image} /> */}
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>Card text</Card.Text>
          <Button variant="primary">remove from cart</Button>
        </Card.Body>
      </Card> <Card>
        {/* <Card.Img variant="top" src={props.image} /> */}
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>Card text</Card.Text>
          <Button variant="primary">remove from cart</Button>
        </Card.Body>
      </Card> <Card>
        {/* <Card.Img variant="top" src={props.image} /> */}
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>Card text</Card.Text>
          <Button variant="primary">remove from cart</Button>
        </Card.Body>
      </Card>
    </div>

    <div className="col-3">
      <div>
      <h2>Cart Subtotal</h2>
      <p>Cart Item</p>
      <p>Cart Item</p>
      <p>Cart Item</p>
      <p>Cart Item</p>
     
      </div>
    </div>

  </div>

  );
}


export default Cart;