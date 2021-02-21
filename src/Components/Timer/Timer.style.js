import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 700px;
    width:550px;

    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    
    
    color: #ffff;

    
    /* background-color:#a41d19; */
    background-color: #f0716d;

    font-family: Arial, Helvetica, sans-serif;
    background: url(${props => props.bg});
    background-position: center 55%;
    background-size: 1000px;

  
    ul{
        display: flex;
        justify-content: space-between;
        width: 400px;

        li{
            font-size: 20px;
            display: flex;
            align-items:center;
            justify-content:center;
            width: 120px;
            height:40px;
        }

        li:hover{
            background-color: #a41d19;
        }

    }


`;

export const Number = styled.div`
    font-size: 150px;
    
    font-weight: 200;
`;


