import React from "react"
import styled from "styled-components"
import logo from "../assets/logo.png"

export default function Header() {
  return (
    <>
      <HeaderStyled>
        <img src={logo} className="logo" />
        <div className="rules">
          Get points by clicking on an image but don't click on any more than once!
        </div>
      </HeaderStyled>
      <Line>
        <Circle size="60px" borderWidth="6px">
          <Circle size="40px" borderWidth="4px"></Circle>
        </Circle>
      </Line>
    </>
  )
}

const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    58deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(226, 57, 48, 1) 0%,
    rgba(204, 61, 43, 1) 54%,
    rgba(239, 62, 51, 1) 100%
  );

  .logo {
    transform: scale(0.5);
    min-width: 400px;
    max-width: 900px;
    cursor: pointer;
  }

  .rules {
    display: none;
    position: absolute;
    top: 30%;
    font-size: 2rem;
    background: rgba(0, 0, 0, 0.7);
    color: whitesmoke;
    padding: 5rem;
    border-radius: 20px;
  }
  .logo:hover + .rules {
    display: flex;
  }
`

const Line = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.dark};
`

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.size};
  width: ${(props) => props.size};
  border: ${(props) => props.borderWidth} solid ${({ theme }) => theme.colors.dark};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.light};
`
