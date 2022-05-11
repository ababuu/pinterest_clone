import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import Logo from '../images/Pinterest-Logo.png';
import { Navigate } from 'react-router-dom';
import SignUp from './Signup';
import '../styles/AppBar.css';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PinterestLogo from '../images/Pinterest-Logo-notext.png'
import {auth,provider,db} from '../firebase.config';
import { signInWithPopup, GoogleAuthProvider,signInWithEmailAndPassword,createUserWithEmailAndPassword  } from "firebase/auth";
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';
import { getDatabase, ref, set } from "firebase/database";

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

    const style2 = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 480,
        height: '98vh',
        bgcolor: 'background.paper',
        p: 4,
        borderRadius:'40px',
        outline: 'none'
    };
    
    const StyledTextField=styled.input`
        width:70%; 
        margin:auto;
        padding:15px;
        border-radius: 20px;
        border: 2px solid lightgray;
        margin-bottom: 10px`;
    
    const StyledButtonLogin=styled(Button)`
        background-color: rgb(230, 0, 35);
        height: 40px;
        width: 70%;
        border-radius: 20px;
        color:white;
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
        margin-top: 10px;
        letter-spacing: 0.25px;
        outline: none;
        text-transform: none;
        box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25);
        &:hover{
            background-color: #ad081b;
            box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 2px 4px rgba(0, 0, 0, .25);
        }
        `;
    const StyledButtonGoogle=styled(StyledButtonLogin)`
        border: 1px solid #dadce0;
        color: #3c4043;
        background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=);
        background-color: white;
        background-repeat: no-repeat;
        background-position: 12px 11px;
        font-weight: 400;
        margin-top: 5px;
        &:hover{
            background-color:white;
        }
    `
    
    const StyledTextOr=styled.p`
        margin-bottom: 16px; 
        margin-top: 16px; 
        font-size: 14px; 
        color: rgb(51, 51, 51); 
        font-weight: bold;
        `
    
    const StyledLink=styled.a`
        text-decoration:none;
        color:black;
        font-size: 15px;
        margin-top:5px;
        &:hover{
            cursor:pointer;
            font-weight: bold;
        }
        `
    
    const CloseButtonContainer=styled.div`
        width:100%;
        position: relative;
    `
    const CloseButton=styled(CloseIcon)`
        position: absolute;
        right: -20px;
        top: -50px;
        background:lightgray;
        border-radius:50%;
        color:white;
        &:hover{
            background:gray;
            cursor:pointer;
        }
    `
    const StyledErrorMessage=styled.p`
        color:red;
    `
    const theme = createTheme();

