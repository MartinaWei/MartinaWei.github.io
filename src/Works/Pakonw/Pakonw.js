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
import Office from './Office.png';
import Bar1 from './bar1.png';
import Bar2 from './bar2.png';
import Bar3 from './bar3.png';
import Bar4 from './bar4.png';
import Solution from './solution.png';
import Main from './main.png';

const Block = styled.div`
    font-size: 18px;
    font-family: PingFang TC;
    text-align: center;
    margin: 40px 0;

    header {
        margin-bottom: 30px;
        font-weight: 500;
    }
`;

const FourDiv = ({ children }) => (
    <InlineDiv style={{width: '25%', paddingRight: 20}}>
        {children}
    </InlineDiv>
);

const HighLight = styled.div`
    background-color: black;
    color: white;
    border-radius: 10px;
    padding: 20px 0;
`;

const BarGroup = styled.div`
    text-align: center;
    margin-top: 25px;
    img {
        width: 350px;
    }
`;


class Pakonw extends Component {

    render() {
        return (
            <div>
                <Intro src={Main}></Intro>
                <Container style={{marginTop: 400}}>
                    <h1>Helth Care Project I</h1>
                    <Section>
                        <InlineDiv>
                            <h2>Pakonw (2015)</h2>
                            <p>Pakonw was named after panel. It is a system to save patient’s time and provide them with trustworthy information on their waiting time in hospital.</p>
                        </InlineDiv>

                        <InlineDiv>
                            <h2>Team Role</h2>
                            <p>
                                Collaborated with Ginny Yang, Yu-Hsuan Yeh, Tsung-Han Lu;
                                Visual Design credit to Ginny Yang
                            </p>
                        </InlineDiv>
                    </Section>

                    <Section>
                        <h2>Methodology</h2>

                        <div style={{width: 'calc(100% - 250px)'}}>
                            <Box header="User Experience Research">
                                <BoxSection>
                                    <h3>
                                        Contextual Problem<br/>
                                        Project Goal
                                    </h3>
                                    <p>In Taiwan, it is common that people make resrvation online to see a doctor. Some hospital provides approximate time for patients to come. However, they are often untrustworthy. Pateints need to waste much time in hospitals before seeing a doctor. So, our objective is to design a system that provide patients with trustworthy information on their wiat time in hospital.</p>
                                </BoxSection>
                            </Box>
                        </div>

                        <div style={{marginLeft: 'calc(100% - 250px)', width: 250}}>
                            <Box header="User Experience Design">
                                <BoxSection>
                                    <h3>
                                        Prototype<br/>
                                        Design Itereation
                                    </h3>
                                </BoxSection>
                            </Box>
                        </div>


                    </Section>

                    <Section>
                        <h2>Contextual Research</h2>

                        <FourDiv style={{width: '25%'}}>
                            <Block>
                                <header>A. Young People& Engineers</header>
                                familiar with technology, can utilize information from apps or websites.
                            </Block>
                        </FourDiv>

                        <FourDiv style={{width: '25%'}}>
                            <Block>
                                <header>B. Elders</header>
                                They can endure waiting,
                                They also enjoy chatting with other elder patients.
                            </Block>
                        </FourDiv>

                        <FourDiv style={{width: '25%'}}>
                            <Block>
                                <header>C. Housewives&Unployeds</header>
                                They can endure waiting,
                                but they need some entertaintings, such as reading news on smart phones.
                            </Block>
                        </FourDiv>

                        <FourDiv style={{width: '25%'}}>
                            <Block>
                                <header>D. Office Workers</header>
                                <HighLight>They have few time to wait and limitated knowledge on advanced technologies.</HighLight>
                            </Block>
                        </FourDiv>
                    </Section>

                    <Section>
                        <h2>Persona we focus</h2>
                        <p style={{marginLeft: 300, fontFamily: "Avenir Next", fontSize: 18}}><i>“I have to back to my work as soon as possible.”</i></p>
                        <div style={{marginTop: 20}}>
                            <InlineDiv style={{width: '20%'}}>
                                <img style={{width: 180}} src={Office} alt=""/>
                            </InlineDiv>
                            <InlineDiv style={{width: '80%', display: 'inline-flex'}}>
                                <BarGroup>
                                    <img src={Bar1} alt=""/>
                                    <img src={Bar2} alt=""/>
                                </BarGroup>
                                <BarGroup>
                                    <img src={Bar3} alt=""/>
                                    <img style={{marginTop: 10}} src={Bar4} alt=""/>
                                </BarGroup>
                            </InlineDiv>
                        </div>
                    </Section>

                    <Section>
                        <h2>Our Solution</h2>
                        <img style={{maxWidth: 1080, marginTop: 30}} src={Solution} alt=""/>
                    </Section>
                </Container>
            </div>
        );
    }

}

export default Pakonw;
