import React from "react"
import styled from "styled-components"
import logo from "../assets/logo.png"

export default function Header() {
  return (
    <>
      <HeaderStyled>
        <img src={logo} />
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

  img {
    transform: scale(0.5);
    min-width: 400px;
    max-width: 900px;
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
