import React from "react";
import { Card, CardColumns } from 'react-bootstrap';
import "../Card/style.css"
import Heading from "../Header";



function CardBody(props) {
    return (
      <div>
    <CardColumns>
      <Card className="card-body" style={{width: '18rem'}} >
      <Heading>
        {props.children}
      </Heading>
        <Card.Img className="card-image" variant="top" src={props.image} />
        <Card.Body>
          <Card.Text>

            Some quick example text to build on the card title and make up the bulk
            of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      </CardColumns>
      </div>
    );
}

export default CardBody;