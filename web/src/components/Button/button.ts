import styled from "styled-components";

export const ButtonStyle = styled.button`
	padding: 1rem 2rem 1.15rem;
  text-transform: uppercase;
  cursor: pointer;
  color: #ebebeb;
  background: none;
  border: none;
	min-width: 80px;
	margin: auto;
  font-weight: bold;
  :hover {
    background-image: url('https://scottyzen.sirv.com/Images/v/button.png');
    background-size: 100% 100%;
    color: #27262c;
    animation: spring 300ms ease-out;
    text-shadow: 0 -1px 0 #ef816c;
  }
  :active {
    transform: translateY(4px);
  }
  
  @keyframes spring {
    15% {
      -webkit-transform-origin: center center;
      -webkit-transform: scale(1.2, 1.1);
    }
    40% {
      -webkit-transform-origin: center center;
      -webkit-transform: scale(0.95, 0.95);
    }
    75% {
      -webkit-transform-origin: center center;
      -webkit-transform: scale(1.05, 1);
    }
    100% {
      -webkit-transform-origin: center center;
      -webkit-transform: scale(1, 1);
    }
  }
`;
