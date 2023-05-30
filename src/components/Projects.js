import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from '../assets/img/color-sharp2.png'
import Jobster from '../assets/img/Jobone.png'
import Note from '../assets/img/Jobtwo.png'
import Comfy from '../assets/img/Jobsix.png'
import Proshop from '../assets/img/Jobten.png'
import Menu from '../assets/img/Jobfive.png'
import Weather from '../assets/img/Jobthree .png'
import Tic from '../assets/img/Jobfour.png'


export const Projects = () => {

    const projects = [
        {
            title: "Jobster",
            description: "A React App that U track the jobs you applied for",
            imgUrl: Jobster,
            githubUrl: "https://github.com/example/jobster",
            websiteUrl: "https://example.com/jobster",
        },
        {
            title: "Comfy Sloth",
            description: "An ECOM store Using React",
            imgUrl: Comfy,
            githubUrl: "https://github.com/example/jobster",
            websiteUrl: "https://example.com/jobster",
        },
        {
            title: "ProShop",
            description: "A FullStack Ecommerce store Using Mern Stack ",
            imgUrl: Proshop,
            githubUrl: "https://github.com/example/jobster",
            websiteUrl: "https://example.com/jobster",
        },
        {
            title: "Note App",
            description: "A Note App using React with a dark or light mode toggle",
            imgUrl: Note,
            githubUrl: "https://github.com/example/jobster",
            websiteUrl: "https://example.com/jobster",
        },
        {
            title: "Menu",
            description: "Menu Using React",
            imgUrl: Menu,
            githubUrl: "https://github.com/example/jobster",
            websiteUrl: "https://example.com/jobster",
        },
        {
            title: "Weather App",
            description: "Weather App using React",
            imgUrl: Weather,
            githubUrl: "https://github.com/example/jobster",
            websiteUrl: "https://example.com/jobster",
        },
    ];
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>My Projects </p>
                        <Tab.Container id="projects-tab" defaultActiveKey='first'>
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey='first'>Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='second'>Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='third'>Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey='first'>
                                    <Row>
                                        {
                                            projects.map((project,index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                        />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey='second'>
                                    Lorem
                                </Tab.Pane>
                                <Tab.Pane eventKey='third'>
                                    Lorem
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}