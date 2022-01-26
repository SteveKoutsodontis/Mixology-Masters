import React from "react";
import { Card,Button,Link } from "react-bootstrap";
import { QUERY_USER } from "../utils/queries";
import { useQuery } from "@apollo/client";

export const Cart = () => {
 const { loading, data } = useQuery(QUERY_USER);
 console.log(data)
 const firstName = data?.firstName || [];
 if(!loading){
   console.log("firstname",firstName)
 }
  // const cartItems = data.cartItems || [];
  // console.log("data", data);
  // console.log("cartItems: ", {cartItems});
  // if (cocktails.length > 0) {
  //   console.log("#1: ", cocktails[0].image);
  // }
  
  return(
    <div className= "backgroundImg cartBgImg">
<div className= "row">

<Card.Header className= "center"><h1>Cart</h1></Card.Header>
    <div className="col-9 cartItemsContainer">
    <Card className="cartItem">
      
        {/* <Card.Img variant="top" src={props.image} /> */}
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>Card text</Card.Text>
          <Button variant="danger">remove from cart</Button>
        </Card.Body>
      </Card>
      <Card className="cartItem" >
        {/* <Card.Img variant="top" src={props.image} /> */}
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>Card text</Card.Text>
          <Button variant="danger">remove from cart</Button>
        </Card.Body>
      </Card> 
      <Card className="cartItem">
        {/* <Card.Img variant="top" src={props.image} /> */}
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>Card text</Card.Text>
          <Button variant="danger">remove from cart</Button>
        </Card.Body>
      </Card> 
      <Card className="cartItem">
        {/* <Card.Img variant="top" src={props.image} /> */}
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>Card text</Card.Text>
          <Button variant="danger">remove from cart</Button>
        </Card.Body>
      </Card> 
      <Card className="cartItem">
        {/* <Card.Img variant="top" src={props.image} /> */}
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>Card text</Card.Text>
          <Button variant="danger">remove from cart</Button>
        </Card.Body>
      </Card>
      <Card className="cartItem">
        {/* <Card.Img variant="top" src={props.image} /> */}
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>Card text</Card.Text>
          <Button variant="danger">remove from cart</Button>
        </Card.Body>
      </Card> 
      <Card className="cartItem">
        {/* <Card.Img variant="top" src={props.image} /> */}
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>Card text</Card.Text>
          <Button variant="danger">remove from cart</Button>
        </Card.Body>
      </Card> 
      <Card className="cartItem">
        {/* <Card.Img variant="top" src={props.image} /> */}
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>Card text</Card.Text>
          <Button variant="danger" size="sm">remove from cart</Button>
        </Card.Body>
      </Card>
    </div>

    <div className="col-3">
  <Card.Header className= "center"><h1>Cart Total</h1></Card.Header>
      <div>
      <p>Cart Item</p>
      <p>Cart Item</p>
      <p>Cart Item</p>
      <p>Cart Item</p>
      <Button><Link to="/Success">Checkout</Link></Button>
      </div>
    </div>

  </div>
  </div>

  );
}


export default Cart;