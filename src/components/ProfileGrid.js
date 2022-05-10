import styled from '@emotion/styled';
import * as React from 'react';

export default function ProfileGrid() {
    const StyledConstainer=styled.div`
        width:100%;
        display:flex;
        flex-wrap:wrap;
        padding: 0;
        margin: 0;
        justify-content:center;
        align-items:center;
        gap: 10px;
        padding:5px
`
    const StyledDiv=styled.div`
        width:300px;
        height:200px;
        background:lightgray;
        margin:10px;
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