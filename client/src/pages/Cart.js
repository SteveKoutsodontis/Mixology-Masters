import React from "react";
import { Card, Button } from "react-bootstrap";
import { QUERY_USER } from "../utils/queries";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

export const Cart = () => {
  
  const { loading, data } = useQuery(QUERY_USER);

  const cartItems = data?.user.cartItems;

  function renderCards() {
    let itemsOfCart = []
    for(let item of cartItems){
       itemsOfCart.push (
        <Card className="cartItem" key={item.name}>
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{"$" + item.price}</Card.Text>
            <Button variant="danger">Remove from cart</Button>
          </Card.Body>
        </Card>
       )
    };
    return itemsOfCart
  }

  let total=0;

  function renderList() {
    let listItems = []
    for(let item of cartItems){
      total+= item.price
      listItems.push (
        <div key={item.name}>
       <h3>{item.name}</h3>
       <p>{"$" + item.price}</p>
       <hr></hr>
        </div>
       )
      };
  total = parseFloat(total).toFixed(2)
    return listItems
  }


  return (
    <div className="backgroundImg cartBgImg">
      <div className="row">
        <Card.Header className="center">
          <h1>Cart</h1>
        </Card.Header>
        <div className="col-9 cartItemsContainer">
          {!loading ? renderCards(): <h2>Loading.....</h2>}
        </div>

        <div className="col-3 cartList">
          <div>
          {!loading ? renderList(): <h2>Loading.....</h2>}
          
          </div>
          <Card.Header className="center">
            <h3>Total: {total}</h3>
            <Link to="/Success"><Button> Checkout</Button></Link>
          </Card.Header>
        </div>
        {/* <Card.Footer className="center">
          <h1>Drink Responsibly!!!</h1>
        </Card.Footer> */}
      </div>
    </div>
  );
};

export default Cart;
