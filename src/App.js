import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Pro from './Pro/Pro.js';
import Works from './Works/Works.js';
import Service from './Works/Service/Service.js';
import Energy from './Works/Energy/Energy.js';
import { Element, Link } from 'react-scroll';


import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

import About from './About/About.js';

const Header = styled.div`
    text-align: center;
    position: fixed;
    width: 100vw;
    background-color: white;
    padding: 20px;
    z-index: 1;
`;

const LinkContainer = styled.div`
    width: 300px;
    display: inline-block;

    a {
        margin: 10px;
        font-size: 18px;
        color: #4A4948;
        text-decoration: none;
        cursor: pointer;
    }

    .active {
        color: #9B9B9B;
    }
`;

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            active: 0
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            let h = window.innerHeight;
            let currentH = window.pageYOffset;

            this.setState({ active: Math.floor((currentH) / h)});
        })
    }

    componentWillUnmount(){
        window.removeEventListener('scroll');
    }

    render() {
        let linksData = ['About', 'Professions', 'Works'];

        let links = linksData.map((d, i) => {
            let c = this.state.active === i ? 'active': '';

            return (
                <Link key={i} to={d} className={c} smooth={true} duration={500}>
                    {d}
                </Link>
            )
        })

        return (
            <Router>
                <div className="App">
                    <Route path="/" exact render={() => (
                        <div>
                            <Header>
                                <LinkContainer>
                                    {links}
                                </LinkContainer>
                            </Header>

                            <Element name="About">
                                <About></About>
                            </Element>
                            <Element name="Professions">
                                <Pro></Pro>
                            </Element>
                            <Element name="Works">
                                <Works></Works>
                            </Element>
                        </div>
                    )}/>
                    <Route path="/service" render={() => (
                        <Service/>
                    )} />
                    <Route path="/energy" render={() => (
                        <Energy/>
                    )} />
                </div>
            </Router>
        );
    }
}

export default App;
