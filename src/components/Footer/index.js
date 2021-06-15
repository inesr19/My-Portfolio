import React from "react";
import { Card } from "react-bootstrap";
import linkedIn from "../../assets/images/LI-In-Bug.png";
import github from "../../assets/images/GitHub-Mark-120px-plus.png";
import resume from "../../assets/images/resume.png";
import resumePdf from "../../assets/Resume.Ines-Radic.pdf";
import "../Footer/footer.css";

function Footer() {
    return (
        <Card.Footer>
            <Card.Link href="https://www.linkedin.com/in/ines-radic/" target="_blank">
                <Card.Img className="image" src={linkedIn} />
            </Card.Link>
            <Card.Link href={resumePdf} download="Resume" target="_blank">
                <Card.Img className="image" src={resume}  />
            </Card.Link>
            <Card.Link href="https://github.com/inesr19" target="_blank">
                <Card.Img className="image" src={github}/>
            </Card.Link>
        </Card.Footer>
    )
}

export default Footer;