import React from "react";
import { Card, Button } from "react-bootstrap";
import { QUERY_USER } from "../utils/queries";
import { useQuery } from "@apollo/client";
import {Link } from "react-router-dom";
import Footer from "../components/Footer"
// import { REMOVE_CART_ITEM } from "../utils/mutations";
// import { useMutation} from "@apollo/client";

export const Cart = () => {
//   const [removeCartItem, { error }] = useMutation(REMOVE_CART_ITEM);

//   const removefromCart = async (event) => {
//     event.preventDefault();
// console.log ({props});
//     try {
//       const cartItem = await removeCartItem({
//         variables: { product: props._id},
//       });
//       alert(`${props.name} removed from cart!`);
//     } catch (err) {
//       console.log(err);
//     }
//   };

  
  const { loading, data } = useQuery(QUERY_USER);

  const cartItems = data?.user.cartItems;

  function renderCards() {
    let itemsOfCart = []
    for(let item of cartItems){
       itemsOfCart.push (
       <>
        <Card className="cartItem">
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{"$" + item.price}</Card.Text>
            <Button variant="danger">Remove from cart</Button>
          </Card.Body>
        </Card>
        </>
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
        <>
       <h3>{item.name}</h3>
       <p>{"$" + item.price}</p>
       <hr></hr>
        </>
       )
      };
  total = parseFloat(total).toFixed(2)
    return listItems
  }


  return (
    <div className="cartBgImg">
      <div className="row backgroundImg">
        <Card.Header className="center">
          <h1>Cart</h1>
        </Card.Header>
        <div className="col-9 cartItemsContainer">
          {!loading ? renderCards(): <h2>Loading.....</h2>}
        </div>

        <div className="col-3 cartList ">
          <div>
          <div>
          {!loading ? renderList(): <h2>Loading.....</h2>}
          
          </div>
          <Card.Header className="center">
            <h3>Total: {total}</h3>
            <Link to="/Success"><Button> Checkout</Button></Link>
          </Card.Header>
          </div>
        </div>
        {/* <Card.Footer className="center">
          <h1>Drink Responsibly!!!</h1>
        </Card.Footer> */}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
