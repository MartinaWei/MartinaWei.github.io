import React, { Component } from 'react';
import styled from 'styled-components';

import github from './img/github.png';
import facebook from './img/facebook.png';
import linkedin from './img/linkedin.png';
import cv from './img/cv.png';
import DNA from './img/DNA_word.png';

const Container = styled.div`
    height: 100vh;
    min-height: 600px;
    display: flex;
    align-items: center;
`

const MidContainer = styled.div`
    display: flex;
    padding-top: 61px;
    box-sizing: border-box;
    justify-content: center;
`;


const LeftDiv = styled.div`
    width: 100%;
    padding: 5%;
    padding-right: 0;
    box-sizing: border-box;

    h1 {
        font-size: 24px;
    }

    p {
        font-size: 14px;
        margin-bottom: 30px;
    }

    ._content {
        margin-bottom: 100px
    }
    img {
        margin-right: 20px;
    }
`;

const ImgContainer = styled.div`
    width: 50%;
    display: inline-block;
    img {
        display: block;
        margin-right: 0;
        float: right;
        max-width: 100%;
        max-height: 390px;
    }
`;

class About extends Component {
    render() {
        return (
            <Container className="row align-items-center">
                <MidContainer className="col">
                    <LeftDiv>
                        <div style={{width: "50%", display: "inline-block"}}>
                            <h1>
                                Yang-Ting<br/>
                                Wei
                            </h1>
                            <p>
                                mtnawei@gmail.com<br/>
                                Taipei, Taiwan
                            </p>
                            <div className="_content">
                                I am a human-centered design technologist who likes to program to meet human need.
                                Also, I understand how to making use of data to improve products.<br/>
                                I focus on the domain of energy and health care.<br/>
                                Proficient in designing models and algorithm to analyze human behavior.
                            </div>
                            <div className="_img">
                                <img src={cv} alt=""/>
                                <img src={facebook} alt=""/>
                                <img src={github} alt=""/>
                                <img src={linkedin} alt=""/>
                            </div>
                        </div>
                        <ImgContainer>
                            <img src={DNA} alt=""/>
                        </ImgContainer>
                    </LeftDiv>
                </MidContainer>
            </Container>
        );
    }

}

export default About;
