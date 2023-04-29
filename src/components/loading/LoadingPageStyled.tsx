import styled from "styled-components";
const mainColor = "#00AAA1";
const LoadingPageStyled = styled.main`
  position: fixed;
  z-index: 101;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100vw;
  background-color: #f5f5f599;

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    min-width: 90px;
    min-height: 90px;
    width: 12vw;
    height: 12vw;
  }
  .logo svg {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .loader {
    z-index: 90;
    font-size: 5px;
    min-width: 70px;
    min-height: 70px;
    width: 11vw;
    height: 11vw;
    border-radius: 50%;
    position: relative;
    animation: mulShdSpin 1.3s infinite linear;
    box-shadow: 0 0 0 red;
  }

  @keyframes mulShdSpin {
    0%,
    100% {
      box-shadow: 0 -3em 0 0.2em ${mainColor}, 2em -2em 0 0em ${mainColor},
        3em 0 0 -1em ${mainColor}, 2em 2em 0 -1em ${mainColor},
        0 3em 0 -1em ${mainColor}, -2em 2em 0 -1em ${mainColor},
        -3em 0 0 -1em ${mainColor}, -2em -2em 0 0 ${mainColor};
    }
    12.5% {
      box-shadow: 0 -3em 0 0 ${mainColor}, 2em -2em 0 0.2em ${mainColor},
        3em 0 0 0 ${mainColor}, 2em 2em 0 -1em ${mainColor},
        0 3em 0 -1em ${mainColor}, -2em 2em 0 -1em ${mainColor},
        -3em 0 0 -1em ${mainColor}, -2em -2em 0 -1em ${mainColor};
    }
    25% {
      box-shadow: 0 -3em 0 -0.5em ${mainColor}, 2em -2em 0 0 ${mainColor},
        3em 0 0 0.2em ${mainColor}, 2em 2em 0 0 ${mainColor},
        0 3em 0 -1em ${mainColor}, -2em 2em 0 -1em ${mainColor},
        -3em 0 0 -1em ${mainColor}, -2em -2em 0 -1em ${mainColor};
    }
    37.5% {
      box-shadow: 0 -3em 0 -1em ${mainColor}, 2em -2em 0 -1em ${mainColor},
        3em 0em 0 0 ${mainColor}, 2em 2em 0 0.2em ${mainColor},
        0 3em 0 0em ${mainColor}, -2em 2em 0 -1em ${mainColor},
        -3em 0em 0 -1em ${mainColor}, -2em -2em 0 -1em ${mainColor};
    }
    50% {
      box-shadow: 0 -3em 0 -1em ${mainColor}, 2em -2em 0 -1em ${mainColor},
        3em 0 0 -1em ${mainColor}, 2em 2em 0 0em ${mainColor},
        0 3em 0 0.2em ${mainColor}, -2em 2em 0 0 ${mainColor},
        -3em 0em 0 -1em ${mainColor}, -2em -2em 0 -1em ${mainColor};
    }
    62.5% {
      box-shadow: 0 -3em 0 -1em ${mainColor}, 2em -2em 0 -1em ${mainColor},
        3em 0 0 -1em ${mainColor}, 2em 2em 0 -1em ${mainColor},
        0 3em 0 0 ${mainColor}, -2em 2em 0 0.2em ${mainColor},
        -3em 0 0 0 ${mainColor}, -2em -2em 0 -1em ${mainColor};
    }
    75% {
      box-shadow: 0em -3em 0 -1em ${mainColor}, 2em -2em 0 -1em ${mainColor},
        3em 0em 0 -1em ${mainColor}, 2em 2em 0 -1em ${mainColor},
        0 3em 0 -1em ${mainColor}, -2em 2em 0 0 ${mainColor},
        -3em 0em 0 0.2em ${mainColor}, -2em -2em 0 0 ${mainColor};
    }
    87.5% {
      box-shadow: 0em -3em 0 0 ${mainColor}, 2em -2em 0 -1em ${mainColor},
        3em 0 0 -1em ${mainColor}, 2em 2em 0 -1em ${mainColor},
        0 3em 0 -1em ${mainColor}, -2em 2em 0 0 ${mainColor},
        -3em 0em 0 0 ${mainColor}, -2em -2em 0 0.2em ${mainColor};
    }
  }
`;

export default LoadingPageStyled;
