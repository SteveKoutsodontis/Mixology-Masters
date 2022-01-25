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
<div>
    
  <div className= "row">
    <div className="col-12">
    

    </div>
<Card className="text-center">
  <Card.Body>
    <Card.Title>Mixology Pack Selected</Card.Title>
    <Card.Text>
    
    </Card.Text>
    <Button variant="primary">Remove From Cart</Button>
  </Card.Body>
</Card>
    <div className="col-12 itemsInCart">
      <div>
      <Card.Body>
    <Card.Title>Subtotal</Card.Title>
    <Card.Text>
    
    </Card.Text>
    <Button variant="primary">Remove From Cart</Button>
  </Card.Body>
      </div>
    </div>

  </div>
</div>
  );
}


export default Cart;