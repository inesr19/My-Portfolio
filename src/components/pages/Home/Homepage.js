import React from "react";
import NavbarTab from "../../Nav/NavbarTab";
import CardBody from "../../Card/CardBody"
import { Col, Container, Row } from "react-bootstrap";
import Heading from "../../Header";
import image from "../../../assets/images/Profile2.JPG"
import notetaker from "../../../assets/gifs/Note-Taker.gif"

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
                    <CardBody image={image} src={props.image} />
                </Col>
            </Row>
        </Container>
        <div>
            <Container>
                <Row>
                    <Col>
                        <CardBody image={notetaker} src={props.notetaker}/>
                    </Col>
                </Row>
            </Container>
        </div>
        </div>
    )
}

export default Homepage;