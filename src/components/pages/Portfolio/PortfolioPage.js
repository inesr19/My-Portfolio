import React from "react";
import { CardColumns, Col, Container, Row } from "react-bootstrap";
import Heading from "../../Header";
import NavbarTab from "../../Nav/NavbarTab";
import "../../pages/Portfolio/portfolio.css";
import Projects from "../../Project";
import music from "../../../assets/gifs/Music-Spider.gif";
import weather from "../../../assets/gifs/Weather-Dashboard.gif";
import schedule from "../../../assets/gifs/Schedule.gif";
import genpassword from "../../../assets/gifs/Password-Generator.gif";
import notetaker from "../../../assets/gifs/Note-Taker.gif";
import books from "../../../assets/gifs/Better-Books.gif";
import Footer from "../../Footer";

function PortfolioPage(props) {
    return (
        <div>
            <NavbarTab />
            <Container>
                <Col>
                    <Heading>
                        Projects
                    </Heading>
                    <hr/>
                    <Row>
                      <CardColumns>
                        <Projects 
                        gif={music} src={props.music}
                        href={"https://github.com/inesr19/Project-1"}
                        link={"https://inesr19.github.io/Project-1/"}
                        >
                            Music Spider
                        </Projects>
                        <Projects 
                        gif={weather} src={props.weather}
                        href={"https://github.com/inesr19/Weather-dashboard"}
                        link={"https://inesr19.github.io/Weather-dashboard/"}
                        >
                            Weather Dashboard
                        </Projects>
                        <Projects 
                        gif={schedule} src={props.schedule}
                        href={"https://github.com/inesr19/Schedule-app"}
                        link={"https://inesr19.github.io/Schedule-app/"}
                        >
                            Scheduler
                        </Projects>
                        <Projects 
                        gif={genpassword} src={props.genpassword}
                        href={"https://github.com/inesr19/Password-Generator"}
                        link={"https://inesr19.github.io/Password-Generator/"}
                        >
                            Password Generator
                        </Projects>
                        <Projects 
                        gif={notetaker} src={props.notetaker}
                        href={"https://github.com/inesr19/Note-Taker"}
                        link={"https://dry-depths-03920.herokuapp.com/"}
                        >
                            Note Taker
                        </Projects>
                        <Projects 
                        gif={books} src={props.books}
                        href={"https://github.com/inesr19/Better-Books"}
                        link={"https://fathomless-taiga-07873.herokuapp.com/"}
                        >
                            Better Books
                        </Projects>
                      </CardColumns>
                    </Row>
                </Col>
            </Container>
            <Footer />
        </div>
    );
}

export default PortfolioPage;