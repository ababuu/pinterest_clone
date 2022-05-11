import styled from '@emotion/styled';
import * as React from 'react';
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
border-radius: 20px;
`
const StyledImg=styled.img`
width:100%;
border-radius: 20px;
`
export default function ProfileGrid({saved}) {
    console.log(saved)
    return(
        <div>
            <StyledConstainer>
                {saved!=null ? saved.map(s=><StyledDiv><StyledImg src={s}/></StyledDiv>): <h2>No Saved Photos!</h2>}
            </StyledConstainer>
        </div>
        
    )
}