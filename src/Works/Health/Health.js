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

class Health extends Component {
    render() {
        return (
            <div>
                <Intro>
                    <h1>Helth Care for Elder Citizens - Pattern analysis</h1>
                    <p>Elders citizens always need more care from their family. However, most of their family have to work. Therefore, some of them will choose pasive care system to look after their elder families. To provide accuracy alert and notify their families we design some algorithm structures to improve accuracy in the forecasting elders pattens.</p>

                    <h2>Where</h2>
                    <p>iNSIGHT center, Taiwan</p>
                    <h2>When</h2>
                    <p>Sep 2017 - Dec 2017</p>
                    <h2>Team</h2>
                    <p>The project was divided to 2 parts, UX research and data analysis seperately. I take the data analysis part.</p>

                    <img src={Elder} alt=""/>
                    <img src={Maru} alt=""/>
                    The infrared sensors will detect where are the elders, when they are in the different room of the house

                    we can transform data to visualize pattern

                    we can transform data to visualize pattern

                    The predicted patterns can be utilized for alert caregivers
                </Intro>
                {/* <Container style={{marginTop: '100vh'}}>
                    Pattern Prediction
                    We transform the one-hot matrix of records (as fig show above) into class; where 0 means bathroom, 1 means bedroom, 2 means dining room ..and so on.
                    We consider the condition as time series and state related pattern, so we choose Hidden Markov Model (HMM) to predict the possible pattern.

                    For example, we can predict the possible state of the elder by HMM, and transform it back to one-hot matrix. And we can check if the activity is normal or not by some comparing rules.
                </Container> */}
            </div>

        );
    }

}

export default Health;
