import styled from "styled-components"

export const StyledH1 = styled.h1`
align-self: center;
justify-self: center;
border: solid 2px #37268C;
width: 222px;
height: 30px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 8px;
background-color: rgba(225, 225, 225, 0.46);
color: #37268C;
font-size: 1rem;
`

export const StyledLi = styled.h1`
width: 100%;
margin: 0 auto;
display: flex;
align-items: center;
gap: 5px;
img{
    width: 100px;
}
div{
    display: flex;
    flex-direction: column;
    width: 30%;
    gap: 5px;

    span{
        color: #37268C;
        font-weight: 600;
    }
}

button{
    width: 40px;
    height: 30px;
    font-size: 19px;
    background-color: transparent;
    border: none;
    color: black;
}
`