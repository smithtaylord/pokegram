import { Auth0Provider } from "@bcwdev/auth0provider";
import { pokemonsService } from "../services/PokemonsService";
import BaseController from "../utils/BaseController";

export class PokemonsController extends BaseController {
  constructor(){
    super('api/pokemon')
    this.router
      .get('', this.getAllPokemons)
      .get('/:pokemonId', this.getPokemonById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      // NOTE This adds basic user security! :) 
      .post('', this.createPokemon)
  }

  async getAllPokemons(req, res, next) {
    try {
      const pokemons = await pokemonsService.getAllPokemons()
      return res.send(pokemons)
    } catch (error) {
      next(error)
    }
  }

  async getPokemonById(req, res, next) {
    try {
      const pokemonId = req.params.pokemonId
      const pokemon = await pokemonsService.getPokemonById(pokemonId)
      return res.send(pokemon)
    } catch (error) {
      next(error)
    }
  }
 async createPokemon(req, res, next) {
    try {
      const user = req.userInfo
      const pokemonData = req.body
      const newPokemon = await pokemonsService.createPokemon(pokemonData)
      return res.send(newPokemon)
    } catch (error) {
      next(error)
    }
  }
}