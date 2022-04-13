import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import Logo from '../images/Pinterest-Logo.png';
import { Navigate } from 'react-router-dom';
import {SignIn} from './Login';
import SignUp from './Signup';
import '../styles/AppBar.css';
import App from '../App';
import Modal from '@mui/material/Modal';
const style = {
    position: 'absolute',
    top: '22%',
    left: '90%',
    transform: 'translate(-50%, -50%)',
    width: '130px',
    height:'110px',
    bgcolor: 'background.paper',
    p: 4,
    borderRadius:'20px'
};

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
    const StyledText=styled.p`
        padding: 5px;
        cursor: pointer;
        &:hover{
            font-weight: bolder;
        }
    `

export default function NavBar(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [gotoLogin, setGotoLogin] = React.useState(false);
    const [gotoSignup, setGotoSignup] = React.useState(false);
    const [logout, setLogout] = React.useState(false);
    const [gotoProfile, setGotoProfile] = React.useState(false)
    const handleLoginClick=()=>{
        setGotoLogin(true);
    }
    const handleSignupClick=()=>{
        setGotoSignup(true);
    }
    const handleLogoutClick=()=>{
        setLogout(true);
        localStorage.clear();
    }
    const handleProfileClick=()=>{
        handleOpen();
    }
    const handleGotoProfileClick=()=>{
        setGotoProfile(true);
    }
return (
    <div className='outer-div'>
        <Box sx={{ flexGrow: 1,width:'100%' }}>
    <StyledAppBar position="static">
        {props.unauth && <Toolbar>
            <StyledLogo src={Logo}/>
            <StyledButton onClick={handleLoginClick}>Log in</StyledButton>
            <StyledButton2 onClick={handleSignupClick}>Sign up</StyledButton2>
            {gotoLogin && <SignIn gotoLogin={gotoLogin}/>}
            {gotoSignup && <SignUp/>}
        </Toolbar>
        }
        {!props.unauth && 
        <div className="menu">
            <img draggable="false" className="logo" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/pinterest-512.png"/>
            <input id="one" type="text" className="search-bar" placeholder="Search"/>
            <div className="icon-container">
                <img tabIndex="1" draggable="false" className="icon pp" src="https://i.pinimg.com/564x/bd/94/ce/bd94ce28cf8aefb521bac31d547f6409.jpg" onClick={handleProfileClick}/>
            </div>
            <div>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            style={{background:'transparent'}}
          >
            <Box sx={style}>
             <StyledText onClick={handleGotoProfileClick}>Profile</StyledText>
             <StyledText onClick={handleLogoutClick}>Logout</StyledText>
            </Box>
        </Modal>
        {logout && <Navigate to='/' replace/>}
        {gotoProfile && <Navigate to='/profile'/>}
            </div>
        </div>}
    </StyledAppBar>
        
    </Box>

    </div>
);
}
