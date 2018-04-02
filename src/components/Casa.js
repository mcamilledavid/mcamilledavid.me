import React, { Component } from 'react';
import { Fullpage, Slide } from 'fullpage-react';
import { withRouter } from "react-router-dom";
import { Container, Row, Col } from 'react-grid-system';

class Casa extends Component {
    handleClick = () => {
        this.props.history.push('/work');
    }

    render() {
        const fullPageOptions = {
            scrollSensitivity: 20,
            touchSensitivity: 5,
            scrollSpeed: 150,
            resetSlides: false,
            hideScrollBars: true,
            enableArrowKeys: true,
        };

        const slides = [
            <Slide className="slide-1">
                <div className="back-button" onClick={() => this.handleClick('/')}>&#8592;</div>
                <a href="//github.com/mcamilledavid/casa"><img src={require('../media/link.png')} alt="Casa" className="link-button"/></a>
                <Container className="container">
                    <Row>
                        <Col>
                            <div className="container">
                                <h1 className="h1">SF State's Casa</h1>
                                <h2 className="h2">A unique solution for students looking for reliable housing.</h2>
                            </div>
                            <div className="image-container">
                                <img src={require('../media/cp-1.png')} alt="Cooking Panda" />
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="accent-container"></div>
            </Slide>,
            <Slide className="slide-2">
                <Container className="container">
                    <Row>
                        <Col sm={12} md={5} lg={5} xl={5}>
                            <h1 className="h1">Capstone Project</h1>
                            <h2 className="h2">Touched the entire stack from designing the database to writing the API to implementing the UI.</h2>
                        </Col>
                    </Row>
                </Container>
                <div className="image-container">
                    <img className="mobile" src={require('../media/cp-2.png')} alt="Cooking Panda" />
                    <img className="desktop" src={require('../media/cp-3.png')} alt="Cooking Panda" />
                </div>
            </Slide>
        ];
        fullPageOptions.slides = slides;

        return <Fullpage {...fullPageOptions} />
    }
}

export default withRouter(Casa);