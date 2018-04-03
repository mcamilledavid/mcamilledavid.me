import React, { Component } from 'react';
import { Fullpage, Slide } from 'fullpage-react';
import { withRouter } from "react-router-dom";
import { Container, Row, Col } from 'react-grid-system';

class FitnessTherapy extends Component {
    handleClick = () => {
        this.props.history.push('/work');
    }

    render() {
        const fullPageOptions = {
            scrollSensitivity: 15,
            touchSensitivity: 5,
            scrollSpeed: 300,
            resetSlides: false,
            hideScrollBars: false,
            enableArrowKeys: true,
        };

        const slides = [
            <Slide className="slide-1" id="ft-slide-1">
                <div className="back-button" onClick={() => this.handleClick('/')}>&#8592;</div>
                <a href="//team-ft.com"><img src={require('../media/link.png')} alt="Fitness Therapy" className="link-button"/></a>
                <Container className="container">
                    <Row>
                        <Col>
                            <div className="container">
                                <h1 className="h1">Connecting clients with trainers</h1>
                                <h2 className="h2">Fitness Therapy is community specializing in personal training & group fitness.</h2>
                            </div>
                            <div className="image-container">
                                <img src={require('../work/ft-5.png')} alt="Fitness Therapy" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Slide>,
            <Slide className="slide-2">
                <Container className="container">
                    <Row>
                        <Col sm={12} md={5} lg={5} xl={5}>
                            <h1 className="h1">Find a class</h1>
                            <h2 className="h2">Easily browse and book for classes on any time, any where.</h2>
                        </Col>
                    </Row>
                </Container>
                <div className="image-container">
                    <img className="mobile" src={require('../work/ft-3.png')} alt="Fitness Therapy" />
                    <img className="desktop" src={require('../work/ft-4.png')} alt="Fitness Therapy" />
                </div>
            </Slide>,
            <Slide className="slide-3">
                <Container className="container">
                    <Row>
                        <Col sm={12} md={12} lg={5} xl={5}>
                            <h1 className="h1">Meet the trainers</h1>
                            <h2 className="h2">Get to know all the trainers before setting up an appointment.</h2>
                        </Col>
                    </Row>
                </Container>
                <div className="image-container">
                    <img src={require('../work/ft-2.png')} alt="Fitness Therapy" />
                </div>
            </Slide>,
            <Slide className="slide-4">
                <Container className="container">
                    <Row>
                        <Col sm={12} md={5} lg={5} xl={5}>
                            <h1 className="h1">A fluid experience</h1>
                            <h2 className="h2">A site that seamlessly adapts to various device sizes.</h2>
                        </Col>
                    </Row>
                </Container>
                <div className="image-container">
                    <img src={require('../work/ft-6.png')} alt="Fitness Therapy" />
                </div>
            </Slide>
        ];
        fullPageOptions.slides = slides;

        return <Fullpage {...fullPageOptions} />
    }
}

export default withRouter(FitnessTherapy);