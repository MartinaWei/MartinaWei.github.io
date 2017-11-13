import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

import About from './About/About.js';

const Header = styled.div`
    text-align: center;
    margin: 20px;
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
    render() {
        return (
            <Router>
                <div className="App">
                    <Header>
                        <LinkContainer>
                            <NavLink to="/" exact>About</NavLink>
                            <NavLink to="/professions">Professions</NavLink>
                            <NavLink to="/works">Works</NavLink>
                        </LinkContainer>
                    </Header>
                    <About></About>
                </div>
            </Router>
        );
    }
}

export default App;
