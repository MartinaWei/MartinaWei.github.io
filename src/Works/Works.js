import React, { Component } from 'react';
import styled from 'styled-components';
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
import img5 from './img5.png';


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    max-width: 870px;
    margin: 0 auto;
    padding-top: 20vh;
    box-sizing: border-box;
    font-weight: bold;

    .card {
        display: inline-block;
        width : 270px;
        height: 230px;
        background: #F7E2E7;
        margin: 10px;
        vertical-align: top;
        position: relative;
    }

    img {
        width: 100%;
    }

    #works-img4 {
        position: absolute;
        right: 25px;
        text-align: right;
    }
`;

class Works extends Component {

    render() {
        return (
            <Container>
                <div className="card">
                    <img src={img1} alt=""/>
                </div>
                <div className="card">
                    <img src={img2} alt=""/>
                </div>
                <div className="card">
                    <img src={img3} alt=""/>
                </div>
                <div className="card">
                    <p id="works-img4">health care<br/>for Old citizens</p>
                </div>
                <div className="card">
                    <img src={img5} alt=""/>
                </div>
            </Container>
        );
    }

}

export default Works;
