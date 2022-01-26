import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { useLazyQuery } from "@apollo/client";
import { QUERY_PRODUCT } from "../utils/queries";



const Detail = () => {
  const { id } = useParams();
  console.log({ id });
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
      {/* <div className="row">
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
      </div> */}

      {data ? (
        <div>
          <div className="row backgroundImg">
            {/* <Card>
                <Card.Title>{data.product.name}</Card.Title>
                <Card.Title>Did You Know?</Card.Title>
                <Card.Img src={data.product.image}></Card.Img>
              <Card.Body>
                <Card.Text>{data.product.description}</Card.Text>
                <Card.Title>Price</Card.Title>
                <Card.Text>{data.product.price}</Card.Text>
              </Card.Body>
            </Card> */}
            <Card style={{ width: '40rem', marginLeft: "auto", marginRight: "auto", margin: "30px auto"}}>
              <Card.Img variant="top" src={data.product.image}></Card.Img>
              <Card.Body>
                <Card.Title style={{textDecoration: "underline", fontSize: "40px"}}>{data.product.name}</Card.Title>
                <Card.Title>Did You Know?</Card.Title>
                <Card.Text>{data.product.description}</Card.Text>
                <Card.Title>Price</Card.Title>
                <Card.Text>{data.product.price}</Card.Text>
                <Card.Title>Ingredients</Card.Title>
                {data.product.ingredients.map((ingredient) => (
                  <Card.Text key={ingredient}>{ingredient}</Card.Text>
                ))}
              </Card.Body>
            </Card>
          {/* </div>
          <div className="row"> */}
            {/* <Card>
              <Card.Body>
              </Card.Body>
            </Card> */}
          </div>
        </div>
      ) : (
        <div>
          <Card>
            <Card.Body>
              <Card.Text>Loading.....</Card.Text>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Detail;
