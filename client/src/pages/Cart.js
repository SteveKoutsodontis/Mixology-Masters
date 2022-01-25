import React from "react";
import { Card,Button } from "react-bootstrap";


export const Cart = () => {
  // const { loading, data } = useQuery(QUERY_COCKTAILS);
  // const cocktails = data?.products || [];
  // console.log("loading", loading);
  // console.log("data", data);
  // console.log("cocktails: ", cocktails);
  // if (cocktails.length > 0) {
  //   console.log("#1: ", cocktails[0].image);
  // }
  
  return(
<div className= "row">
    <div className="col-9 cartItemsContainer">
    <Card className="cartItem">
        {/* <Card.Img variant="top" src={props.image} /> */}
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>Card text</Card.Text>
          <Button variant="primary">remove from cart</Button>
        </Card.Body>
      </Card>
      <Card className="cartItem" >
        {/* <Card.Img variant="top" src={props.image} /> */}
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>Card text</Card.Text>
          <Button variant="primary">remove from cart</Button>
        </Card.Body>
      </Card> 
      <Card className="cartItem">
        {/* <Card.Img variant="top" src={props.image} /> */}
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>Card text</Card.Text>
          <Button variant="primary">remove from cart</Button>
        </Card.Body>
      </Card> 
      <Card className="cartItem">
        {/* <Card.Img variant="top" src={props.image} /> */}
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>Card text</Card.Text>
          <Button variant="primary">remove from cart</Button>
        </Card.Body>
      </Card> 
      <Card className="cartItem">
        {/* <Card.Img variant="top" src={props.image} /> */}
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>Card text</Card.Text>
          <Button variant="primary">remove from cart</Button>
        </Card.Body>
      </Card>
      <Card className="cartItem">
        {/* <Card.Img variant="top" src={props.image} /> */}
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>Card text</Card.Text>
          <Button variant="primary">remove from cart</Button>
        </Card.Body>
      </Card> 
      <Card className="cartItem">
        {/* <Card.Img variant="top" src={props.image} /> */}
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>Card text</Card.Text>
          <Button variant="primary">remove from cart</Button>
        </Card.Body>
      </Card> 
      <Card className="cartItem">
        {/* <Card.Img variant="top" src={props.image} /> */}
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>Card text</Card.Text>
          <Button variant="primary" size="sm">remove from cart</Button>
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
      <Button variant="primary">Submit Order</Button>
      </div>
    </div>

  </div>

  );
}


export default Cart;