import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styled from "@emotion/styled";
import { Navigate } from "react-router-dom";

const style = {
position: "absolute",
top: "50%",
left: "50%",
transform: "translate(-50%, -50%)",
width: "70%",
height: "85vh",
bgcolor: "white",
p: 4,
borderRadius: "20px",
};
const StyledText = styled.h2`
text-align: center;
font-size: 30px;
margin-bottom: 20px;
`;
const GridConatiner = styled.div`
width: 100%;
height: 60vh;
padding: 10px;
overflow-y: scroll;
`;
const GridElements = styled.div`
width: 150px;
height: 150px;
background-color: lightgray;
margin: 10px;
float: left;
border-radius: 20px;
overflow: hidden;
&:hover {
    cursor: pointer;
    border: 3px solid black;
    padding: 3px;
}
&.selected {
    border: 5px solid black;
}
position: relative;
`;
const StyledTextConatiner = styled.div`
margin: auto;
position: relative;
`;
const StyledButton = styled.button`
width: 100%;
padding: 15px;
background: lightgray;
border: 0px;
margin: 20px;
border-radius: 16px;
font-size: 15px;
font-weight: bolder;
cursor: not-allowed;
`;
const StyledButton2 = styled.button`
width: 100%;
padding: 15px;
background: rgb(230, 0, 35);
font-size: 15px;
font-weight: bolder;
color: white;
border: 0px;
margin: 20px;
border-radius: 16px;
cursor: pointer;
`;
const StyledImage = styled.img`
z-index: 0;
width: 100%;
`;
const StyledLabelText = styled.p`
font-size: 15px;
z-index: 1;
position: absolute;
bottom: 7px;
left: 4px;
font-weight: bolder;
color: white;
`;
let selection = [];
function removeItem(arr, item) {
return arr.filter((f) => f !== item);
}
export default function HomePageIntro() {
const [open, setOpen] = React.useState(true);
const [gotoHome, setGotoHome] = React.useState(false);
const [quantity, setQuantity] = React.useState(4);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
const [selected1, setSelected1] = React.useState(false);
const [selected2, setSelected2] = React.useState(false);
const [selected3, setSelected3] = React.useState(false);
const [selected4, setSelected4] = React.useState(false);
const [selected5, setSelected5] = React.useState(false);
const [selected6, setSelected6] = React.useState(false);
const [selected7, setSelected7] = React.useState(false);
const [selected8, setSelected8] = React.useState(false);
const [selected9, setSelected9] = React.useState(false);
const [selected10, setSelected10] = React.useState(false);
const [selected11, setSelected11] = React.useState(false);
const [selected12, setSelected12] = React.useState(false);
const [selected13, setSelected13] = React.useState(false);
const [selected14, setSelected14] = React.useState(false);
const [selected15, setSelected15] = React.useState(false);
const [selected16, setSelected16] = React.useState(false);
const handleGridClick = (e) => {
    const id = e.currentTarget.id;
    const label = e.currentTarget.innerText;
    if (!selection.includes(label)) {
    selection.push(label);
    setQuantity(quantity - 1);
    } else if (selection.includes(label)) {
    selection = removeItem(selection, label);
    setQuantity(quantity + 1);
    }
    if (id == "1") {
    setSelected1(!selected1);
    } else if (id == "2") {
    setSelected2(!selected2);
    } else if (id == "3") {
    setSelected3(!selected3);
    } else if (id == "4") {
    setSelected4(!selected4);
    }
    if (id == "5") {
    setSelected5(!selected5);
    } else if (id == "6") {
    setSelected6(!selected6);
    } else if (id == "7") {
    setSelected7(!selected7);
    } else if (id == "8") {
    setSelected8(!selected8);
    }
    if (id == "9") {
    setSelected9(!selected9);
    } else if (id == "10") {
    setSelected10(!selected10);
    } else if (id == "11") {
    setSelected11(!selected11);
    } else if (id == "12") {
    setSelected12(!selected12);
    }
    if (id == "13") {
    setSelected13(!selected13);
    } else if (id == "14") {
    setSelected14(!selected14);
    } else if (id == "15") {
    setSelected15(!selected15);
    } else if (id == "16") {
    setSelected16(!selected16);
    }
};
const handleDoneClick = () => {
    setGotoHome(true);
    if(selection!=null){
        if(selection.length<=7 && selection.length>=5){
            
            if(selection.length==5){
                selection.push(selection[0]);
                selection.push(selection[1]);
                selection.push(selection[2]);
            }
            else if(selection.length==6){
                selection.push(selection[0]);
                selection.push(selection[1]);
            }
            else if(selection.length==7){
                selection.push(selection[0]);
            }
        }
        if(selection.length<=11 && selection.length>=9){
            if(selection.length==9){
                selection.push(selection[0]);
                selection.push(selection[1]);
                selection.push(selection[2]);
            }
            else if(selection.length==10){
                selection.push(selection[0]);
                selection.push(selection[1]);
            }
            else if(selection.length==11){
                selection.push(selection[0]);
            }
        }
        if(selection.length<=15 && selection.length>=13){
            if(selection.length==13){
                selection.push(selection[0]);
                selection.push(selection[1]);
                selection.push(selection[2]);
            }
            else if(selection.length==14){
                selection.push(selection[0]);
                selection.push(selection[1]);
            }
            else if(selection.length==15){
                selection.push(selection[0]);
            }
        }
        console.log(selection);
    }
    localStorage.setItem("queries", JSON.stringify(selection));
};
// console.log(selection);
return (
    <div>
    {!gotoHome && (
        <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
            <StyledTextConatiner>
            <StyledText>Tell us what you're interested in</StyledText>
            </StyledTextConatiner>
            <GridConatiner>
            <GridElements
                className={selected1 ? "selected" : ""}
                id="1"
                onClick={handleGridClick}
            >
                <StyledLabelText>Wallpaper</StyledLabelText>
                <StyledImage src="https://i.pinimg.com/400x/72/0a/8d/720a8d704f36d1eadd18c5dc6ee3c9ad.jpg" />
            </GridElements>
            <GridElements
                className={selected2 ? "selected" : ""}
                id="2"
                onClick={handleGridClick}
            >
                <StyledImage src="https://i.pinimg.com/400x/26/7b/9c/267b9c36083a96bcd785b85e41a7e8c8.jpg" />
                <StyledLabelText>Football</StyledLabelText>
            </GridElements>
            <GridElements
                className={selected3 ? "selected" : ""}
                id="3"
                onClick={handleGridClick}
            >
                <StyledImage src="https://i.pinimg.com/400x/bf/cc/a0/bfcca01cf927633530ee1da991829023.jpg" />
                <StyledLabelText>Quotes</StyledLabelText>
            </GridElements>
            <GridElements
                className={selected4 ? "selected" : ""}
                id="4"
                onClick={handleGridClick}
            >
                <StyledImage src="https://i.pinimg.com/400x/46/21/d9/4621d9d53679c675fefda3fd59c941fa.jpg" />
                <StyledLabelText>Cars</StyledLabelText>
            </GridElements>
            <GridElements
                className={selected5 ? "selected" : ""}
                id="5"
                onClick={handleGridClick}
            >
                <StyledImage src="https://i.pinimg.com/400x/31/0c/cc/310ccc98ade3a3723b3f98c574763e35.jpg" />
                <StyledLabelText>Basketball</StyledLabelText>
            </GridElements>
            <GridElements
                className={selected6 ? "selected" : ""}
                id="6"
                onClick={handleGridClick}
            >
                <StyledImage src="https://i.pinimg.com/400x/57/64/ff/5764ff161b0da79c5daeffb0578d60ae.jpg" />
                <StyledLabelText>Astrology</StyledLabelText>
            </GridElements>
            <GridElements
                className={selected7 ? "selected" : ""}
                id="7"
                onClick={handleGridClick}
            >
                <StyledImage src="https://i.pinimg.com/400x/a9/e5/60/a9e56077c22bfd00ca63a5e7cacded85.jpg" />
                <StyledLabelText>Art</StyledLabelText>
            </GridElements>
            <GridElements
                className={selected8 ? "selected" : ""}
                id="8"
                onClick={handleGridClick}
            >
                <StyledImage src="https://i.pinimg.com/400x/2b/a3/ea/2ba3eaf1401ceec39b2fd98f8a39f278.jpg" />
                <StyledLabelText>Photography</StyledLabelText>
            </GridElements>
            <GridElements
                className={selected9 ? "selected" : ""}
                id="9"
                onClick={handleGridClick}
            >
                <StyledImage src="https://i.pinimg.com/400x/72/6d/c8/726dc81b5a41ba399ea0347ba9af2c34.jpg" />
                <StyledLabelText>Concept Cars</StyledLabelText>
            </GridElements>
            <GridElements
                className={selected10 ? "selected" : ""}
                id="10"
                onClick={handleGridClick}
            >
                <StyledImage src="https://i.pinimg.com/400x/0a/a6/df/0aa6df29722f15ad67e0d2277902eaf5.jpg" />
                <StyledLabelText>Landscape</StyledLabelText>
            </GridElements>
            <GridElements
                className={selected11 ? "selected" : ""}
                id="11"
                onClick={handleGridClick}
            >
                <StyledImage src="https://i.pinimg.com/400x/91/33/e8/9133e8c6ead5092824b942c4e7b1309a.jpg" />
                <StyledLabelText>Trees</StyledLabelText>
            </GridElements>
            <GridElements
                className={selected12 ? "selected" : ""}
                id="12"
                onClick={handleGridClick}
            >
                <StyledImage src="https://i.pinimg.com/400x/8d/dd/e3/8ddde323f090feaa7d9f9d73fe2bbb69.jpg" />
                <StyledLabelText>Computers</StyledLabelText>
            </GridElements>
            <GridElements
                className={selected13 ? "selected" : ""}
                id="13"
                onClick={handleGridClick}
            >
                <StyledImage src="https://i.pinimg.com/400x/33/33/e4/3333e45c2edf0adbd4d98eb3ae81e1b2.jpg" />
                <StyledLabelText>Birds</StyledLabelText>
            </GridElements>
            <GridElements
                className={selected14 ? "selected" : ""}
                id="14"
                onClick={handleGridClick}
            >
                <StyledImage src="https://i.pinimg.com/400x/56/1b/82/561b82c5751f19b0b6f9c5d24e7d0e62.jpg" />
                <StyledLabelText>Street Art</StyledLabelText>
            </GridElements>
            <GridElements
                className={selected15 ? "selected" : ""}
                id="15"
                onClick={handleGridClick}
            >
                <StyledImage src="https://i.pinimg.com/400x/de/08/60/de08609ecf3ded233c087f04c6959f8b.jpg" />
                <StyledLabelText>Fitness</StyledLabelText>
            </GridElements>
            <GridElements
                className={selected16 ? "selected" : ""}
                id="16"
                onClick={handleGridClick}
            >
                <StyledImage src="https://i.pinimg.com/400x/8d/fd/06/8dfd06c0d6d7e108ff6ecf939c0ee1b5.jpg" />
                <StyledLabelText>Tattoos</StyledLabelText>
            </GridElements>
            </GridConatiner>
            {quantity <= 0 ? (
            <StyledButton2 onClick={handleDoneClick}>Done</StyledButton2>
            ) : (
            <StyledButton>Pick {quantity} More</StyledButton>
            )}
        </Box>
        </Modal>
    )}
    {gotoHome && <Navigate to="/home" />}
    </div>
);
}
