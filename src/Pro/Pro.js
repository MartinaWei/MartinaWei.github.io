import React, { Component } from 'react';
import styled from 'styled-components'


const Container = styled.div`
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;
    padding-top: 20vh;
    text-align: center;
`;

const Card = styled.div`
    display: inline-block;
    vertical-align: top;

    p {
        text-align: right;
        margin: 20px;
        margin-right: 40px;
        font-size: 18px;
    }
`;

const Header = styled.div`
    height: 74px;
    display : flex;

    h1 {
        margin: auto 20px;
        margin-left: 60px;
        font-size: 36px;
        text-align: left;
        color: #545454;
    }
`;

const Divider = styled.div`
    border-bottom: #F6E1C0 solid 5px;
    margin: 0 20px;
    margin-right: 40px;
    margin-left: 60px;
    margin-top: 20px;
`;

const Orange = styled.span`
    color: #F5AF3D;
`;


class Pro extends Component {

    render() {
        return (
            <Container>
                <Card>
                    <Header>
                        <h1>
                            <Orange>Data</Orange><br/>
                            Analysis
                        </h1>
                    </Header>
                    <Divider></Divider>
                    <p>
                        Model Construction<br/>
                        Time series data analysis<br/>
                        Pattern Recognition
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
                        Usibility/ Verification
                    </p>
                </Card>
                <Card>
                    <Header>
                        <h1><Orange>Research</Orange></h1>
                    </Header>
                    <Divider></Divider>
                    <p>
                        Energy Comsumption
                    </p>
                </Card>
            </Container>
        );
    }

}

export default Pro;
