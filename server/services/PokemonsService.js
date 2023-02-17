import { dbContext } from "../db/DbContext"

class PokemonsService{
  async getAllPokemons() {
    const pokemons = await dbContext.Pokemons.find()
    // NOTE future virtuals will go here! 
    return pokemons
  
  }

}

export const pokemonsService = new PokemonsService()