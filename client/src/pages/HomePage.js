import React from "react";
// import Header from './Header/index.js'
import Router from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_COCKTAILS } from "../utils/queries";
import Cocktailcard from "../components/Cocktailcard";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Home = () => {
  const { loading, data } = useQuery(QUERY_COCKTAILS);
  const cocktails = data?.products || [];
  console.log("loading", loading);
  console.log("data", data);
  console.log("cocktails: ", cocktails);
  if (cocktails.length > 0) {
    console.log("#1: ", cocktails[0].image);
  }

  return (
    <div className="homePage text-center backgroundImg">
      <h2>
        Select the cocktails you will be learning to create with your personal
        Master Mixologist!
      </h2>
      <div>
        {loading ? (
          <div> Loading....</div>
        ) : (
          <div>
            <h1>Our List of Cocktails</h1>
            <Container fluid>
              {/* <Row> */}
              <Row xs={1} sm={2} md={4} >

                        {/* <Col sm={4} lg={8}> */}
                        {cocktails.map((cocktail) => (
                          <Cocktailcard key={cocktail._id} {...cocktail} />
                        ))}
                        {/* </Col>                 */}
              </Row>
            </Container>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
