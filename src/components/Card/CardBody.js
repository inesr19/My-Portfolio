import React from "react";
import { Card, CardColumns } from 'react-bootstrap';
import "../Card/style.css"


function CardBody(props) {
    return (
    <CardColumns>
      <Card className="card-body" style={{width: '18rem'}} >
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      </CardColumns>
    );
}

export default CardBody;