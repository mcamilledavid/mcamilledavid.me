import React, { Component } from 'react';
import { Fullpage, Slide, HorizontalSlider } from 'fullpage-react';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import { Container, Row, Col } from 'react-grid-system';
import Slider from 'react-slick'
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        var settings = {
            dots: false,
            infinite: true,
            speed: 200,
            autoplay: true,
            autoplaySpeed: 750,
            responsive: [ { breakpoint: 768, settings: { slidesToShow: 6, slidesToScroll: 1 } }, { breakpoint: 1024, settings: { slidesToShow: 8, slidesToScroll: 1 } }, { breakpoint: 100000, settings: { slidesToShow: 8, slidesToScroll: 1 } } ]
        };

        const horizontalSliderName = horizontalSliderProps.name;
        const horizontalActive = this.state.active[horizontalSliderName];
        const nextHorizontalSlide = changeHorizontalSlide.bind(null, horizontalSliderName, horizontalActive + 1);

        const fullPageOptions = {
            scrollSensitivity: 2,
            touchSensitivity: 2,
            scrollSpeed: 500,
            resetSlides: true,
            hideScrollBars: false,
            enableArrowKeys: true,
            activeSlide: 0
        };

        const horizontalNav = (
            <div id='horizontal-nav'>
                <span onClick={nextHorizontalSlide}><button className="button">Next &#8594;</button></span>
            </div>
        );

        const horizontalSlides = [
        <Slide>
            <video className="vid-background" autoPlay loop>
                <source src={require('./media/la.mp4')} type="video/mp4" />
            </video>
            <img className="img-background" src={require('./media/la-still.png')} alt="LA" />
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
                            <img id="shaka-emoji" src={require('./media/emoji.png')} alt="Shaka Emoji" />
                        </h2>
                        <a href="mailto:ma.camilledavid@gmail.com" className="button">Contact Me</a>
                    </Col>
                </Row>
            </Container>
        </Slide>
        ];
        horizontalSliderProps.slides = horizontalSlides;

        const slides = [
        <Slide id="intro">
            <Container>
                <Row>
                    <Col xs={12}>
                        <div id="social">
                            <a href="mailto:ma.camilledavid@gmail.com">Email</a>
                            <a href="http://www.linkedin.com/in/mcamilledavid">LinkedIn</a>
                            <a href="http://www.github.com/mcamilledavid">Github</a>
                            <a href="http://www.instagram.com/mcamilledavid">Instagram</a>
                        </div>
                        <div className="container">
                            <h2 className="h2">Hello, my name is</h2>
                            <h1><Typist className="h1">Camille David.</Typist></h1>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className='scroll-container'><div className="icon-scroll"></div></div>
        </Slide>,
        <HorizontalSlider id='profile' {...horizontalSliderProps}></HorizontalSlider>,
        <Slide id="work">
            <Container>
                <Row>
                    <Col xs={6} sm={6} md={6} lg={6} id="teamft">
                        <img id="teamft-logo" src={require('./media/teamft.png')} alt="Fitness Therapy Logo" />
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6} id="cp">
                        <img id="cp-logo" src={require('./media/cp.png')} alt="Cooking Panda Logo" />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col xs={6} sm={6} md={6} lg={6} id="cpshop">
                        <img id="cpshop-logo" src={require('./media/cpshop.png')} alt="Cooking Panda Shop Logo" />
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6} id="casa">
                        <img id="casa-logo" src={require('./media/casa.png')} alt="Casa Logo" />
                    </Col>
                </Row>
            </Container>
        </Slide>,
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
                <div className="icon-container"><img className="icon" src={require('./skills/html.png')} alt="HTML" /></div>
                <div className="icon-container"><img className="icon" src={require('./skills/css.png')} alt="CSS" /></div>
                <div className="icon-container"><img className="icon" src={require('./skills/js.png')} alt="JavaScript" /></div>
                <div className="icon-container"><img className="icon" src={require('./skills/jquery.png')} alt="jQuery" /></div>
                <div className="icon-container"><img className="icon" src={require('./skills/bootstrap.png')} alt="Bootstrap" /></div>
                <div className="icon-container"><img className="icon" src={require('./skills/foundation.png')} alt="Foundation" /></div>
                <div className="icon-container"><img className="icon" src={require('./skills/grunt.png')} alt="Grunt" /></div>
                <div className="icon-container"><img className="icon" src={require('./skills/sass.png')} alt="SASS" /></div>
                <div className="icon-container"><img className="icon" src={require('./skills/wp.png')} alt="WordPress" /></div>
                <div className="icon-container"><img className="icon" src={require('./skills/drupal.png')} alt="Drupal" /></div>
                <div className="icon-container"><img className="icon" src={require('./skills/php.png')} alt="PHP" /></div>
                <div className="icon-container"><img className="icon" src={require('./skills/java.png')} alt="Java" /></div>
                <div className="icon-container"><img className="icon" src={require('./skills/mysql.png')} alt="MySQL" /></div>
                <div className="icon-container"><img className="icon" src={require('./skills/mongodb.png')} alt="MongoDB" /></div>
                <div className="icon-container"><img className="icon" src={require('./skills/node.png')} alt="Node.js" /></div>
                <div className="icon-container"><img className="icon" src={require('./skills/express.png')} alt="Express" /></div>
                <div className="icon-container"><img className="icon" src={require('./skills/aws.png')} alt="AWS" /></div>
                <div className="icon-container"><img className="icon" src={require('./skills/linux.png')} alt="Linux" /></div>
                <div className="icon-container"><img className="icon" src={require('./skills/apache.png')} alt="Apache" /></div>
                <div className="icon-container"><img className="icon" src={require('./skills/nginx.png')} alt="Nginx" /></div>
                <div className="icon-container"><img className="icon" src={require('./skills/git.png')} alt="Git" /></div>
                <div className="icon-container"><img className="icon" src={require('./skills/terminal.png')} alt="Terminal" /></div>
                <div className="icon-container"><img className="icon" src={require('./skills/photoshop.png')} alt="Photoshop" /></div>
                <div className="icon-container"><img className="icon" src={require('./skills/illustrator.png')} alt="Illustrator" /></div>
                <div className="icon-container"><img className="icon" src={require('./skills/sketch.png')} alt="Sketch" /></div>
            </Slider>
        </Slide>
        ];
        fullPageOptions.slides = slides;

        return (
            <Fullpage onSlideChangeStart={this.onSlideChangeStart} onSlideChangeEnd={this.onSlideChangeEnd} {...fullPageOptions}></Fullpage>
        );
    }
}

export default App;
