import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 431px;
    width:402px;
    padding: 30px;
    color: #ffff;

    background-color:#a41d19;
    font-family: Arial, Helvetica, sans-serif;
    box-shadow: 0px 0px 13px 0px #000000;
    ul{
        display: flex;
        justify-content: space-between;
        width: 100%;

        li{
            font-size: 20px;
            display: flex;
            align-items:center;
            justify-content:center;
            width: 100%;
            height:40px;
        }

        li:hover{
            background-color: #711411;
        }

    }

    
`;

export const Number = styled.div`
    font-size: 300px;
    
    font-weight: 200;
`;


