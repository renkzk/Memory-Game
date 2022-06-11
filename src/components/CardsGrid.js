import React from "react"
import styled from "styled-components"

export default function CardsGrid({ pokemons, handlePokemonClick }) {
  const pokemonCards = pokemons.map((pokemon) => {
    const { id, name, image } = pokemon
    return (
      <div key={id} className="pokemon-card" onClick={handlePokemonClick}>
        <img src={image} alt="" />
        {name}
      </div>
    )
  })
  return <GridStyled>{pokemonCards}</GridStyled>
}

const GridStyled = styled.div`
  display: grid;
  gap: 4rem;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  .pokemon-card {
    width: 17rem;
    padding: 1rem;
    text-align: center;
    box-shadow: ${({ theme }) => theme.shadow.boxShadow};
    border-radius: 20px;
    transition: 150ms;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }

    img {
      pointer-events: none; //fix pokemon div not being selected as event when clicked
    }
  }
`
