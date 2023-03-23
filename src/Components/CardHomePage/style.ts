import styled from "styled-components"

export const StyledLi = styled.li`
width: 280px;
background-color: rgba(225, 225, 225, 0.46);
border-radius: 8px;
border: solid 1px rgba(225, 225, 225, 0.46);
display: flex;
flex-direction: column;
gap: 20px;

img{
    height: 150px;
    width: 100%;
    border-radius: 8px;
    align-self: center;
    background-color: white;
}

div{
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 15px;

    h2{
        font-size: 1.1rem;
        font-weight: 600;
    }
    span{
        color: #37268C;
        margin-top: -12px;
    }
    p{
        color: rgb(114 114 114);
        line-height: 1.5;
        margin-bottom: 15px;
    }
    .price__product{
        color: black;
        font-weight: 600;
    }
    button{
        background-color: #37268C;
        height: 30px;
        width: 70%;
        align-self: center;
        margin-bottom: 20px;
        color: white;
        border-radius: 8px;
        border: solid 1px white;
        :hover{
            transition: 0.3s;
            background-color: white;
            color: #37268C;
            border: solid 1px #37268C;
        }
    }
}
`