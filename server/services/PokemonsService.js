import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"

class PokemonsService{
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
    return pokemons
  
  }

  async createPokemon(pokemonData) {
    const newPokemon = await dbContext.Pokemons.create(pokemonData)
    // NOTE more future virtuals will also go here! yippee. 
    return newPokemon
  }
}

export const pokemonsService = new PokemonsService()