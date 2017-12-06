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
import Zoo from './zoo.png';
import Values from './values.png';
import Persona from './Persona.png';
import Solution from './solution.png';


const ConStyle = {
    marginTop: 600
}

const RightWrapper = styled.div`
    h3 {
        margin-top: 10px;
        margin-bottom: 5px;
        font-weight: bold;
    }

    p {
        margin: 0;
    }
`;

const Role = styled.div`

    h4 {
        color: #6E6766;
        margin: 0;
        font-weight: 400;
    }

    h5 {
        margin: 0;
        margin-left: 60px;
    }
`;

const MethWrapper = styled.div`
    margin: 20px 30px;
    font-weight: 500;
    margin-bottom: 50px;

    p {
        font-size: 18px;
    }
`;

const MethTitle = styled.p`
    font-weight: 500;
    text-decoration: underline;
`;


class Service extends Component {
    render() {

        return (
            <div style={{fontFamily: 'Noto Sans'}}>
                <Intro>
                    <h1 style={{textAlign: 'center'}}>Activity Design</h1>
                    <div className="row">
                        <div className="col-xs">
                            <img src={Zoo} alt=""/>
                        </div>
                        <div className="col-xs">
                            <RightWrapper>
                                <h3>Where</h3>
                                <p>Leofoo Resort Guanshi, Hsinchu, Taiwan</p>

                                <h3>When</h3>
                                <p>Feb 2016 - Jul 2016</p>

                                <h3>Team Role</h3>

                                <Role>
                                    <h4>Yang-Ting Wei</h4>
                                    <h5>Unity3D(C#) & Vuforia</h5>
                                </Role>

                                <Role>
                                    <h4>BenBen Yang</h4>
                                    <h5>UI and Visual Design</h5>
                                </Role>

                                <Role>
                                    <h4>Min Hong</h4>
                                    <h5>Coordinator</h5>
                                </Role>

                                <h3>Skill</h3>
                                <p>User Experience Research (Contextual Inquiry), User Experience Design, Unity3D, C#</p>
                            </RightWrapper>
                        </div>
                    </div>

                </Intro>


                <Container style={{marginTop: 530}}>
                    <h2>Little Holmes in Leofoo Wonderland</h2>
                    <p style={{width: 600}}>Leofoo Resort Guanshi is an ecological hotel. They attract many visitors by providing the chance wchich people can interact with animals. However, they found most of their customers are not repeated customers. Therefore, they want to attract more repeat customers by improving their service.</p>


                    <img style={{marginTop: 60}} src={Values} alt=""/>

                    <h2 style={{margin: '0 20px', fontWeight: 500}}>Methodology</h2>
                    <Divider/>
                    <MethWrapper className="row">
                        <div style={{width: 300}}>
                            <MethTitle style={{marginBottom: 20}}>User Experience Research</MethTitle>
                            <p>
                                <i>Problem of company</i>
                            </p>
                            <p>
                                <i>Customer Value</i>
                            </p>
                        </div>
                        <div style={{fontFamily: 'Helvetica', fontSize: 16}} className="col-xs">
                            We found that customers, who stayed in the ecological hotel, wanted to experience mother nature with their child. Also, they wanted to have a special interactive experience with animals. On the other hand, the owner of the hotel wanted to combine technology in a new activity. Therefore, our design fused the customer values and owners need.
                        </div>
                    </MethWrapper>

                    <MethWrapper className="row">
                        <div style={{width: 300}}>
                            <MethTitle style={{marginBottom: 10}}>User Experience Design</MethTitle>
                            <p>
                                <i>Project Goal</i>
                            </p>
                            <p>
                                <i>Target Audience</i>
                            </p>
                            <p>
                                <i>Prototype</i>
                            </p>
                        </div>
                        <div style={{fontFamily: 'Helvetica', fontSize: 16}} className="col-xs">
                            Our prototype let children explore the whole hotel and interact with animal's avatar by i Pad.  The activity has been carried out at night, since it is time that all of animas fell into sleep. That is, the design enables kids expand the experience of animals.
                        </div>
                    </MethWrapper>

                    <h2 style={{margin: '0 20px', fontWeight: 500}}>Final Product</h2>
                    <Divider/>

                    <img style={{marginTop: 30}} src={Persona} alt=""/>
                    <img src={Solution} alt=""/>

                </Container>
            </div>
        );
    }

}

export default Service;
