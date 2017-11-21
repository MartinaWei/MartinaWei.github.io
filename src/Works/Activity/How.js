import React, { Component } from 'react';
import styled from 'styled-components';
import Child from './child.png';
import Clue1 from './Clue1.png';
import Clue2 from './Clue2.png';
import Clue3 from './Clue3.png';
import Clue4 from './Clue4.png';
import IPad from './ipad.png';
import Arrow from './arrow.png';

const ImgContainer = styled.div`
    height: 100px;
    position: relative;
    img {
        width: 20%;
        position: absolute;
    }

    img:nth-child(1) {
        top: 0;
        right: calc(50% - 31px);
    }

    img:nth-child(2) {
        top: calc(50% - 31px);
        right: calc(50% - 93px);
    }

    img:nth-child(3) {
        bottom: 0;
        right: calc(50% - 31px);
    }

    img:nth-child(4) {
        top: calc(50% - 31px);
        right: calc(50% + 31px);
    }
`;

const Clue = () => (
    <ImgContainer>
        <img src={Clue1} alt=""/>
        <img src={Clue2} alt=""/>
        <img src={Clue3} alt=""/>
        <img src={Clue4} alt=""/>
    </ImgContainer>
);

const Row = styled.div`
    display: flex;

    > :nth-child(1) {
        width: 250px;
        flex: none;
        text-align: center;
        padding: 30px;
    }

    > :nth-child(2) {
        flex: 1;
        display: flex;
        align-items: center;
        margin-left: 50px;
    }

    div {
        display: inline-block;
    }
`;

const Left = styled.div`
    display: inline-block;
    width: 70%;
`;

const Right = styled.div`
    display: inline-block;
    width: 30%;
    text-align: center;
    padding: 50px;
    box-sizing: border-box;
    vertical-align: top;

    img {
        max-width: 65%;
        max-height: 650px;
    }


`;

class How extends Component {

    render() {
        return (
            <div>
                <Left>
                    <Row>
                        <div>
                            <img src={Child} alt=""/>
                        </div>
                        <div>
                            <h3>During the activity, children will get a “Little Holmes” toolkit which includes iPad and a armband.</h3>
                        </div>
                    </Row>
                    <Row>
                        <Clue/>
                        <h3>Children have to search for animal stickers scattered in the hotel, with parents' assistance.</h3>
                    </Row>
                    <Row>
                        <div>
                            <img src={IPad} alt=""/>
                        </div>
                        <h3>After they find the stickers, they can get badges and experience Augmented Reality by Unity3D and Vuforia. In consequence, parents and their children could intensify their bonds after the adventures.</h3>
                    </Row>
                </Left>
                <Right>
                    <img src={Arrow} alt=""/>
                </Right>
            </div>
        );
    }

}

export default How;
