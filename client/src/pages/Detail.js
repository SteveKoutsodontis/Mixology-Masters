import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const Detail = () => {
    return (
        <div className="col-12">
            <Button href="/Home" variant='primary'>
                Back to home
            </Button>
            <div className="row">
                <Card>
                    <Card.Body>
                        <Card.Title>Name of Cocktail</Card.Title>
                        <Card.Img></Card.Img>
                        <Card.Text>Price:</Card.Text>
                    </Card.Body>
                </Card> 
            </div>
            <div className='row'>
                <Card>
                    <Card.Body>
                        <Card.Title>Did You Know?</Card.Title>
                        <Card.Text>Insert tidbit here</Card.Text>
                    </Card.Body>
                </Card>
                </div>
                <div className='row'>
                <Card>
                    <Card.Body>
                        <Card.Title>Ingredients</Card.Title>
                        <Card.Text>Insert ingredients here</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>


    )
}


export default Detail 