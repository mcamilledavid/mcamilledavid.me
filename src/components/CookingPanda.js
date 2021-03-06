import React, { Component } from 'react';
import { Fullpage, Slide } from 'fullpage-react';
import { withRouter } from "react-router-dom";
import { Container, Row, Col } from 'react-grid-system';

class CookingPanda extends Component {
    handleClick = () => {
        this.props.history.push('/work');
    }

    render() {
        const fullPageOptions = {
            scrollSensitivity: 7,
            touchSensitivity: 1,
            scrollSpeed: 175,
            resetSlides: false,
            hideScrollBars: false,
            enableArrowKeys: true,
        };

        const slides = [
            <Slide className="slide-1">
                <div className="back-button" onClick={() => this.handleClick('/')}>&#8592;</div>
                <a href="//cookingpanda.com"><img src={require('../media/link.png')} alt="Cooking Panda" className="link-button"/></a>
                <Container className="container">
                    <Row>
                        <Col>
                            <div className="container">
                                <h1 className="h1">Revamping Cooking Panda</h1>
                                <h2 className="h2">A complete redesign of Render Media's food vertical.</h2>
                            </div>
                            <div className="image-container">
                                <img src={require('../work/cp-1.png')} alt="Cooking Panda" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Slide>,
            <Slide className="slide-2">
                <Container className="container">
                    <Row>
                        <Col sm={12} md={5} lg={5} xl={5}>
                            <h1 className="h1">Responsive design</h1>
                            <h2 className="h2">Users are easily able to watch videos or get recipes at their finger tips.</h2>
                        </Col>
                    </Row>
                </Container>
                <div className="image-container">
                    <img className="mobile" src={require('../work/cp-2.png')} alt="Cooking Panda" />
                    <img className="desktop" src={require('../work/cp-3.png')} alt="Cooking Panda" />
                </div>
            </Slide>
        ];
        fullPageOptions.slides = slides;

        return <Fullpage {...fullPageOptions} />
    }
}

export default withRouter(CookingPanda);