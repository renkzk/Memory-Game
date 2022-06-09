import React from "react"
import styled from "styled-components"
import Scoreboard from "./Scoreboard"

export default function Main() {
  return (
    <MainStyled>
      <Scoreboard />
    </MainStyled>
  )
}

const MainStyled = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`
