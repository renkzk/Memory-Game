import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Scoreboard from "./Scoreboard"
import CardsGrid from "./CardsGrid"
import { capitalizeFirstLetter } from "../utils"
import { shuffleArray } from "../utils"

export default function Main() {
  const numberOfPokemonsToFetch = 12
  const [pokemons, setPokemons] = useState([])
  const [clickedPokemons, setClickedPokemons] = useState([])
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

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

  const handlePokemonClick = (e) => {
    const clickedPokemon = e.target.textContent
    setPokemons(shuffleArray(pokemons))
    playRound(clickedPokemon)
  }

  const playRound = (newClickedPokemon) => {
    if (clickedPokemons.includes(newClickedPokemon)) {
      resetGame()
    } else {
      setClickedPokemons((prevState) => [...prevState, newClickedPokemon])
    }
    console.log(clickedPokemons)
  }

  const resetGame = () => {
    setClickedPokemons([])
    console.log(clickedPokemons)
  }

  return (
    <MainStyled>
      <Scoreboard />
      <CardsGrid pokemons={pokemons} handlePokemonClick={handlePokemonClick} />
    </MainStyled>
  )
}

const MainStyled = styled.main`
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  gap: 6rem;
  align-items: center;
  height: 100%;
`
