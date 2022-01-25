import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { useLazyQuery } from "@apollo/client";
import { QUERY_PRODUCT } from "../utils/queries";



const Detail = () => {
  const { id } = useParams();
console.log({id});
  const [getProduct, { loading, error, data }] = useLazyQuery(QUERY_PRODUCT);
  console.log("data", data);

  useEffect(() => {
    console.log("useEffect Detail");
    getProduct({
      variables: { product: id },
    });
  }, []);

  //   useEffect(() => {

  //   }, [{data}]);

  return (
    <div className="col-12">
      <Button href="/Home" variant="primary">
        Back to home
      </Button>
      <div className="row">
        <Card>
          <Card.Body>
            <Card.Title>Name of Cocktail</Card.Title>
            <Card.Img
              src={
                "https://www.thecocktaildb.com/images/media/drink/ck6d0p1504388696.jpg"
              }
            ></Card.Img>
            <Card.Text>Price:</Card.Text>
          </Card.Body>
        </Card>
      </div>

      {data ? (
        <div>
          <div className="row">
            <Card>
              <Card.Body>
                <Card.Title>{data.product.name}</Card.Title>
                <Card.Text>{data.product.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="row">
            <Card>
              <Card.Body>
                <Card.Title>Ingredients</Card.Title>
                {data.product.ingredients.map((ingredient) => (
                  <Card.Text key={ingredient}>{ingredient}</Card.Text>
                ))}
              </Card.Body>
            </Card>
          </div>
        </div>
      ) : (
        <div> Loading.....</div>
      )}
    </div>
  );
};

export default Detail;
