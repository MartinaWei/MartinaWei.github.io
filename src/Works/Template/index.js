import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Header from './Header.js';
import Intro from './Intro.js';
import { scroller } from 'react-scroll'

const Con = styled.div`
    background-color: white;
    padding-top: 20px;
    min-height: 100vh;
    margin-bottom: 40px;

    .pad-left {
        padding-left: 30px;
    }

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

    img {
        max-width: 100%;
        margin: auto;
        display: block;
    }
`;


const Back = styled.div`
    display: block;
    color: black !important;
    text-align: center;
    font-size: 12pt;
    text-decoration: underline;
    margin-top: 20px;

    a:active{
        color: black;
    }
`;





class Container extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <Con {...this.props}>
                {this.props.children}

                <Back>
                    <NavLink to="/" onClick={() => {
                        setTimeout(() => {
                            scroller.scrollTo('Works', {
                                duration: 500,
                                smooth: true
                            })
                        }, 100)
                    }}>Back</NavLink>
                </Back>
            </Con>
        )
    }
}


const Section = styled.div`
    margin-top: 30px;

    h3 {
        margin: 0;
        font-size: 24px;
        font-family: Avenir Next;
        font-weight: 500;
    }
`;

const Divider = styled.div`
    border: #494949 solid 2px;
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


const InlineDiv = styled.div`
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;

    width: 50%;
    padding-right: 50px;
`;



export {
    Container,
    Section,
    Divider,
    BoxHeader,
    BoxSection,
    Box,
    InlineDiv,
    Intro
};
