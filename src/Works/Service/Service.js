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
import How from './How.js';
import Team from './teamname.png';
import Value from './value.png';
import Main from './main.png';



const ConStyle = {
    marginTop: 600
}

class Service extends Component {
    render() {
        return (
            <div>
                <Intro>
                    <img src={Main} alt=""/>
                </Intro>
                <Container style={ConStyle}>
                    <div className="padding">
                        <div className="pad-left">
                            <h1 style={{marginTop: 0}}>Activity Design</h1>
                            <Section>
                                <InlineDiv style={{width: '60%'}}>
                                    <h2>Little Holmes in Leofoo Wonderland (2016)</h2>
                                    <p>Leofoo Resort Guanshi is an ecological hotel located in Hsinchu, Taiwan. They attract many visitors by providing the chance wchich people can interact with animals. However, they found most of their customers are not repeated customers. Therefore, they want to attract more repeat customers by improving their service. </p>
                                </InlineDiv>

                                <InlineDiv style={{width: '40%'}}>
                                    <img style={{maxHeight: 160}} src={Team} alt=""/>
                                </InlineDiv>
                            </Section>

                            <Section>
                                <h2>Skill</h2>
                                <p>User Experience Research (Contextual Inquiry), User Experience Design, Unity3D, C</p>
                            </Section>
                        </div>

                        <Section className="pad-left" style={{backgroundColor: '#F3EADC', paddingTop: 10}}>
                            <h2>Methodology</h2>

                            <div style={{width: 'calc(100% - 225px)'}}>
                                <Box header={"User Experience Research"}>
                                    <BoxSection>
                                        <h3>
                                            Problem of the company<br/>
                                            Customer Value
                                        </h3>
                                        <p>We found that customers, who stayed in the ecological hotel, wanted to experience mother nature with their child. Also, they wanted to have a special interactive experience with animals. On the other hand, the owner of the hotel wanted to combine technology in a new activity. Therefore, our design fused the customer values and owners need.</p>
                                    </BoxSection>
                                </Box>

                                <div style={{paddingLeft: 250}}>
                                    <Box header={"User Experience Design"}>
                                        <BoxSection>
                                            <h3>
                                                Project Goal<br/>
                                                Target Audience<br/>
                                                Prototype
                                            </h3>
                                            <p>Our prototype let children explore the whole hotel and interact with animal's avatar by i Pad.  The activity has been carried out at night, since it is time that all of animas fell into sleep. That is, the design enables kids expand the experience of animals.</p>
                                        </BoxSection>
                                    </Box>
                                </div>
                            </div>

                            <div style={{marginLeft: 'calc(100% - 225px)', width: 225}}>
                                <Box header={"User Test"}>
                                    <BoxSection>
                                        <h3>Design Itereation</h3>
                                    </BoxSection>
                                </Box>
                            </div>
                            <div style={{paddingBottom: 40}}>
                                <img src={Value} alt=""/>
                            </div>
                        </Section>
                    </div>
                    <Section>
                        <Box header={"How it works?"}>
                            <How/>
                        </Box>
                    </Section>
                </Container>
            </div>
        );
    }

}

export default Service;
