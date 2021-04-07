import React from "react";
import { Card } from 'react-bootstrap';

function CardBody() {
    return (
      <Card>
        <Card.Img variant="top" src="./assets/images/Profile2.JPG" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    );
}

export default CardBody;