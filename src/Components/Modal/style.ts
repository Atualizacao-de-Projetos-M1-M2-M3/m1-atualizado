import styled from "styled-components"

export const StyledBackGround = styled.div`
position: fixed;
z-index: 1;
background-color: rgb(8 8 8 / 53%);
top: 0;
width: 100vw;
height: 100%;
`

export const StyledModal = styled.div`
position: absolute;
z-index: 2;
display: flex;
flex-direction: column;
width: 90vw;
height: 350px;
background-color: white;
top: 35%;
left: 5%;
border-radius: 8px;
justify-content: space-between;

div{
    display: flex;
    width: 93%;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    margin-top: 20px;

    h2{
        font-size: 1rem;
        font-weight: 600;
    }
    button{
        border: solid 1px #37268C;
        color: #2E245E;
        font-size: 17px;
        font-weight: 600;
        width: 30px;
        height: 30px;
        border-radius: 100%;

        :hover{
            background-color: #37268C;
            color: white;
            transition: 0.2s;
        }
    }
}

ul{
    width: 95%;
    margin: 0 auto;
    margin-top: -20px;
    overflow: auto;
    height: 55%;
    display: flex;
    flex-direction: column;
}

button{
    align-self: center;
    justify-self: flex-end;
    margin-bottom: 25px;
    border-radius: 8px;
    border: solid 1px #2E245E;
    color: #37268C;
    font-weight: 600;
    height: 35px;
    width: 210px;
    :hover{
        transition: 0.2s;
        background-color: #2E245E;
        color: white;

    }

}
`