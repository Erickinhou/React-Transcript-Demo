import styled from 'styled-components';


export const TranscriptStyled = styled.div`
  height: 100vh;
  width: 100vw;
  
  //how does this work
  header > div:nth-last-child(1) {
    color: #1c1c1c;
  }
  //Red Icon ?
  header > div:nth-last-child(1) > svg{
    color: #41B0DF;
  }


  //background
  nav > section:nth-child(1){
    background-color: #fff;
  }
  //time
  nav > section > div > div > div > div{
    background-color: #fff !important;
    color: #1c1c1c;
  }
  //removing backgrounds
  nav > section > div > div > div > div > span{
    background-color: #fff !important;
  }

  //highlight the first time
  nav > section > div > div > div > div > span:nth-child(1) {
    background-color: #fff;
    color: #41B0DF;
  }
  nav > section > div > div > div > div > span:nth-child(2) {
    background-color: #fff;
    color: #1c1c1c;
  }
  nav > section > div > div > div > div > span:nth-child(3) {
    background-color: #fff;
    color: #1c1c1c;
  }
  //buttons backgorund
  nav > section > div > div > div > div > button{
    background-color: #fff !important;
  }
  //buttons svg color
  nav > section > div > div > div > div > button > svg{
    color: #41B0DF;
  }
  //buttons color of time video set
  nav > section > div > div > div > div > span > select{
    color: #41B0DF !important;
    background-color: #fff !important;
  }

  //Config, keyboards and share button 
  div > div:nth-last-child(2) > button{
    color: #41B0DF !important;
    background-color: #fff !important;
  }
`;