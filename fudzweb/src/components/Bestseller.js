import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Bestseller = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="path-to-your-image.jpg" />
      <Card.Body>
        <Card.Title>Bestseller Item</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
  );
};

export default Bestseller;