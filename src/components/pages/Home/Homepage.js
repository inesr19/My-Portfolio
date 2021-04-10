import React from "react";
import NavbarTab from "../../Nav/NavbarTab";
import CardBody from "../../Card/CardBody"
import { Col, Container, Row } from "react-bootstrap";
import Heading from "../../Header";

function Homepage(props) {
    return (
        <div>
        <NavbarTab />
        <Heading>
            About Me
        </Heading>
        <Container>
            <Row>
                <Col>
                    <CardBody />
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Homepage;