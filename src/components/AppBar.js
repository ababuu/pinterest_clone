import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import Logo from '../images/Pinterest-Logo.png';
import { Navigate } from 'react-router-dom';
import Login from './Login';
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
    const handleLoginClick=()=>{
        setGotoLogin(true);
    }
    const handleSignupClick=()=>{
        setGotoSignup(true);
    }
    const handleLogoutClick=()=>{
        setLogout(true);
    }
    const handleProfileClick=()=>{
        handleOpen();
    }
return (
    <div className='outer-div'>
        <Box sx={{ flexGrow: 1,width:'100%' }}>
    <StyledAppBar position="static">
        {props.unauth && <Toolbar>
            <StyledLogo src={Logo}/>
            <StyledButton onClick={handleLoginClick}>Log in</StyledButton>
            <StyledButton2 onClick={handleSignupClick}>Sign in</StyledButton2>
        </Toolbar>}
        {!props.unauth && 
        <div className="menu">
            <img draggable="false" className="logo" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/pinterest-512.png"/>
            <input id="one" type="text" className="search-bar" placeholder="Search"/>
            <div class="icon-container">
                <img tabindex="1" draggable="false" className="icon pp" src="https://i.pinimg.com/564x/bd/94/ce/bd94ce28cf8aefb521bac31d547f6409.jpg" onClick={handleProfileClick}/>
            </div>
        </div>}
    </StyledAppBar>
   
        <div>
            <Modal
            PaperProps={{
                style: {
                  backgroundColor: 'transparent',
                  boxShadow: 'none',
                },
              }}
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
             <StyledText>Profile</StyledText>
             <StyledText onClick={handleLogoutClick}>Logout</StyledText>
            </Box>
        </Modal>
            </div>
    </Box>
    {gotoLogin && <Login gotoLogin={gotoLogin}/>}
    {gotoSignup && <SignUp/>}
    {logout && <Navigate to='/' replace/>}
    
    </div>
);
}
