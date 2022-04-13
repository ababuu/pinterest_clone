import styled from '@emotion/styled';
import * as React from 'react';

export default function ProfileGrid() {
    const StyledConstainer=styled.div`
        width:100%;
        margin:auto;
        height:100vh
`
    const StyledDiv=styled.div`
        width:300px;
        height:200px;
        background:lightgray;
        margin:10px;
        float:left;
        border-radius: 20px
    `
    return(
        <div>
            <StyledConstainer>
                <StyledDiv></StyledDiv>
                <StyledDiv></StyledDiv>
                <StyledDiv></StyledDiv>
                <StyledDiv></StyledDiv>
                <StyledDiv></StyledDiv>
                <StyledDiv></StyledDiv>
                <StyledDiv></StyledDiv>
                <StyledDiv></StyledDiv>
            </StyledConstainer>
        </div>
        
    )
}