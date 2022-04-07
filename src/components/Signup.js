import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Modal from '@mui/material/Modal';
import PinterestLogo from '../images/Pinterest-Logo-notext.png'
import styled from '@emotion/styled';
import {auth} from '../firebase.config';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Navigate } from 'react-router-dom';

const style = {
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
    fontSize: 13px;
    fontWeight: bold
    margin-top:5px`


function Copyright(props) {
return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
    {'Copyright © '}
    <Link color="inherit" href="">
        Your Website
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
    </Typography>
);
}

const theme = createTheme();

export default function SignUp() {
    const [autenticated, setAutenticated] = React.useState(false);
    const [open, setOpen] = React.useState(true);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleEmailChange=(e)=>{
        setEmail(e.target.value);
    }
    const handlePasswordChange=(e)=>{
        setPassword(e.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            setAutenticated(true);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
        console.log({
        email: email,
        password: password,
        });
    };

return (
    <div>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style}>
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
        <h1 style={{fontSize:'2em'}}>
            Welcome to Pinterest
        </h1>
        <Box component="form" onSubmit={handleSubmit} noValidate style={{width:'100%'}}>
            
            <div style={{display:'flex',alignItems:'center', justifyContent:'center',flexDirection:'column'}}>
                <StyledTextField type='email' placeholder='Email Address' name='email' value={email} onChange={handleEmailChange}/>
                <StyledTextField type='password' placeholder='Password' name='password' value={password} onChange={handlePasswordChange}/>
                <StyledLink href='#'>Forgotten your password?</StyledLink>
                <StyledButtonLogin type='submit'>Continue</StyledButtonLogin>
                <StyledTextOr>OR</StyledTextOr>
                <StyledButtonGoogle>Continue with Google</StyledButtonGoogle>
                <StyledLink href='#'>Already a member? Log in</StyledLink>
            </div>
        </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
    </ThemeProvider>
        </Box>
    </Modal>
    {autenticated && <Navigate to='/home'/>}
    </div>
);
}
