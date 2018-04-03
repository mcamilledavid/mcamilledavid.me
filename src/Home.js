import React, { Component } from 'react';
import { Fullpage, Slide, HorizontalSlider } from 'fullpage-react';
import { withRouter } from "react-router-dom";
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import { Container, Row, Col } from 'react-grid-system';
import Slider from 'react-slick'
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import skills from './data/skills';
import intro from './data/intro';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: { horizontalSlider: 0 }
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

    handleClick = () => {
        this.props.history.push('/work');
    }

    render() {
        /* Full Page Settings */
        const { changeHorizontalSlide } = Fullpage;

        const fullPageOptions = {
            scrollSensitivity: 15,
            touchSensitivity: 5,
            scrollSpeed: 300,
            resetSlides: false,
            hideScrollBars: false,
            enableArrowKeys: true,
            activeSlide: 0
        };

        const horizontalSliderProps = {
            name: 'horizontalSlider',
            infinite: true
        };

        const horizontalSliderName = horizontalSliderProps.name;
        const horizontalActive = this.state.active[horizontalSliderName];
        const nextHorizontalSlide = changeHorizontalSlide.bind(null, horizontalSliderName, horizontalActive + 1);

        const horizontalNav = (
            <div id='horizontal-nav'><span onClick={nextHorizontalSlide}><button className="button">&#8594;</button></span></div>
        );

        /* Skills Icons Slider Settings */
        const settings = {
            dots: false,
            infinite: true,
            speed: 200,
            autoplay: true,
            autoplaySpeed: 750,
            responsive: [ { breakpoint: 768, settings: { slidesToShow: 6, slidesToScroll: 1 } }, { breakpoint: 1024, settings: { slidesToShow: 8, slidesToScroll: 1 } }, { breakpoint: 100000, settings: { slidesToShow: 8, slidesToScroll: 1 } } ]
        };

        /* Horizontal Slides Markup */
        const horizontalSlides = [
            <Slide>
                <video className="vid-background" autoPlay loop oncontextmenu="return false;">
                    <source src={require('./media/la.mp4')} type="video/mp4" />
                </video>
                <img className="img-background" src={require('./media/la-still.png')} alt="LA" />
                <Container className="container">
                    <Row>
                        <Col sm={12} md={9} lg={7} xl={6}>
                            <h1 className="h1">Full Stack Developer & Designer based in LA,</h1>
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
                            <h1 className="h1">Creating designs & bringing them to life is what I love to do most,</h1>
                            <h2 className="h2">but I can also pretty much jump into anything in between, from CMS to databases, even server admin & e-commerce.</h2>
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
                                <img id="shaka-emoji" src={require('./media/emoji.png')} alt="Shaka Emoji" />
                            </h2>
                            {horizontalNav}
                        </Col>
                    </Row>
                </Container>
            </Slide>
        ];
        horizontalSliderProps.slides = horizontalSlides;

        /* Vertical Slides Markup */
        const slides = [
            <Slide id="intro">
                <Container>
                    <Row>
                        <Col>
                            <div id="social">
                                {
                                    intro.social.map((link) => {
                                            return (
                                                <a href={link.url}>{link.name}</a>
                                            );
                                        }
                                    )
                                }
                            </div>
                            <div className="container">
                                <h2 className="h2">Hello, my name is</h2>
                                <h1><Typist className="h1">Camille David.</Typist></h1>
                                <div class="button" onClick={() => this.handleClick()}>View My Work</div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className='scroll-container'><div className="icon-scroll"></div></div>
            </Slide>,
            <HorizontalSlider id='profile' {...horizontalSliderProps}></HorizontalSlider>,
            <Slide id="skills">
                <Container className="container">
                    <Row className="row">
                        <Col sm={12} md={9} lg={8} xl={8} className="column">
                            <h1 className="h1">Here are some things <br/> that I can do.</h1>
                            <h2 className="h2">But I'm always trying to learn new skills and tech. Right now, I'm playing around with a Firebase backend iOS app & I just finished making this site with React.</h2>
                        </Col>
                    </Row>
                </Container>
                <Slider{...settings}>
                    {
                        skills.icons.map((icon) => {
                                return (
                                    <div className="icon-container"><img className="icon" src={require(`./skills/${icon.img}`)} alt={icon.name} /></div>
                                );
                            }
                        )
                    }
                </Slider>
            </Slide>,
            <Slide id="contact">
                <Container>
                    <Row>
                        <Col>
                            <h1 className="h1">Get in touch</h1>
                            <a href="mailto:ma.camilledavid@gmail.com" className="button">Contact Me</a>
                        </Col>
                    </Row>
                </Container>
            </Slide>,
        ];
        fullPageOptions.slides = slides;

        return (
            <Fullpage onSlideChangeStart={this.onSlideChangeStart} onSlideChangeEnd={this.onSlideChangeEnd} {...fullPageOptions}></Fullpage>
        );
    }
}

export default withRouter(Home);
