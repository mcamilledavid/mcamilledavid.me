import React, { Component } from 'react';
import { Fullpage, Slide } from 'fullpage-react';
import { withRouter } from "react-router-dom";
import { Container, Row, Col } from 'react-grid-system';

class CookingPandaShop extends Component {
    handleClick = () => {
        this.props.history.push('/work');
    }

    render() {
        const fullPageOptions = {
            scrollSensitivity: 15,
            touchSensitivity: 1,
            scrollSpeed: 175,
            resetSlides: false,
            hideScrollBars: false,
            enableArrowKeys: true,
        };

        const slides = [
            <Slide className="slide-1">
                <div className="back-button" onClick={() => this.handleClick('/')}>&#8592;</div>
                <Container className="container">
                    <Row>
                        <Col>
                            <div className="container">
                                <h1 className="h1">Cooking Panda Shop</h1>
                                <h2 className="h2">An e-commerce site powered by Shopify.</h2>
                            </div>
                            <div className="image-container">
                                <img src={require('../work/cp-shop-1.png')} alt="Cooking Panda" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Slide>,
            <Slide className="slide-2">
                <Container className="container">
                    <Row>
                        <Col sm={12} md={5} lg={5} xl={5}>
                            <h1 className="h1">Shopping made easy</h1>
                            <h2 className="h2">A simple design that showcases products more visually through videos.</h2>
                        </Col>
                    </Row>
                </Container>
                <div className="image-container">
                    <img className="mobile" src={require('../work/cp-shop-2.png')} alt="Cooking Panda" />
                    <img className="desktop" src={require('../work/cp-shop-3.png')} alt="Cooking Panda" />
                </div>
            </Slide>
        ];
        fullPageOptions.slides = slides;

        return <Fullpage {...fullPageOptions} />
    }
}

export default withRouter(CookingPandaShop);