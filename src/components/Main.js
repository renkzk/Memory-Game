import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Scoreboard from "./Scoreboard"
import CardsGrid from "./CardsGrid"
import { capitalizeFirstLetter } from "../utils"
import { shuffleArray } from "../utils"

export default function Main() {
  const [pokemons, setPokemons] = useState([])
  const numberOfPokemonsToFetch = 12

  useEffect(() => {
    const loadCards = async () => {
      setPokemons(shuffleArray(await fetchPokemons(numberOfPokemonsToFetch)))
    }

    loadCards()
  }, [])

  const fetchPokemons = async (number) => {
    const pokemons = []

    for (let i = 1; i <= number; i++) {
      const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${i}`
      const response = await fetch(pokemonUrl)
      const pokemon = await response.json()
      const id = pokemon.id
      const name = capitalizeFirstLetter(pokemon.name)
      const image = pokemon.sprites.front_default
      pokemons.push({ id, name, image })
    }

    return pokemons
  }

  return (
    <MainStyled>
      <Scoreboard />
      <CardsGrid pokemons={pokemons} />
    </MainStyled>
  )
}

const MainStyled = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`
