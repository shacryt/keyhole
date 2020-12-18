import './App.css';
import { createGlobalStyle } from 'styled-components';
import { Fragment } from 'react';

const GlobalStyle = createGlobalStyle`
  .wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
  }

  .logo {
    max-width: 85vw;
    width: auto;
    height: auto;
    pointer-events: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    margin-top: auto;
  }

  .footer {
    margin-top: auto;
    width: 100%;
    height: 80px;
    display: flex;
    flex-shrink: 0;
    text-align: center;
    align-items: center;
    justify-content: center;
    color: #eddc98;
    font-size: min(12px, 5vw);
  }

  .wrapper:after {
    animation: shine 10s ease-in-out infinite;
    animation-fill-mode: forwards;
    content: '';
    position: absolute;

    width: 200vw;
    height: 10vh;
    opacity: 0;
    transform: rotate(30deg);
    top: 200%;

    background: rgba(255, 255, 255, 0.13);
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.13) 0%,
      rgba(255, 255, 255, 0.13) 77%,
      rgba(255, 255, 255, 0.5) 92%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  .wrapper:active:after {
    opacity: 0;
  }

  @keyframes shine {
    10% {
      opacity: 1;
      top: 200%;
      transition-property: left, top, opacity;
      transition-duration: 0.7s, 0.7s, 0.15s;
      transition-timing-function: ease;
    }
    30% {
      opacity: 0;
      top: -200%;
      transition-property: left, top, opacity;
    }
  }

`;

function App() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <GlobalStyle />
      <div className='wrapper'>
        <img
          className='logo'
          src='https://keyhole-web-files.s3.eu-central-1.wasabisys.com/temp/under_construction.png'
          alt=''
        />
        <div className='footer'>KEYHOLE - Copyright 2021 - ByteVeil</div>
      </div>
    </div>
  );
}

export default App;
