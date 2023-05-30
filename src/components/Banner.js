import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg'
import rocket from '../assets/img/rocket.png'

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["FullStack Engineer", "Frontend Developer"]
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => {clearInterval(ticker)}
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else if(isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }

    return (
        <section className='banner' id='home'>
            {/* The banner background image is in the css*/}
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>Welcome To my Portfolio</span>
                        <h1>{`Hi Im Nicholas Garner A `}
                        <span className='wrap'>{text}</span></h1>
                        <p className='portinfo'>As a graduate of Nucamp's Full Stack Coding Bootcamp,
                            I am a skilled developer
                            with a passion for creating innovative and efficient solutions to complex
                            problems. 
                        </p>
                        <p className='portinfo'>With experience in HTML, CSS, JavaScript, React, and Node.js, I have
                            a strong foundation in front-end and back-end development also. in addition to
                            my technical skills, I have strong communication and problem-solving abilities.
                            During my time at Nucamp, I gained valuable experience collaborating with
                            other developers, working on real-world projects</p>
                            <button onClick={() => console.log('Connect')}>Lets Connect <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={rocket} alt='Headder Img' />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}