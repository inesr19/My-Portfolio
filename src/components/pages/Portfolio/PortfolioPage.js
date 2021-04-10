import React from "react";
import { CardColumns, Col, Container, Row } from "react-bootstrap";
import Heading from "../../Header";
import NavbarTab from "../../Nav/NavbarTab";
import "../../pages/Portfolio/style.css";


function PortfolioPage(props) {
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
                     
                      </CardColumns>
                    </Row>
                </Col>
            </Container>
        </div>
    );
}

export default PortfolioPage;