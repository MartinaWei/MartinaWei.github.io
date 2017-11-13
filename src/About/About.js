import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    padding-top: 12%;
    box-sizing: border-box;
    height: calc(100% - 25px);
`;


const LeftDiv = styled.div`
    background-color: #FBE2BB;
    width: 25%;
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

class About extends Component {
    render() {
        return (
            <Container>
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
            </Container>
        );
    }

}

export default About;
