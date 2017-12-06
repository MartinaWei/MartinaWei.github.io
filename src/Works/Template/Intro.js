import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Header.js';

const Wrapper = styled.div`
    position: fixed;
    z-index: -1;
    top: 0;
    max-width: 1024px;
`;


class Intro extends Component {

    render() {
        return (
            <Wrapper>
                <Header/>
                <div style={{marginTop: 80}}>
                    {this.props.children}
                </div>
            </Wrapper>
        );
    }

}

export default Intro;
