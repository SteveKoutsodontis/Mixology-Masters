import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import { useEffect } from "react";
// import { Redirect } from 'react-router-dom';

function SuccessPage() {
  const redirect = () => {
    useEffect(() => {
      setTimeout(() => {
        window.location.assign('/Home');
      }, 3000)
    })
  }
  redirect()
  return (
    <div>
      <Jumbotron>
        <h1>Success!</h1>
        <p>
          Your order has been successfully placed! Please give us 3-5 business days for your order to be processed and shipped!
        </p>
      </Jumbotron>;
    </div>
  );
}

export default SuccessPage;
