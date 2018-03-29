import React, { Component } from 'react';
import { Fullpage, Slide, HorizontalSlider } from 'fullpage-react';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import { Container, Row, Col } from 'react-grid-system';
import './App.css';

const { changeHorizontalSlide } = Fullpage;

const horizontalNavStyle = {
    position: 'absolute',
    width: '100%',
    top: '50%',
    zIndex: 10
};


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

        if (name === 'horizontalSlider1') {
            scrollNavStart(this.horizontalNav);
        }
    }

    onSlideChangeEnd(name, props, state, newState) {
        if (name === 'horizontalSlider1') {
            scrollNavEnd(this.horizontalNav);
        }

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
            const { active } = this.state;


            const horizontalSliderName = horizontalSliderProps.name;
            const horizontalActive = this.state.active[horizontalSliderName];

            const prevHorizontalSlide = changeHorizontalSlide.bind(null, horizontalSliderName, horizontalActive - 1);
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
                <div id='horizontal-nav' style={horizontalNavStyle}>
                    <span onClick={prevHorizontalSlide}><button>PREV</button></span>
                    <span style={{position: 'absolute', right: '0px'}} onClick={nextHorizontalSlide}><button>Next</button></span>
                </div>
            );

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
                                <h1 className="h1">In my free time, I like to watch films, play music, take videos & travel.</h1>
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

            const horizontalSlider = <HorizontalSlider id='horizontal-slider-1' {...horizontalSliderProps}>{horizontalNav}</HorizontalSlider>;


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
                horizontalSlider,
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
            <Fullpage onSlideChangeStart={this.onSlideChangeStart} onSlideChangeEnd={this.onSlideChangeEnd} {...fullPageOptions}>
            </Fullpage>
        );
    }
}


function scrollNavStart(nav) {
    // make the nav fixed when we start scrolling horizontally
    nav.style.position = 'fixed';
}

function scrollNavEnd(nav) {
    // make the nav absolute when scroll finishes
    nav.style.position = 'absolute';
}

export default App;
