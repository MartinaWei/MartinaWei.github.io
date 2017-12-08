import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter, NavLink } from 'react-router-dom';
import { scroller } from 'react-scroll';

const Wrapper = styled.div`
    text-align: center;
    position: fixed;
    width: 100%;
    background-color: white;
    padding: 20px;
    z-index: 1;
    top: 0;
    color: #4A4948;
    left: 0;

    p {
        cursor: pointer;
        margin: 10px;
        font-size: 18px;
        text-decoration: none;
        display: inline-block;
    }
`;

const InnerWrapper = styled.div`
    position: relative;
    left: 24%;
`;

const Active = styled.p`
    color: #9B9B9B;
    position: relative;

    &::after {
        content: "";
        background-color: black;
        width: 110%;
        height: 2px;
        display: inline-block;
        position: absolute;
        top: 110%;
        left: -5%;
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

const List = () => (
    <div>
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
);

const ListWrapper = styled.div`
    display: none;

    &.active {
        display: block;
    }
`;

class Header extends Component {
    constructor(props){
        super(props);

        this.state = {
            display: 'none'
        };
    }

    clickHandler(target) {
        this.props.history.push('/');
        setTimeout(() => {
            scroller.scrollTo(target, {
                duration: 500,
                smooth: true,
            });
        }, 100);

    }

    render() {
        const history = this.props.history;
        return (
            <Wrapper {...this.props}
                onMouseLeave={() => {
                    this.setState({display: 'none'});
                }}
                >
                <InnerWrapper>
                    <p onClick={() => this.clickHandler('About')}>About</p>
                    <p onClick={() => this.clickHandler('Professions')}>Professions</p>
                    <Active onMouseEnter={() => this.setState({display: 'block'})}>Works</Active>
                    <div ref="list" style={{
                        backgroundColor: '#CF9E8A',
                        position: 'absolute',
                        left: '51%',
                        top: 61,
                        padding: 10,
                        zIndex: 2,
                        display: this.state.display
                    }}>
                        <List/>
                    </div>
                </InnerWrapper>
            </Wrapper>
        );
    }

}

export default withRouter(Header);
