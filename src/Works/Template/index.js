import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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
    font-size: 24px;
    text-decoration: underline;
    margin-top: 20px;

    a:active{
        color: black;
    }
`;

const Link = styled.div`
    font-size: 16px !important;
    font-family: 'Noto Sans' !important;
    a:link {
        color: #6D5A55;
    }
    a:visited {
        color: #6D5A55;
    }
    .active {
        color: #E5C6CC !important;
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
                <div style={{
                    backgroundColor: '#CF9E8A',
                    position: 'absolute',
                    right: 20,
                    top: 100,
                    padding: 10
                }}>
                    <Link>
                        <NavLink
                            exact
                            activeClassName="active"
                            style={{textDecoration: 'none'}} to='/'>
                            Home
                        </NavLink>
                    </Link>
                    <Link>
                        <NavLink
                            activeClassName="active"
                            style={{textDecoration: 'none'}} to='/service'>
                            UX - Service Design
                        </NavLink>
                    </Link>
                    <Link>
                        <NavLink
                            activeClassName="active"
                            style={{textDecoration: 'none'}} to='/energy'>
                            Data - Energy
                        </NavLink>
                    </Link>
                    <Link>
                        <NavLink
                            activeClassName="active"
                            style={{textDecoration: 'none'}} to='/pakonw'>
                            UX - Paknow
                        </NavLink>
                    </Link>
                    <Link>
                        <NavLink
                            activeClassName="active"
                            style={{textDecoration: 'none'}} to='/health'>
                            Data - Health Care I
                        </NavLink>
                    </Link>
                    <Link>
                        <NavLink
                            activeClassName="active"
                            style={{textDecoration: 'none'}} to='/flow'>
                            UX - Health Care II
                        </NavLink>
                    </Link>
                </div>
                <Back>
                    <NavLink to="/">back</NavLink>
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

const Intro = styled.div`
    position: fixed;
    z-index: -1;
    top: 0;
    max-width: 1024px;
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
