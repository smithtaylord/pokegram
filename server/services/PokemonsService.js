import { dbContext } from "../db/DbContext"

class PokemonsService{
 
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