import React, { Component } from 'react';
import { Fullpage, Slide, HorizontalSlider } from 'fullpage-react';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import { Container, Row, Col } from 'react-grid-system';
import './App.css';

class App extends Component {
    render() {
        const fullPageOptions = {
            scrollSensitivity: 2,
            touchSensitivity: 2,
            scrollSpeed: 500,
            resetSlides: true,
            hideScrollBars: true,
            enableArrowKeys: true,
            activeSlide: 0
        };

        const horizontalSliderProps = {
            name: 'horizontalSlider1',
            infinite: true
        };

        const horizontalSlides = [
            <Slide>
                <Container>
                    <Row>
                        <Col sm={6}>
                            <h1 className="h1">I'm an avid programmer based in LA,</h1>
                            <h2 className="h2">with a passion for creativity and problem solving. I build websites, deploy servers, design interfaces, and tinker with mobile apps.</h2>
                        </Col>
                        <Col sm={6}>
                        </Col>
                    </Row>
                </Container>
            </Slide>,
            <Slide>
                <div className="inner">
                    <Container>
                        <Row>
                            <Col sm={6}>
                                <h1 className="h1">Bringing designs to life and making them is what I love to do most,</h1>
                                <h2 className="h2">but I can also pretty much jump into anything in between, from CMS to e-commerce, and even server admin.</h2>
                            </Col>
                            <Col sm={6}>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Slide>,
            <Slide>
                <div className="inner">
                    <Container>
                        <Row>
                            <Col sm={6}>
                                <h1 className="h1">In my free time, I like to watch movies, play guitar, and travel.</h1>
                                <h2 className="h2">Contact me if you want to work with me or if you just want to chat or hang out.</h2>
                                <button href="mailto:ma.camilledavid@gmail.com">Contact</button>
                            </Col>
                            <Col sm={6}>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Slide>
        ];
        horizontalSliderProps.slides = horizontalSlides;

        const slides = [
            <Slide id="intro">
                <div id="social">
                    <a href="mailto:ma.camilledavid@gmail.com">Email</a>
                    <a href="http://www.linkedin.com/in/mcamilledavid">LinkedIn</a>
                    <a href="http://www.github.com/mcamilledavid">Github</a>
                    <a href="http://www.instagram.com/mcamilledavid">Instagram</a>
                </div>
                <div className="inner">
                    <h2 className="sub-heading">Hello, my name is</h2>
                    <h1><Typist className="heading">Camille David.</Typist></h1>
                </div>
            </Slide>,
            <HorizontalSlider {...horizontalSliderProps}></HorizontalSlider>,
            <Slide id="work">
                <Container>
                    <Row>
                        <Col sm={6} id="teamft">
                            <img id="teamft-logo" src={require('./teamft.png')} />
                        </Col>
                        <Col sm={6} id="cp">
                            <img id="cp-logo" src={require('./cp.png')} />
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col sm={6} id="cpshop">
                            <img id="cpshop-logo" src={require('./cpshop.png')} />
                        </Col>
                        <Col sm={6} id="casa">
                            <img id="casa-logo" src={require('./casa.png')} />
                        </Col>
                    </Row>
                </Container>
            </Slide>,
            <Slide id="skills">
                <Container>
                    <Row>
                        <Col sm={2}>
                            Skills
                        </Col>
                        <Col sm={2}>
                            Languages
                        </Col>
                        <Col sm={2}>
                            Tools
                        </Col>
                        <Col sm={2}>
                            Frameworks
                        </Col>
                        <Col sm={2}>
                            Design
                        </Col>
                        <Col sm={2}>
                            Platforms
                        </Col>
                    </Row>
                </Container>
            </Slide>
        ];
        fullPageOptions.slides = slides;

        return (
            <Fullpage {...fullPageOptions} />
        );
    }
}

export default App;
