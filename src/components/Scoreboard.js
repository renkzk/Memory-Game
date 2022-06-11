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
  gap: 13rem;
  @media (max-width: 700px) {
    flex-direction: column;
    gap: 2rem;
  }

  .score {
    background: ${(props) => props.color};
    padding: 1rem 3rem;
    border-radius: 20px;
    box-shadow: ${({ theme }) => theme.shadow.boxShadow};
  }

  .current {
    background: ${({ theme }) => theme.colors.lightRed};
  }

  .best {
    background: ${({ theme }) => theme.colors.lightGreen};
  }
`
