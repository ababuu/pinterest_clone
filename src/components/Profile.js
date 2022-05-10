import styled from '@emotion/styled';
import * as React from 'react';
import AppBar from './AppBar';
import Avatar from '@mui/material/Avatar';
import ProfileGrid from './ProfileGrid';

const StyledConstainer=styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`
const StyledAvatar=styled(Avatar)`
    width:100px;
    height:100px;
`
const StyledNameText=styled.h1`
    margin:10px;
    font-size:40px;
    color:rgb(17, 17, 17)
`
const StyledSavedText=styled.h4`
    margin: 20px;
    text-decoration: underline;
    color:rgb(17, 17, 17)
`;
export default function Profile() {
    return(
        <div>
            <AppBar unauth={false}/>
            <StyledConstainer>
            <StyledAvatar/>
            <StyledNameText>Ababu Alemu</StyledNameText>
            <StyledSavedText>Saved</StyledSavedText>
            <ProfileGrid/>
            </StyledConstainer>
        </div>
        
    )
}