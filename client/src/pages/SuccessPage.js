import React, {useEffect } from "react";
import { EMPTY_CART } from "../utils/mutations";
// import Jumbotron from 'react-bootstrap/Jumbotron'
import { useMutation} from "@apollo/client";
// import { Redirect } from 'react-router-dom';
{/* <Button><Link to="/Success">Checkout</Link></Button> */}




function SuccessPage() {

  // Remove all items from user's cart
  const [emptyCart, { error }] = useMutation(EMPTY_CART);

 

  // const redirect = () => {
    useEffect(() => {
      async function  emptyTheCart(){
        await emptyCart();
      }
      emptyTheCart();
      console.log("emptied cart");
      setTimeout(() => {
        window.location.assign('/Home');
      }, 50000)
    }, [])
  // }
  // redirect()
  return (
    <div  className="backgroundImg successPage">
      
        <h1 className="success">Success!</h1>
        <p className="funFont text-center">
          Your order has been successfully placed! Please give us 3-5 business days for your order to be processed and shipped! You will now be redirected to the homepage. 
        </p>
     
    </div>
  );
}

export default SuccessPage;
