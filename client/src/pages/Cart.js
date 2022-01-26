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
      <Button variant="primary">Submit Order</Button>
      </div>
    </div>
<Card.Footer className="center"><h1>Drink Responsibly!!!</h1></Card.Footer>
  </div>

  );
}


export default Cart;