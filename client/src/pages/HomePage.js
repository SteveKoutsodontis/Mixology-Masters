import React from 'react';
// import Header from './Header/index.js'
import Router from 'react-router-dom'
import { useQuery } from '@apollo/client';
import { QUERY_COCKTAILS }  from '../utils/queries';
import Cocktailcard from '../components/Cocktailcard';
import { Container} from "react-bootstrap";



export const Home = () => {
	const { loading, data } = useQuery(QUERY_COCKTAILS);
    const cocktails = data?.products || [];
    console.log("loading", loading)
    console.log ("data", data);
    console.log("cocktails: ", cocktails);

    return (
        <div className="homePage text-center">
        <h2>Select the cocktails you will be learning to create with your personal Master Mixologist!</h2>
         <div>
             {loading ? (
                 <div> Loading....</div>
             ): (
                <div className='container projectContainer'>
                    <h1>Our List of Cocktails</h1>
                    <Container>
                        <div id="cards_landscape_wrap-2">
                            <div>
                                <div className="cocktail-container row">
                                 {cocktails.map((cocktail) => (
                                     <Cocktailcard
                                     key={cocktail._id} 
                                     {...cocktail} />)) }
                                    </div>
                            </div>
                        </div>
                     </Container>
                 </div>
             )}
            
          </div>

    </div>
    );
}

    export default Home;