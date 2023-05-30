import { Col, Nav } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubUrl, websiteUrl }) => {
    return (
        <Col size={12} sm={6} md={4}>
        <div className="proj-imgbx">
            <img src={imgUrl} alt={title} />
            <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
            <Nav.Item>
                <Nav.Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                Github Code
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href={websiteUrl} target="_blank" rel="noopener noreferrer">
                Website
                </Nav.Link>
            </Nav.Item>
            </div>
        </div>
        </Col>
    );
};