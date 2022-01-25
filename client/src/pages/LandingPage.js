import React from 'react';
// import LandingPageImg from ""
import Button from 'react-bootstrap/Button'
import "../index.css";
import background from "./images/bg_lp1.png";


const LandingPage = () => {
  return <div className="landingPageText">
    <div className='landingPageImg' style={{ backgroundImage: `url(${background})` }}>
 
         <h1>Welcome to Mixology-Masters!</h1>
        <p>"There's always a reason to toast! From weddings to team building events to fun cookouts with your friends, there's always occasion to imbibe your favorite drinks.  Set a date to learn how to make the perfect cocktail with a master mixologist.  Select your cocktail kit inside...."</p>
        <br></br>
        <Button className='landpageBtn' href="/Home" variant="success" size="lg">
          Pick your poison!
        </Button>
        
      Hello World
    </div>

  </div>;

};

export default LandingPage;

