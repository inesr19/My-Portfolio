import React from "react";
import NavbarTab from "../../Nav/NavbarTab";
import CardBody from "../../Card/CardBody"
import { Col, Container, Row } from "react-bootstrap";
import Heading from "../../Header";
import image from "../../../assets/images/Profile2.JPG"
import Footer from "../../Footer";

function Homepage(props) {
    return (
        <div>
        <NavbarTab /> 
        <Container>
            <Row>
                <Col>
                    <CardBody image={image} src={props.image}>
                       <Heading>
                           About Me
                       </Heading>
                    </CardBody>
                </Col>
            </Row>
        </Container>
        <div>
            <Container>
                <Row>
                    <Col>

                    </Col>
                </Row>
            </Container>
        </div>
        <Footer />
        </div>
    )
}

export default Homepage;