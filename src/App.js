import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './Home'
import FitnessTherapy from './components/FitnessTherapy'
import CookingPanda from './components/CookingPanda'
import CookingPandaShop from './components/CookingPandaShop'
import Casa from './components/Casa'
import Work from './components/Work'

class App extends Component {
    render() {
        return (
            <Router>
                <div class="root-wrapper">
                    <Route exact path="/" component={Home} />
                    <Route path="/work" component={Work} />
                    <Route path="/fitness-therapy" component={FitnessTherapy} />
                    <Route path="/cooking-panda" component={CookingPanda} />
                    <Route path="/cooking-panda-shop" component={CookingPandaShop} />
                    <Route path="/casa" component={Casa} />
                </div>
            </Router>
        )
    }
}

export default App;