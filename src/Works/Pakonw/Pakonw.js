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
import Office from './office.png';
import Bar1 from './bar1.png';
import Bar2 from './bar2.png';
import Bar3 from './bar3.png';
import Bar4 from './bar4.png';
import Solution from './solution.png';
import Main from './main.png';


const Title = styled.h4`
    font-family: 'Avenir Next';
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 0;
    margin-left: 30px;
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
`;

const Card = ({ title, text }) => (
    <div style={{margin: '50px 0', width: 300}} {...this.props}>
        <p style={{textAlign: 'center', marginBottom: 20}}>{title}</p>
        <div style={{textAlign: 'center', whiteSpace: 'pre-line'}}>{text}</div>
    </div>
);

class Pakonw extends Component {

    render() {
        return (
            <div>
                <Intro>
                    <img src={Main} alt=""/>
                </Intro>
                <Container style={{marginTop: 380}}>
                    <h2>Paknow</h2>
                    <p>Paknow was named after panel. It is a system to save patient’s time and provide them with trustworthy information on their waiting time in hospital.</p>

                    <div className="row">
                        <div className="col-xs">
                            <h3>Where</h3>
                            <p>Nationa Taiwan University Hospital, Taipei, Taiwan</p>
                        </div>
                        <div className="col-xs">
                            <h3>When</h3>
                            <p>Sep 2014 - Jan 2015</p>
                        </div>
                        <div className="col-xs">
                            <h3>Team</h3>
                            <p>Collaborated with Ginny Yang, Yu-Hsuan Yeh, Tsung-Han Lu;
                                Visual Design credit to Ginny Yang, Tsung-Han Lu</p>
                        </div>
                    </div>


                    <Title>Methodology</Title>
                    <Divider/>

                    <MethWrapper className="row">
                        <div style={{width: 300}}>
                            <MethTitle>
                                User Experience Research
                            </MethTitle>
                            <p style={{margin: '10px 0'}}>
                                <i>Contextual Problem</i>
                            </p>
                            <p>
                                <i>Project Goal</i>
                            </p>
                        </div>

                        <div style={{fontFamily: 'Helvetica', fontSize: 16}} className="col-xs">
                            In Taiwan, it is common that people make resrvation online to see a doctor. Some hospital provides approximate time for patients to come. However, they are often untrustworthy. Pateints need to waste much time in hospitals before seeing a doctor. So, our objective is to design a system that provide patients with trustworthy information on their wiat time in hospital.
                        </div>
                    </MethWrapper>
                    <MethWrapper className="row">
                        <div>
                            <MethTitle>
                                User Experience Design
                            </MethTitle>
                            <p style={{margin: '10px 0'}}>
                                <i>Prototype</i>
                            </p>
                            <p>
                                <i>Design Itereation</i>
                            </p>
                        </div>
                    </MethWrapper>
                    <Title>Solution</Title>
                    <Divider/>
                    <h2 style={{textAlign: 'center', fontFamily: 'Avenir Next', fontWeight: 500}}>
                        Contextual Research
                    </h2>
                    <div className="row around-xs">
                        <Card className="col-xs"
                            title={'A. Young People& Engineers'}
                            text={'They are familiar with technology, can utilize information from apps or websites.'}
                        />
                        <Card className="row"
                            title={'B. Elders'}
                            text={`They can endure waiting,
                            They also enjoy chatting with other elder patients.`}
                        />
                    </div>

                    <div className="row around-xs">
                        <Card className="col-xs"
                            title={'C. Housewives&Unployeds'}
                            text={`They can endure waiting,
                            but they need some entertaintings, such as reading news on smart phones.`}
                        />
                        <Card className="col-xs"
                            title={'D. Office Workers'}
                            text={(
                                <div style={{
                                    backgroundColor: '#4A4A4A',
                                    color: 'white',
                                    padding: 10,
                                    borderRadius: 10
                                }}>
                                    They have few time to wait and have limitated knowledge on advanced technologies.
                                </div>
                            )}
                        />
                    </div>

                    <Title style={{textAlign: 'center', marginLeft: 0}}>Persona we focus on</Title>
                    <div className="row">
                        <div style={{marginLeft: 70, marginRight: 30}}>
                            <img src={Office} alt=""/>
                        </div>
                        <div>
                            <h4 style={{
                                textAlign: 'center',
                                fontWeight: 500,
                            }}><i>"I have to back to my work as soon as possible"</i></h4>
                            <div className="row">
                                <div className="col-xs">
                                    <img src={Bar1} alt=""/>
                                </div>
                                <div className="col-xs">
                                    <img src={Bar2} alt=""/>
                                </div>
                            </div>
                            <div style={{marginTop: 10}} className="row">
                                <div className="col-xs">
                                    <img src={Bar3} alt=""/>
                                </div>
                                <div className="col-xs">
                                    <img src={Bar4} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>


                    <Title style={{textAlign: 'center', marginLeft: 0}}>Solution</Title>
                    <img src={Solution} alt=""/>
                </Container>
            </div>
        );
    }

}

export default Pakonw;
