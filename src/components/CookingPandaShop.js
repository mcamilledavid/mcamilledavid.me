import React, { Component } from 'react';
import { Fullpage, Slide } from 'fullpage-react';
import { withRouter } from "react-router-dom";

class CookingPandaShop extends Component {
    handleClick = () => {
        this.props.history.push('/');
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
            <Slide>
                <div className="back-button-container">
                    <div className="back-button" onClick={() => this.handleClick()}>&#8592;</div>
                </div>
            </Slide>,
            <Slide> Slide 2
            </Slide>,
            <Slide> Slide 3
            </Slide>
        ];
        fullPageOptions.slides = slides;

        return <Fullpage {...fullPageOptions} />
    }
}

export default withRouter(CookingPandaShop);