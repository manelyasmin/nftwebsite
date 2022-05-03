import styled from "styled-components";

export const Title=styled.h2`

font-size:${props=>props.theme.fontxxl};
text-transform:capitalize;
width:80%;
color:${props=>props.theme.body};
align-self:flex-start;
margin:0 auto;
@media (max-width: 64em){
  width:100%;text-align:center; 
}

@media (max-width: 40em){
    font-size:${props=>props.theme.fontlg};

}
@media (max-width: 30em){
    font-size:${props=>props.theme.fontmd};

}

`;

export const SubText=styled.p`
font-size:${props=>props.theme.fontlg};
color:${props=>props.theme.body};
align-self:flex-start;
width:80%;
margin:1rem auto;
font-weight:400;
@media (max-width: 64em){
  width:100%;text-align:center;
  font-size:${props=>props.theme.fontmd};
}

@media (max-width: 40em){
    font-size:${props=>props.theme.fontmd};

}
@media (max-width: 30em){
    font-size:${props=>props.theme.fontsm};

}

`;

export const ButtonContainer=styled.div`
width:80%;
align-self:flex-start;
margin:.5rem auto;
display:flex;
@media (max-width: 64em){
    width:100%;
    button{
        margin:0 auto;
    }

}

`;

export const SubTextLight=styled.p`

font-size:${(props)=>props.theme.fontmd};
color:${(props) => `rgba{${props.theme.bodyRgba},0.6 }`};
align-self:flex-start;
width:80%;
margin:1rem auto;
font-weight:400;
@media (max-width: 64em){
  width:100%;text-align:center;
  font-size:${props=>props.theme.fontsm};
}

@media (max-width: 40em){
    font-size:${props=>props.theme.fontsm};

}
@media (max-width: 30em){
    font-size:${props=>props.theme.fontxs};

}
`;



export const Section=styled.section`
min-height:100vh;
width:100%;
background-color:${props=>props.theme.text};
color:${props=>props.theme.body};
display:flex;
justify-content:center;
align-items:center;
position:relative;

`;

export const Container=styled.div`
width:75%;
/* min-height:80vh; */
margin:0 auto;
/* background-color:lightblue; */
display:flex;
justify-content:center;
align-items:center;

@media (max-width: 70em){
    width:85%;
}
@media (max-width: 64em){
    width:100%;
    flex-direction:column;
    &>*:last-child{
        width:80%;
    }
}

@media (max-width: 40em){
   
    &>*:last-child{
        width:90%;
    }
}
`;

export const Box=styled.div`
width:50%;
height:100%;
min-height:60vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
@media (max-width: 40em){
  min-height:50vh;

}
`;