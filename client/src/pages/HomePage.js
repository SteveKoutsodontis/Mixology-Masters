import React from 'react';
// import Header from './Header/index.js'
import Router from 'react-router-dom'
import { useQuery } from '@apollo/client';
import { QUERY_COCKTAILS } from '../utils/queries';



export const Home = () => {
    const { loading, data } = useQuery(QUERY_COCKTAILS)
    console.log(data);
    // const liquors = data?.obj|| {};
    return(
    <div className='homePage '>
        
        {/* <Header/> */}
        <h1>Blah</h1>
        <p>This could be a paragraph description</p>
        <p>This could be a paragraph description</p>
        <p>This could be a paragraph description</p>
        <p>This could be a paragraph description</p>
    </div>
    );
    }

    export default Home;