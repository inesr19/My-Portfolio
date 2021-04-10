import React from "react";

function Projects() {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Img src={schedule} />
            <Card.Link href="https://github.com/inesr19/Schedule-app" target='_blank'>Github</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
    </Card>
    );
}

export default Projects;