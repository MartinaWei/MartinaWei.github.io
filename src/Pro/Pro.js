import React, { Component } from 'react';
import styled from 'styled-components'


const Container = styled.div`
    height: 100vh;
    width: 100%;
    box-sizing: border-box;
    padding-top: 35vh;
    text-align: center;
`;

const Card = styled.div`
    display: inline-block;
    vertical-align: top;
    min-width: 300px;

    p {
        text-align: right;
        margin: 20px;
        margin-right: 40px;
        font-size: 18px;
        font-weight: bold;
        font-family: Helvetica
    }
`;

const Header = styled.div`
    height: 74px;
    display : flex;

    h1 {
        margin: auto 20px;
        margin-left: 100px;
        font-size: 36px;
        text-align: left;
        color: #545454;
        line-height: 1;
    }
`;

const Divider = styled.div`
    border-bottom: #967E7D solid 5px;
    width: 175px;
    margin-left: 100px;
    margin-top: 20px;
`;

const Orange = styled.span`
    color: #CF9E8A;
`;


class Pro extends Component {

    render() {
        return (
            <Container style={{fontFamily: 'Avenir Next'}}>
                <Card>
                    <Header>
                        <h1>
                            <Orange>Data</Orange><br/>
                            Analysis
                        </h1>
                    </Header>
                    <Divider></Divider>
                    <p>
                        Predictive Modeling<br/>
                        Data Mining and Visualization<br/>
                        Data and Quantative Analysis
                    </p>
                </Card>
                <Card>
                    <Header>
                        <h1>
                            <Orange>User</Orange><br/>
                            Experience
                        </h1>
                    </Header>
                    <Divider></Divider>
                    <p>
                        Fast Prototyping<br/>
                        UI Flow Design/ Sketch<br/>
                        Usibility & Verification
                    </p>
                </Card>
                <Card>
                    <Header>
                        <h1 style={{
                            fontSize: 24,
                            marginBottom: 0,
                            marginLeft: 84
                        }}><Orange>Programming</Orange></h1>
                    </Header>
                    <Divider style={{
                        marginLeft: 85
                    }}></Divider>
                    <p>
                        Python(Proficient)<br/>
                        Matlab(Proficient)<br/>
                        Unity3D<br/>
                        C++<br/>
                    </p>
                </Card>
            </Container>
        );
    }

}

export default Pro;
