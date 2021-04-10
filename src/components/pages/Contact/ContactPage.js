import React from "react";
import { Container, Form, FormControl, Row, Col, InputGroup, Button} from "react-bootstrap";
import Heading from "../../Header";
import NavbarTab from "../../Nav/NavbarTab";
import Footer from "../../Footer/index";

function ContactPage() {
    return(
        <div>
            <NavbarTab />
            <Container>
                <Heading>
                    Contact
                </Heading>
                <hr/>
                <Form>
                    <Row>
                        <Col>
                        <Form.Control placeholder="First name" />
                        </Col>
                        <Col>
                        <Form.Control placeholder="Last name" />
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col>
                        <Form.Control type="email" placeholder="Enter email" />
                        </Col>
                    </Row>
                    <br></br>
                    <InputGroup size="lg">
                        <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm"  placeholder="Message" />
                    </InputGroup>
                    <br></br>
                    <Button variant="dark" style={{margin: '10px'}}>Submit</Button>{' '}
                </Form>      
            </Container>
            <Footer />
        </div>
        
    )
}

export default ContactPage;