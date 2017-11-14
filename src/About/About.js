import React, { Component } from 'react';
import styled from 'styled-components';

import github from './img/github.png';
import facebook from './img/facebook.png';
import linkedin from './img/linkedin.png';
import cv from './img/cv.png';

const Container = styled.div`
    height: 100vh;
`

const MidContainer = styled.div`
    display: flex;
    padding-top: 20vh;
    box-sizing: border-box;
`;


const LeftDiv = styled.div`
    background-color: #FBE2BB;
    width: 25%;
    max-width: 270px;
    height: 250px;
    padding: 5%;
    box-sizing: border-box;

    h1 {
        font-size: 24px;
    }

    p {
        font-size: 14px;
    }
`;

const RightDiv = styled.div`
    flex: 1;
    position: relative;

    div {
        position: absolute;
        bottom: 0px;
        padding: 0px 25px;
        padding-right: 15%;
    }
`;

const Footer = styled.div`
    display: flex;
    width: 100%;
    height: calc(100vh - 400px);
    position: relative;

    div {
        position: absolute;
        top: 50%;
        right: 30px;
        margin: auto 0;
    }

    img {
        margin: 0 10px;
    }
`;

class About extends Component {
    render() {
        return (
            <Container>
                <MidContainer>
                    <LeftDiv>
                        <h1>
                            Yang-Ting<br/>
                            Wei
                        </h1>
                        <p>
                            mtnawei@gmail.com<br/>
                            Taipei, Taiwan
                        </p>
                    </LeftDiv>
                    <RightDiv>
                        <div>
                            I am a human-centered design technologist who likes to program to meet human need.
                            Also, I understand how to making use of data to improve products.
                            I focus on the domain of energy and health care.
                            Proficient in designing models and algorithm to analyze human behavior.
                        </div>
                    </RightDiv>
                </MidContainer>
                <Footer>
                    <div>
                        <img src={cv} alt=""/>
                        <img src={facebook} alt=""/>
                        <img src={github} alt=""/>
                        <img src={linkedin} alt=""/>
                    </div>
                </Footer>
            </Container>
        );
    }

}

export default About;
