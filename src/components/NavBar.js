import React from 'react';
import styled from 'styled-components';
import logo from "../assets/pharma.manger2.0.png";
import { Link, BrowserRouter as Router } from 'react-router-dom';

const refresh = () => {
    window.location.reload();
}

export default function NavBar() {
    const date = new Date();
    const monthNames = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];
    return (
            <Nav>
                <SidePart>  
                    <Link onClick={() => {setTimeout(refresh, 10)}} style={{textDecoration: 'none', color: 'white'}} to='/'>
                    <Logo src={logo} alt = 'pharmacy logo'/>
                    </Link>
                </SidePart>
                <MainPart>
                    <Salut>
                        <Morning>Have a nice Day!</Morning>
                        <Time>{`${date.getDate()}, ${monthNames[date.getMonth()]}`}</Time>
                    </Salut>
                </MainPart>
            </Nav>
    )
}

const Time = styled.p`
    font-weight: 400;
    font-size: 14px;
    color: #F7FAFD;
    margin: 0;
`;

const Morning = styled.p`
    font-weight: 500;
    font-size: 16px;
    color: #F7FAFD;
    margin: 0;
`;

const Salut = styled.div`
    width: 160px;
    height: 40px;
    margin-right: 40px;
    text-align: end;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
`;

const Nav = styled.nav`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
`;

const SidePart = styled.div`
    width: 20%;
    background-color: #F7FAFD;
    height: 100%;  
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
`;

const MainPart = styled.div`
    width: 80%;
    background-color: #1D242E;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const Logo = styled.img`
    height: 60px;
    width: auto;
`;

