import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h3>Nicholas</h3>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/nicholasgarner13/">
                <img src={navIcon1} alt="Icon" className="icon" />
              </a>
              <a href="#">
                <img src={navIcon2} alt="Icon" className="icon" />
              </a>
              <a href="https://github.com/kegkeg10">
                <img src={navIcon3} alt="Icon" className="icon" />
              </a>
            </div>
            <p>Copyright Nicholas Garner 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};