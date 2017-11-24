import React, { Component } from 'react';
import styled from 'styled-components';
import Arrow from '../arrow.png';
import Fig1 from './fig1.png';
import Fig2 from './fig2.png';
import Fig3 from './fig3.png';
import Fig4 from './fig4.png';
import Fig5 from './fig5.png';
import Fig6 from './fig6.png';

const Container = styled.div`
    h2 {
        font-size: 18px;
    }
`;

const YellowBlock = styled.div`
    display: inline-flex;
    background-color: #F4DFBC;
    width: 20%;
    height: 70px;
    vertical-align: top;
    text-align: center;

    div {
        margin: auto;
    }
`;

const Exploration = styled.div`
    img {
        width: 100%;
    }

    .first {
        vertical-align: top;
        display: inline-block;
        width: 40%;
        img {
            width: 80%;
        }
        margin-right: 10%;
    }

    .second {
        display: inline-block;
        vertical-align: top;
        width: 40%;
    }
`;

const Feature = styled.div`
    margin-top: 40px;
    h2 {
        display: inline-block;
        width: 250px;
        vertical-align: top;
        margin: 0;
    }

    p {
        display: inline-block;
        width: 750px;
        margin: 0;
    }
`;

const Model = styled.div`
    margin-top: 80px;

    * {
        vertical-align: top;
    }
    h2 {
        display: inline-block;
        width: 250px;
        vertical-align: top;
        margin: 0;
    }

    img {
        width: 360px;
    }

    p {
        display: inline-block;
        width: 360px;
        margin: 0;
        margin-left: 30px;
    }
`;

const Forcast = styled.div`
    margin-bottom: 50px;
    * {
        vertical-align: top;
    }
    h2 {
        width: 250px;
        vertical-align: top;
        margin: 0;
        margin-bottom: 30px;
    }

    img {
        width: 100%;
    }

    div {
        display: inline-block;
        width: 450px;
        vertical-align: top;
        margin: 0 30px;
    }

    p {
        margin: 10px 0;
        margin-left: 30px;
    }
`;

class M1 extends Component {

    render() {
        return (
            <Container>
                <div style={{margin: 10}}>
                    <YellowBlock>
                        <div>
                            Data<br/>
                            (From Building<br/>
                            Automation System)
                        </div>
                    </YellowBlock>

                    <YellowBlock>
                        <div>
                            Data<br/>
                            Exploration
                        </div>
                    </YellowBlock>

                    <YellowBlock>
                        <div>
                            Extracting<br/>
                            Features
                        </div>
                    </YellowBlock>

                    <YellowBlock>
                        <div>
                            Designing<br/>
                            Structure<br/>
                            of Model
                        </div>
                    </YellowBlock>

                    <YellowBlock>
                        <div>Forecaste</div>
                    </YellowBlock>
                </div>
                <img src={Arrow} style={{width: '100%'}} alt=""/>

                <Exploration>
                    <h2>．Data Exploration</h2>

                    <div className="first">
                        <img src={Fig1} alt=""/>
                        <p>The electricity meter records electricity consumption of the building for a month. From the Figure, we can observe the approximate working hours.</p>
                    </div>

                    <div class="second">
                        <div>
                            <img src={Fig2} alt=""/>
                            <p>The average people distribution over 24 hours. It is related to  electricity consumption.</p>
                        </div>

                        <div>
                            <img src={Fig3} alt=""/>
                            <p>The figure shows the total electricty consumption over the X axis, and records (from one of 128 sensor) along the Y-axis. We can find the unrelated sensors which will be unconsidered by this way.</p>
                        </div>
                    </div>
                </Exploration>

                <Feature>
                    <h2>．Extracting Features</h2>
                    <p>Since electricty data belongs to time-series data, we extract features from different time sections. By Calculating statistical values, including mean, max, min, variance, we can make a time depend feature pool. Furthermore, it is an essential part  to  electricity consumption whether the day is a work day. Therefore, day condition will generate 2 features in the pool.</p>
                </Feature>

                <Model>
                    <h2>．Structure of the Model</h2>
                    <img src={Fig4} alt=""/>
                    <p>Features will be selected from feature pools according to their time seperately. And the model will generate the after-24hr  electricity consumption.</p>
                </Model>

                <Forcast>
                    <h2>．Forcasting Accuracy</h2>
                    <div>
                        <img src={Fig5} alt=""/>
                        <p>Figure shows the accuarcy of prediction of electricity consumption  among one day of the test data.</p>
                    </div>
                    <div>
                        <img src={Fig6} alt=""/>
                        <p>Figure shows the average accuracy of prediction of electricity consumption  during all of the test data.(30 days)</p>
                    </div>
                </Forcast>
            </Container>
        );
    }

}

export default M1;