export default function NavBar(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [gotoLogin, setGotoLogin] = React.useState(false);
    const [logout, setLogout] = React.useState(false);
    const [gotoProfile, setGotoProfile] = React.useState(false);
    const [gotoHome, setGotoHome] = React.useState(false);
    const [userDetails, setUserDetails] = React.useState(null);
    const [loginAutenticated, setLoginAutenticated] = React.useState(false);
    const [signupAutenticated, setSignupAutenticated] = React.useState(false);
    const [gotoSignup,setGotoSignup]=React.useState(false);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [signuperror, setSignupError]=React.useState('');
    const [loginerror, setLoginError]=React.useState('');


    const handleAlreadyMember=()=>{
        setGotoLogin(!gotoLogin);
        setGotoSignup(!gotoSignup);
    }
    const handleEmailChange=(e)=>{
        setEmail(e.target.value);
    }
    const handlePasswordChange=(e)=>{
        setPassword(e.target.value);
    }
    const handleUsernameChange=(e)=>{
        setUsername(e.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            setUserDetails(user);
            setLoginAutenticated(true);
            localStorage.setItem('user',JSON.stringify(user));
            
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setLoginError(errorMessage.slice(22,errorMessage.length-2))
            console.log(errorMessage)
        });
    };
    function writeUserData(userId, name, email) {
        set(ref(db, 'users/' + userId), {
            username: name,
            email: email,
        });
    }
    
    const handleSubmit2 = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            setSignupAutenticated(true);
            localStorage.setItem('user',JSON.stringify(user));
            console.log(user.uid);
            writeUserData(user.uid,username,email)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setSignupError(errorMessage.slice(22,errorMessage.length-2))
            console.log(errorMessage)
            // ..
        });
        console.log({
        email: email,
        password: password,
        });
    };
    const handleNotSignedup=()=>{
        setGotoSignup(!gotoSignup);
        setGotoLogin(!gotoLogin);
    }
    const handleGoogleSignup=()=>{
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            setLoginAutenticated(true);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            setUserDetails(user);
            localStorage.setItem('user',JSON.stringify(user));
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });  
    }
    const handleLoginClick=()=>{
        setGotoLogin(!gotoLogin);
    }
    const handleSignupClick=()=>{
        setGotoSignup(!gotoSignup);
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
    const handleHomeClick=()=>{
        setGotoHome(true);
    }
return (
    <div className='outer-div'>
        <Box sx={{ flexGrow: 1,width:'100%' }}>
    <StyledAppBar position="static">
        {props.unauth && <Toolbar>
            <StyledLogo src={Logo}/>
            <StyledButton onClick={handleLoginClick}>Log in</StyledButton>
            <StyledButton2 onClick={handleSignupClick}>Sign up</StyledButton2>
        </Toolbar>
        }
        {!props.unauth && 
        <div className="menu">
            <img onClick={handleHomeClick} draggable="false" className="logo" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/pinterest-512.png"/>
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
        {loginAutenticated && <Navigate to='/home' replace/>}
        
            </div>
        </div>}
        {signupAutenticated && <Navigate to='/selection' replace/>}
    </StyledAppBar>
    </Box>
    {gotoHome && <Navigate to='/home'/>}
    <div>

    {gotoLogin &&
    <Modal
    open={true}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
>
    <Box sx={style2}>
    <ThemeProvider theme={theme}>
<Container component="main" maxWidth="xs">
    <CssBaseline/>
    <Box
    sx={{
        marginTop: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }}
    >
    <Avatar sx={{background: 'white'}}>
        <img style={{width:'100%'}} src={PinterestLogo} />
    </Avatar>
    <CloseButtonContainer>
        <CloseButton onClick={handleLoginClick}/>
    </CloseButtonContainer>
    <h1 style={{fontSize:'2em'}}>
        Welcome to Pinterest
    </h1>
    <StyledErrorMessage>{loginerror}</StyledErrorMessage>
    <Box component="form" onSubmit={handleSubmit} noValidate style={{width:'100%'}}>
        
        <div style={{display:'flex',alignItems:'center', justifyContent:'center',flexDirection:'column'}}>
        <StyledTextField type='email' placeholder='Email Address' name='email' value={email} onChange={handleEmailChange} required/>
            <StyledTextField type='password' placeholder='Password' name='password' value={password} onChange={handlePasswordChange} required/>
            <StyledLink href='#'>Forgotten your password?</StyledLink>
            <StyledButtonLogin type='submit'>Log in</StyledButtonLogin>
            <StyledTextOr>OR</StyledTextOr>
            <StyledButtonGoogle onClick={handleGoogleSignup}>Continue with Google</StyledButtonGoogle>
            <StyledLink onClick={handleNotSignedup}>Not on Pinterest yet? Sign-up</StyledLink>
        </div>
    </Box>
    </Box>
</Container>
</ThemeProvider>
    </Box>
</Modal>}
    
    </div>
    <div>
    {gotoSignup && <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style2}>
        <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
        sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}
        >
        <Avatar sx={{background: 'white'}}>
            <img style={{width:'100%'}} src={PinterestLogo} />
        </Avatar>
        <CloseButtonContainer>
        <CloseButton onClick={handleSignupClick}/>
        </CloseButtonContainer>
        <h1 style={{fontSize:'2em'}}>
            Welcome to Pinterest
        </h1>
        <StyledErrorMessage>{signuperror}</StyledErrorMessage>
        <Box component="form" onSubmit={handleSubmit2} noValidate style={{width:'100%'}}>
            <div style={{display:'flex',alignItems:'center', justifyContent:'center',flexDirection:'column'}}>
                <StyledTextField type='email' placeholder='Email Address' name='email' value={email} onChange={handleEmailChange} required/>
                <StyledTextField type='password' placeholder='password' name='password' value={password} onChange={handlePasswordChange} required/>
                <StyledTextField type='text' placeholder='Username' name='username' value={username} onChange={handleUsernameChange} required/>
                <StyledLink href='#'>Forgotten your password?</StyledLink>
                <StyledButtonLogin type='submit'>Continue</StyledButtonLogin>
                <StyledTextOr>OR</StyledTextOr>
                <StyledButtonGoogle onClick={handleGoogleSignup}>Continue with Google</StyledButtonGoogle>
                <StyledLink onClick={handleAlreadyMember}>Already a member? Log in</StyledLink>
            </div>
        </Box>
        </Box>
    </Container>
    </ThemeProvider>
        </Box>
    </Modal>}
    
    </div>
    </div>
);
}
