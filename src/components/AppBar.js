import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import Logo from '../images/Pinterest-Logo.png';
import { Navigate } from 'react-router-dom';
import Login from './Login'
import SignUp from './Signup';
import Avatar from '@mui/material/Avatar';

const StyledAppBar=styled(AppBar)`
        background: white;
        position:relative;
        margin-bottom: 40px;
        box-shadow:none;
        width:100%
    `;
    const StyledLogo=styled.img`
        width: 10%;
        @media(max-width: 1000px){
            width:13%
        };
        @media(max-width: 730px){
            width:17%
        };
        @media(max-width: 550px){
            width:20%
        };
        @media(max-width: 450px){
            width:24%
        }
    `;
    const StyledButton=styled(Button)`
        width: 70px;
        background: #E60023;
        padding: 7px;
        color: white;
        border-radius: 30px;
        position: absolute;
        right: 150px; 
        text-transform: none;
        &:hover{
            background:#990f02;
        };
        curser: pointer;
        margin:0;
        font-weight:bold;
        color: white;
        curser: pointer;
    `;
    const StyledButton2=styled(Button)`
        width: 70px;
        background: lightgray;
        padding: 7px;
        color: black;
        border-radius: 30px;
        position: absolute;
        right: 50px;
        text-transform: none;
        &:hover{
            background:#adadc9;
        };
        curser: pointer;
        margin:0;
        font-weight:bold;
        curser: pointer;
    `;
    const StyledSearchInput=styled.input`
        width:60%;
        height: 100%;
        padding:15px;
        border-radius: 20px;
        border: 2px solid lightgray;
        margin-left:10px;
        margin-right:50px;
        background-image: url(https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-5.png);
        background-color: white;
        background-repeat: no-repeat;
        background-position: 98% 15px;
        background-size:20px;
    `;

export default function NavBar(props) {

    const [gotoLogin, setGotoLogin] = React.useState(false);
    const [gotoSignup, setGotoSignup] = React.useState(false);
    const handleLoginClick=()=>{
        setGotoLogin(true);
    }
    const handleSignupClick=()=>{
        setGotoSignup(true);
    }
return (
    <div>
        <Box sx={{ flexGrow: 1,width:'100%' }}>
    <StyledAppBar position="static">
        {props.unauth && <Toolbar>
            <StyledLogo src={Logo}/>
            <StyledButton onClick={handleLoginClick}>Log in</StyledButton>
            <StyledButton2 onClick={handleSignupClick}>Sign in</StyledButton2>
        </Toolbar>}
        {!props.unauth && <Toolbar>
            <StyledLogo src={Logo}/>
            <StyledSearchInput type='text' placeholder='Search'/>
            <Avatar alt="A" src="" />
        </Toolbar>}
    </StyledAppBar>
    </Box>
    {gotoLogin && <Login />}
    {gotoSignup && <SignUp/>}
    </div>
);
}
