import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import styled from 'styled-components';
import Pro from './Pro/Pro.js';
import Works from './Works/Works.js';

import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

import About from './About/About.js';

const Header = styled.div`
    text-align: center;
    margin: 20px;
    position: fixed;
    width: 100vw;
`;

const LinkContainer = styled.div`
    width: 300px;
    display: inline-block;

    a {
        margin: 10px;
        font-size: 18px;
        color: #4A4948;
        text-decoration: none;
    }

    .active {
        color: #9B9B9B;
    }
`;

class App extends Component {
    scrollToEle = (ele) => {
        const node = ReactDOM.findDOMNode(this.refs[ele]);

        node.scrollIntoView({ behavior: "smooth" });
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Header>
                        <LinkContainer>
                            <NavLink onClick={() => this.scrollToEle("about")} to="/" exact>About</NavLink>
                            <NavLink onClick={() => this.scrollToEle("pro")} to="/professions">Professions</NavLink>
                            <NavLink onClick={() => this.scrollToEle("works")} to="/works">Works</NavLink>
                        </LinkContainer>
                    </Header>
                    <About ref="about"></About>
                    <Pro ref="pro"></Pro>
                    <Works ref="works"></Works>
                </div>
            </Router>
        );
    }
}

export default App;
