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
                    <Heading>
                           About Me
                    </Heading>
                    <hr/>
                    <CardBody image={image} src={props.image} />
                </Col>
            </Row>
        </Container>
        
        <Footer />
        </div>
    )
}

export default Homepage;