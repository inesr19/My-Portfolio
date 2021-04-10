import React from "react";
import { CardColumns, Col, Container, Row } from "react-bootstrap";
import Heading from "../../Header";
import NavbarTab from "../../Nav/NavbarTab";
import "../../pages/Portfolio/style.css";
import Projects from "../../Project";
import schedule from "../../../assets/gifs/Schedule.gif";


function PortfolioPage(props, link) {
    return (
        <div>
            <NavbarTab />
            <Heading>
                Projects
            </Heading>
            <Container>
                <Col>
                    <Row>
                      <CardColumns>
                        <Projects 
                        gif={schedule} src={props.schedule}
                        href={"https://github.com/inesr19/Schedule-app"}
                        link={"https://inesr19.github.io/Schedule-app/"}
                        >
                            Schedule
                        </Projects>
                      </CardColumns>
                    </Row>
                </Col>
            </Container>
        </div>
    );
}

export default PortfolioPage;