import React, { Component } from 'react';
import { Fullpage, Slide, HorizontalSlider } from 'fullpage-react';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import { Container, Row, Col } from 'react-grid-system';
import './App.css';

const { changeHorizontalSlide } = Fullpage;

const horizontalSliderProps = {
    name: 'horizontalSlider1',
    infinite: true
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: {
                horizontalSlider1: 0
            }
        };
        this.onSlideChangeStart = this.onSlideChangeStart.bind(this);
        this.onSlideChangeEnd = this.onSlideChangeEnd.bind(this);
    }

    onSlideChangeStart(name, props, state, newState) {
        if (!this.horizontalNav) {
            this.horizontalNav = document.getElementById('horizontal-nav');
        }
    }

    onSlideChangeEnd(name, props, state, newState) {
        const oldActive = this.state.active;
        const sliderState = {
            [name]: newState.activeSlide
        };

        const updatedState = Object.assign(oldActive, sliderState);
        this.setState(updatedState);
    }

    componentDidMount() {

    }

    render() {
        const horizontalSliderName = horizontalSliderProps.name;
        const horizontalActive = this.state.active[horizontalSliderName];
        const nextHorizontalSlide = changeHorizontalSlide.bind(null, horizontalSliderName, horizontalActive + 1);

        const fullPageOptions = {
            scrollSensitivity: 2,
            touchSensitivity: 2,
            scrollSpeed: 500,
            resetSlides: true,
            hideScrollBars: true,
            enableArrowKeys: true,
            activeSlide: 0
        };

        const horizontalNav = (
            <div id='horizontal-nav'>
                <span onClick={nextHorizontalSlide}><button>Next &#8594;</button></span>
            </div>
        );

        const horizontalSlides = [
        <Slide>
            <video className="vid-background" autoPlay loop>
                <source src={require('./la.mp4')} type="video/mp4" />
            </video>
            <img className="img-background" src={require('./la-still.png')} alt="Plane" />
            <Container className="container">
                <Row>
                    <Col sm={12} md={9} lg={7} xl={6}>
                        <h1 className="h1">Full Stack Developer based in LA,</h1>
                        <h2 className="h2">with a passion for creativity and problem solving. I build websites, deploy servers, design interfaces & tinker around with mobile apps.</h2>
                        {horizontalNav}
                    </Col>
                </Row>
            </Container>
        </Slide>,
        <Slide>
            <Container className="container">
                <Row>
                    <Col sm={12} md={9} lg={7} xl={6}>
                        <h1 className="h1">Creating designs to life & bringing them is what I love to do most,</h1>
                        <h2 className="h2">but I can also pretty much jump into anything in between, from CMS to databases, even server admin & even e-commerce.</h2>
                        {horizontalNav}
                    </Col>
                </Row>
            </Container>
        </Slide>,
        <Slide>
            <Container className="container">
                <Row>
                    <Col sm={12} md={9} lg={7} xl={6}>
                        <h1 className="h1">In my free time, I watch movies, play music, take videos, or travel.</h1>
                        <h2 className="h2">
                            Contact me if you want to work together or if you just want to chat or hang out. I'm open to any opportunities.
                            <img id="shaka-emoji" src={require('./emoji.png')} alt="Shaka Emoji" />
                        </h2>
                        <a href="mailto:ma.camilledavid@gmail.com">Contact</a>
                    </Col>
                </Row>
            </Container>
        </Slide>
        ];
        horizontalSliderProps.slides = horizontalSlides;

        const slides = [
            <Slide id="skills">
                <Container className="container">
                    <Row>
                        <Col sm={12} md={9} lg={7} xl={6}>
                            <h1 className="h1">Here are some things that I can do.</h1>
                            <h2 className="h2">But I'm always trying to learn new skills and technologies. Right now, I'm starting to play around with Node.js and iOS development.</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} lg={3}>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>jQuery</li>
                                <li>Bootstrap</li>
                                <li>Foundation</li>
                                <li>Grunt</li>
                                <li>SASS</li>
                                <li>WordPress</li>
                                <li>Drupal</li>
                            </ul>
                        </Col>
                        <Col xs={6} lg={3}>
                            <ul>
                                <li>PHP</li>
                                <li>Java</li>
                                <li>MySQL</li>
                                <li>MongoDB</li>
                                <li>Node.js/Express</li>
                                <li>iOS Dev</li>
                            </ul>
                        </Col>
                        <Col xs={6} lg={3}>
                            <ul>
                                <li>AWS</li>
                                <li>Linux</li>
                                <li>Apache/NGINX</li>
                                <li>Git</li>
                                <li>Command Line</li>
                            </ul>
                        </Col>
                        <Col xs={6} lg={3}>
                            <ul>
                                <li>UI/UX Design</li>
                                <li>Graphic Design</li>
                                <li>Photoshop</li>
                                <li>Illustrator</li>
                                <li>Sketch</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Slide>,
        <Slide id="intro">
            <div id="social">
                <a href="mailto:ma.camilledavid@gmail.com">Email</a>
                <a href="http://www.linkedin.com/in/mcamilledavid">LinkedIn</a>
                <a href="http://www.github.com/mcamilledavid">Github</a>
                <a href="http://www.instagram.com/mcamilledavid">Instagram</a>
            </div>
            <div>
                <h2 className="h2">Hello, my name is</h2>
                <h1><Typist className="h1">Camille David.</Typist></h1>
            </div>
        </Slide>,
        <HorizontalSlider id='profile' {...horizontalSliderProps}></HorizontalSlider>,
        <Slide id="work">
            <Container>
                <Row>
                    <Col xs={12} lg={6} id="teamft">
                        <img id="teamft-logo" src={require('./teamft.png')} alt="Fitness Therapy Logo" />
                    </Col>
                    <Col xs={12} lg={6} id="cp">
                        <img id="cp-logo" src={require('./cp.png')} alt="Cooking Panda Logo" />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col xs={12} lg={6} id="cpshop">
                        <img id="cpshop-logo" src={require('./cpshop.png')} alt="Cooking Panda Shop Logo" />
                    </Col>
                    <Col xs={12} lg={6} id="casa">
                        <img id="casa-logo" src={require('./casa.png')} alt="Casa Logo" />
                    </Col>
                </Row>
            </Container>
        </Slide>,

        ];
        fullPageOptions.slides = slides;

        return (
            <Fullpage onSlideChangeStart={this.onSlideChangeStart} onSlideChangeEnd={this.onSlideChangeEnd} {...fullPageOptions}>
            </Fullpage>
        );
    }
}

export default App;
