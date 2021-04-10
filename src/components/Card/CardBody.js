import React from "react";
import { Card, CardColumns } from 'react-bootstrap';
import "../Card/style.css"
import Heading from "../Header";



function CardBody(props) {
    return (
      <div>
    <CardColumns>
      <Card className="card-body">
      <Heading>
        {props.children}
      </Heading>
        <Card.Img className="card-image" variant="top" src={props.image} fluid />
        <Card.Body>
                    <Card.Text>
                        Marketing Assistant with experience in advertising and concert promotions. Along with marketing, I
                bring in great customer service skills and a mindful approach in my work. My education led me to receive a
                bachelor's degree in General Science as well as a minor in Biological Anthropology and Art History. I am
                looking to expand my career and start a new journey in web development. I am currently enrolled in the
                University of Oregon's Full Stack Web Development Coding Bootcamp and have high hopes to reach a new
                position in this field after the program is over.
 
                I am always interested in getting feedback on my code and/or receiving advice for my future job hunt.
                Reach out to me via the contact information provided if you have any questions or comments.
                </Card.Text>
                </Card.Body>
      </Card>
      </CardColumns>
      </div>
    );
}

export default CardBody;