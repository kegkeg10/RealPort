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
import wordle from '../assets/img/Jobeight.png'
import dino from '../assets/img/JobEleven.png'
import hangman from '../assets/img/hangy.png'
import floppy from '../assets/img/flappy.png'
import ping from '../assets/img/ping.png'


export const Projects = () => {

    const projects = [
        {
            title: "Comfy Sloth",
            description: "An ECOM store Using React",
            imgUrl: Comfy,
            githubUrl: "https://github.com/kegkeg10/Comfy-Store-React",
            websiteUrl: "https://ecomreactcomfy.netlify.appr",
        },
        {
            title: "ProShop",
            description: "A FullStack Ecommerce store Using Mern Stack ",
            imgUrl: Proshop,
            githubUrl: "https://github.com/kegkeg10/ProShop",
            websiteUrl: "https://nickshop.onrender.com",
        },     
    ];

    const projecttwo = [
        {
            title: "Jobster",
            description: "A React App that U track the jobs you applied for",
            imgUrl: Jobster,
            githubUrl: "https://github.com/example/jobster",
            websiteUrl: "https://jobsterproject.netlify.app",
        },
        {
            title: "Weather App",
            description: "Weather App using React",
            imgUrl: Weather,
            githubUrl: "https://github.com/kegkeg10/WeatherApp-JavaScript",
            websiteUrl: "https://nickweatherapp13.netlify.app",
        },
        {
            title: "Menu",
            description: "Menu Using React",
            imgUrl: Menu,
            githubUrl: "https://github.com/kegkeg10/menu-React",
            websiteUrl: "https://nicmenureact.netlify.app",
        },  
        {
            title: "Note App",
            description: "A Note App using React with a dark or light mode toggle",
            imgUrl: Note,
            githubUrl: "https://github.com/kegkeg10/Note-taking-app",
            websiteUrl: "https://nicknoteapp.netlify.app",
        }, 
    ]
    const projectthree = [
        {
            title: "Dino Game",
            description: "Dino Game Using JavaScript",
            imgUrl: dino,
            githubUrl: "https://github.com/kegkeg10/DinoGame",
            websiteUrl: "https://nickdinogame.netlify.app",
        },
        {
            title: "Tic Tac Toe",
            description: "Simple Tic-Tac-Toe JavaScript Game",
            imgUrl: Tic,
            githubUrl: "https://github.com/kegkeg10/TicTacToe",
            websiteUrl: "https://tictactoenick.netlify.app",
        },
        {
            title: "Hangman",
            description: "Hangman Clone Using TypeScript",
            imgUrl: hangman,
            githubUrl: "https://github.com/kegkeg10/Hangman-Clone",
            websiteUrl: "https://hangmanclonekeg.netlify.app",
        },
        {
            title: "Floppy Bird Clone",
            description: "a floppy bird clone",
            imgUrl: floppy,
            githubUrl: "https://github.com/kegkeg10/Offbrandfloppbird",
            websiteUrl: "https://animechatfloppy13.netlify.app",
        },
        {
            title: "Wordle",
            description: "Worlde but with Anime Characters",
            imgUrl: wordle,
            githubUrl: "https://github.com/kegkeg10/animewordle",
            websiteUrl: "https://nickanimewordle.netlify.app",
        },
        {
            title: "Ping Pong",
            description: "A JavaScript game of Ping Pong vs Computer",
            imgUrl: ping,
            githubUrl: "https://github.com/kegkeg10/PingPong",
            websiteUrl: "https://nickpingpongg.netlify.app/",
        },
    ]
    return (
        <section className="project" id="Projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>My Projects </p>
                        <Tab.Container id="projects-tab" defaultActiveKey='first'>
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey='first'>Ecommerce Stores</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='second'>React Apps</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='third'>Game Projects</Nav.Link>
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
                                <Row>
                                        {
                                            projecttwo.map((projecttwo,index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...projecttwo}
                                                        />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey='third'>
                                <Row>
                                        {
                                                projectthree.map((projectthree,index) => {
                                                    return (
                                                        <ProjectCard
                                                            key={index}
                                                            {...projectthree}
                                                            />
                                                    )
                                            })
                                        }
                                    </Row>
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