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
import Elder from './kiosk.png';
import Flowpng from './flow.png';
import P1 from './pg1.png';
import P2 from './pg2.png';
import P3 from './pg3.png';
import Photo from './photo.png';

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

const Img = ({ children, src }) => (
    <div className="col-xs" style={{marginBottom: 15}}>
        <img src={src} alt=""/>
        <p style={{margin: '10px 50px'}}>{children}</p>
    </div>
)

const Link = styled.a`
    display: block;
    text-align: center;
    font-size: 24px;
    text-decoration: underline;
`;

class Flow extends Component {

    render() {
        return (
            <div>
                <Intro>
                    <h2>Improving self-service Kiosk in Hospital</h2>
                    <p>The aim of hospital where installed many self-service Kiosk is to save patients time and help nurses foucus on their work. However, the design of the UX process had some problems, so it cannot achieve their purpose. Therefore, the project is aiming to improve the UX of Kiosk.</p>

                    <div className="row">
                        <div className="col-xs">
                            <h3>Where</h3>
                            <p>This is a in-class project, and our target audience is people who use kiosk in NTU hospital        </p>
                        </div>
                        <div className="col-xs">
                            <h3>When</h3>
                            <p>Sep 2016 - Jan 2016</p>
                        </div>
                        <div className="col-xs">
                            <h3>Team</h3>
                            <p>
                                Yang Ting Wei - UI Design<br/>
                                Aaron Jen - Front End
                            </p>
                        </div>
                    </div>

                    <div style={{marginTop: 50}} className="row">
                        <div>
                            <img style={{marginLeft: 120}} src={Elder} alt=""/>
                        </div>
                        <div>
                            <img style={{marginLeft: 120, marginTop: 25}} src={Flowpng} alt=""/>
                        </div>
                    </div>

                </Intro>
                <Container style={{marginTop: 650, paddingTop: 30}}>
                    <PatternTitle>Some Examples of the UI Redesign</PatternTitle>

                    <div className="row">
                        <Img src={P1}>
                            The current self-service Kiosk needs the IC card to check the identity. We consider the situation that patients forget brining IC cards.
                                Besides, the current keyboard looks like a computerkeyborad. We changed the keyboard by phone order, which is more intutive.
                        </Img>

                        <Img src={P2}>
                            Remind patients of their information.
                        </Img>
                    </div>

                    <div className="row">
                        <Img src={P3}>
                            After check-in, many pateints forgot taking away their IC cards. The page is a reminder.
                        </Img>

                        <Img src={Photo}></Img>
                    </div>


                    <Link href={'https://github.com/bugarma/fast-develop'}>Prototype Link</Link>
                </Container>
            </div>
        );
    }

}

export default Flow;
