import React from "react";
import { Card } from "react-bootstrap";

function Projects(props) {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{props.children}</Card.Title>
            <Card.Img src={props.gif} />
            <Card.Link href={props.href} target='_blank'>Github</Card.Link>
            <Card.Link href={props.link} target='_blank'>Website</Card.Link>
        </Card.Body>
    </Card>
    );
}

export default Projects;