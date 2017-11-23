import React from 'react';
import styled from 'styled-components';

class _Container extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>{this.props.children}</div>
        )
    }
}

const Container = styled(_Container)`
    padding: 60px 0;
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
    InlineDiv
};
