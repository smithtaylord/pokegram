import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"

class PokemonsService{
  async editPokemon(pokemonData, pokemonId) {
    const pokemon = await dbContext.Pokemons.findById(pokemonId)
    if (!pokemon) {
      throw new BadRequest("Can't find that pokemon!!")
    }

    pokemon.name = pokemonData.name || pokemon.name
    await pokemon.save
    return pokemon
  }

  async deletePokemonById(pokemonId) {
    const pokemonData = await dbContext.Pokemons.findById(pokemonId)
    await pokemonData.remove()
    return pokemonData
  }

  async getPokemonById(pokemonId) {
    const pokemon = await dbContext.Pokemons.findById(pokemonId)
    .populate('voteCount')
    if (!pokemon) {
      throw new BadRequest("This Pokemon is not found! Very sad!")
    }
    return pokemon
  }
 
  async getAllPokemons() {
    const pokemons = await dbContext.Pokemons.find()
    // NOTE future virtuals will go here! 
    .populate('voteCount')
    return pokemons
  
  }

  async createPokemon(pokemonData) {
    const newPokemon = await dbContext.Pokemons.create(pokemonData)
    // NOTE more future virtuals will also go here! yippee. 
    return newPokemon
  }
}

export const pokemonsService = new PokemonsService()