import React, { Component } from 'react';
import { Fullpage, Slide } from 'fullpage-react';
import { withRouter } from "react-router-dom";
import work from '../data/work';

class Work extends Component {
    handleClick = (path) => {
        this.props.history.push(path);
    }

    render() {
        const fullPageOptions = {
            scrollSensitivity: 7,
            touchSensitivity: 1,
            scrollSpeed: 175,
            resetSlides: false,
            hideScrollBars: true,
            enableArrowKeys: true,
        };

        const slides = [
            <Slide id="work">
                <div className="back-button" onClick={() => this.handleClick('/')}>&#8592;</div>
                <div class="wrapper">
                    <div class="row">
                        {
                            work.projects.map((project) => {
                                    return (
                                        <div className="tile" id={project.id} onClick={() => this.handleClick(project.path)}>
                                            <img id={project.id + "-logo"} src={require(`../work/${project.img}`)} alt={project.name + "Logo"} />
                                        </div>
                                    );
                                }
                            )
                        }
                    </div>
                </div>
            </Slide>
        ];
        fullPageOptions.slides = slides;

        return <Fullpage {...fullPageOptions} />
    }
}

export default withRouter(Work);