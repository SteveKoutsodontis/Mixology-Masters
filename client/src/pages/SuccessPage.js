import React from "react";
// import Jumbotron from 'react-bootstrap/Jumbotron'
import { useEffect } from "react";
// import { Redirect } from 'react-router-dom';
{/* <Button><Link to="/Success">Checkout</Link></Button> */}
function SuccessPage() {
  // const redirect = () => {
    useEffect(() => {
      setTimeout(() => {
        window.location.assign('/Home');
      }, 3000)
    })
  // }
  // redirect()
  return (
    <div  className="backgroundImg cartBgImg">
      
        <h1 className="success">Success!</h1>
        <p className="funFont text-center">
          Your order has been successfully placed! Please give us 3-5 business days for your order to be processed and shipped! You will now be redirected to the homepage. 
        </p>
     
    </div>
  );
}

export default SuccessPage;
