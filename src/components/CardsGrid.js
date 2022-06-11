import React from "react"
import styled from "styled-components"

export default function CardsGrid({ pokemons }) {
  const pokemonCards = pokemons.map((pokemon) => {
    const { id, name, image } = pokemon
    return (
      <div key={id} className="pokemon-card">
        <img src={image} alt="" />
        {name}
      </div>
    )
  })
  return <GridStyled>{pokemonCards}</GridStyled>
}

const GridStyled = styled.div`
  display: grid;
  gap: 5rem;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  .pokemon-card {
    width: 15rem;
  }
`
