import React from 'react';
// import LandingPageImg from ""
import Button from 'react-bootstrap/Button'
import "../index.css";
// import background from "./images/bg_lp1.png";
import {Link} from 'react-router-dom';


const LandingPage = () => {
  return <div className='landingPage'>
    <h1 className='landingPageText landingH1El'>Welcome to Mixology-Masters!</h1>
    <div className='landingPageImg'>
      <div>
        <p className='landingPageText landingPEl'>"There's always a reason to toast! From weddings to team building events to fun cookouts with your friends, there's always occasion to imbibe your favorite drinks.  Set a date to learn how to make the perfect cocktail with a master mixologist.  Select your cocktail kit inside...."</p>
      </div>
      <div className='landingPageBtnContainer'>
        <Button className='landpageBtn' variant="success" size="lg">
          <Link className='landPagebtnLink' to="/Home">
          Pick your poison!
          </Link>
        </Button>
      </div>

    </div>

  </div>;

};

export default LandingPage;

