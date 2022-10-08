import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Scoreboard from "./Scoreboard"
import CardsGrid from "./CardsGrid"
import { capitalizeFirstLetter } from "../utils"
import { shuffleArray } from "../utils"

export default function Main() {
  const numberOfPokemonsToFetch = 36
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

    for (let i = 3; i <= number; i += 3) {
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
      const newScore = currentScore + 1
      setCurrentScore(newScore)
      if (newScore > bestScore) setBestScore(newScore)
      setClickedPokemons((prevState) => [...prevState, newClickedPokemon])
    }
  }

  const resetGame = () => {
    setClickedPokemons([])
    setCurrentScore(0)
  }

  function showVictoryScreen() {
    return (
      <VictoryStyled>
        <div className="victory-screen">
          <h1>You Win!</h1>
          <button onClick={(e) => resetGame()}>Reset</button>
        </div>
      </VictoryStyled>
    )
  }

  return (
    <MainStyled>
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      <CardsGrid pokemons={pokemons} handlePokemonClick={handlePokemonClick} />
      {currentScore > 11 ? showVictoryScreen() : null}
    </MainStyled>
  )
}

const MainStyled = styled.main`
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  gap: 6rem;
  align-items: center;
  height: 100%;
  position: relative;
`
const VictoryStyled = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .victory-screen {
    background: rgba(0, 0, 0, 0.9);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    padding: 10rem;
  }

  h1 {
    color: yellow;
    font-size: 10rem;
  }

  button {
    padding: 1rem;
    font-size: 3rem;
    width: 20rem;
    background: red;
    color: whitesmoke;
    border-radius: 20px;
    &:hover {
      background: rgb(156, 24, 24);
    }
  }
`
