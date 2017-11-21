import React, { Component } from 'react';
import styled from 'styled-components';
import How from './How.js';

const Container = styled.div`
    padding: 60px 80px;
    h1 {
        font-family: Avenir Next;
        font-size: 36px;
        font-weight: bold;
    }

    h2 {
        font-family: Avenir Next;
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 5px;
    }

    p {
        font-family: Helvetica;
        font-size: 18px;
        margin: 0;
    }
`;

const Top = styled.div`
    div {
        box-sizing: border-box;
        display: inline-block;
        vertical-align: top;

        width: 50%;
        padding-right: 50px;

    }
`;

const Mid = styled.div`
    margin-top: 30px;
`;

const Bot = styled.div`
    margin-top: 30px;

    h3 {
        margin: 0;
        font-size: 24px;
        font-family: Avenir Next;
        font-weight: 500;
    }
`;

const Divider = styled.div`
    border: grey solid 10px;
`;

const BoxHeader = styled.header`
    font-size: 18px;
    font-family: Avenir Next;
    font-weight: 500;
`;

const BoxSection = styled.section`
    display: flex;
    margin-bottom: 50px;

    h3 {
        flex: none;
        margin-right: 100px;
    }

    p {
        margin-top: 10px;
        font-size: 14px;
    }
`;

const Box = ({header, children}) => (
    <div>
        <BoxHeader>{header}</BoxHeader>
        <Divider/>
        {children}
    </div>
);


class Activity extends Component {
    render() {
        return (
            <Container>
                <h1>Activity Design</h1>
                <Top>
                    <div>
                        <h2>Little Holmes in Leofoo Wonderland (2016)</h2>
                        <p>Leofoo Resort Guanshi is an ecological hotel located in Hsinchu, Taiwan. They attract many visitors by providing the chance wchich people can interact with animals. However, they found most of their customers are not repeated customers. Therefore, they want to attract more repeat customers by improving their service. </p>
                    </div>

                    <div>
                        <h2>Team Role</h2>
                        <p>
                            Our team made up by 3 students from departments of Library and Information Science, Psychology and Civil Engineering separately. We did UX research and ideated together.<br/>
                            The UI was designed by Ben, the Library and Information Science student. I am responsible for making the game workable by Unity3D(C#) and Vuforia.
                        </p>
                    </div>
                </Top>

                <Mid>
                    <h2>Skill</h2>
                    <p>User Experience Research (Contextual Inquiry), User Experience Design, Unity3D, C</p>
                </Mid>

                <Bot>
                    <h2>Methodology</h2>

                    <div style={{width: '60vw'}}>
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

                    <div style={{marginLeft: '60vw', width: 225}}>
                        <Box header={"User Test"}>
                            <BoxSection>
                                <h3>Design Itereation</h3>
                            </BoxSection>
                        </Box>
                    </div>

                    <Box header={"How it works?"}>
                        <How/>
                    </Box>
                </Bot>
            </Container>
        );
    }

}

export default Activity;
