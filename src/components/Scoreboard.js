import React from "react"
import styled from "styled-components"

export default function Scoreboard() {
  return (
    <ScoreboardStyled>
      <div className="current score">Current Score: 0</div>
      <div className="best score">Best Score: 0</div>
    </ScoreboardStyled>
  )
}

const ScoreboardStyled = styled.div`
  display: flex;
  gap: 4rem;

  .score {
    background: ${(props) => props.color};
    padding: 1rem;
    border-radius: 20px;
  }

  .current {
    background: ${({ theme }) => theme.colors.lightRed};
  }

  .best {
    background: ${({ theme }) => theme.colors.lightGreen};
  }
`
