import React, { Component } from 'react';
import styled from 'styled-components';
import {
    Container,
    Section,
    Divider,
    BoxHeader,
    BoxSection,
    Box,
    InlineDiv,
    Intro
} from '../Template';
import Elder from './elder.png';
import Maru from './maru.png';
import Pattern from './apttern.png';
import Example from './example.png';

const Img = styled.img`
    display: block;
    margin: auto;
`;

const Text = styled.div`
    margin-left: 120px;
    p {
        margin-top: 30px;
    }
`;

const PatternTitle = styled.h3`
    margin: 60px 0;
    font-family: 'Avenir Next';
    font-weight: 500;
    text-align: center;
    font-size: 24px;
`;

const PatternText = {
    width: 700,
    margin: 'auto',
    fontSize: 16,
    marginBottom: 40
};

class Health extends Component {
    render() {
        return (
            <div>
                <Intro>
                    <h2>Helth Care for Elder Citizens - Pattern analysis</h2>
                    <p>Elders citizens always need more care from their family. However, most of their family have to work. Therefore, some of them will choose pasive care system to look after their elder families. To provide accuracy alert and notify their families we design some algorithm structures to improve accuracy in the forecasting elders pattens.</p>

                    <div className="row">
                        <div className="col-xs">
                            <h3>Where</h3>
                            <p>iNSIGHT center, Taiwan</p>
                        </div>
                        <div className="col-xs">
                            <h3>When</h3>
                            <p>Sep 2017 - Dec 2017</p>
                        </div>
                        <div className="col-xs">
                            <h3>Team</h3>
                            <p>The project was divided to 2 parts, UX research and data analysis seperately. I take the data analysis part.</p>
                        </div>
                    </div>



                    <div style={{marginTop: 50}} className="row">
                        <div>
                            <img style={{marginLeft: 120}} src={Elder} alt=""/>
                        </div>
                        <div>
                            <img style={{marginLeft: 120, marginTop: 25}} src={Maru} alt=""/>
                        </div>
                        <div className="col-xs">
                            <Text>
                                <p style={{marginTop: 25}}>
                                    The infrared sensors will detect where are the elders, when they are in the different room of the house
                                </p>

                                <p style={{marginTop: 35}}>
                                    we can transform data to visualize pattern
                                </p>

                                <p style={{marginTop: 55}}>
                                    we can transform data to visualize pattern
                                </p>

                                <p style={{marginTop: 55}}>
                                    The predicted patterns can be utilized for alert caregivers
                                </p>
                            </Text>
                        </div>
                    </div>



                </Intro>
                <Container style={{marginTop: 650, paddingTop: 30}}>
                    <img src={Pattern} alt=""/>
                    <PatternTitle>Pattern Prediction</PatternTitle>
                    <p style={PatternText}>
                        We transform the one-hot matrix of records (as fig show above) into class; where 0 means bathroom, 1 means bedroom, 2 means dining room ..and so on.<br/>
                        We consider the condition as time series and state related pattern, so we choose Hidden Markov Model (HMM) to predict the possible pattern.<br/>
                        <br/><br/>
                        For example, we can predict the possible state of the elder by HMM, and transform it back to one-hot matrix. And we can check if the activity is normal or not by some comparing rules.
                    </p>
                    <img src={Example} alt=""/>
                </Container>
            </div>

        );
    }

}

export default Health;
