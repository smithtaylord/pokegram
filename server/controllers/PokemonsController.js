import { Auth0Provider } from "@bcwdev/auth0provider";
import { commentsService } from "../services/CommentsService";
import { pokemonsService } from "../services/PokemonsService";
import BaseController from "../utils/BaseController";

export class PokemonsController extends BaseController {
  constructor(){
    super('api/pokemon')
    this.router
      .get('', this.getAllPokemons)
      .get('/:pokemonId', this.getPokemonById)
      .get('/:pokemonId/comments', this.getAllCommentsByPokemonId)
      .use(Auth0Provider.getAuthorizedUserInfo)
      // NOTE This adds basic user security! :) 
      .post('', this.createPokemon)
      .put('/:pokemonId', this.editPokemon)
      .delete('/:pokemonId', this.deletePokemonById)
  }

  async deletePokemonById(req, res, next) {
    try {
      const pokemonId = req.params.pokemonId
      const pokemon = await pokemonsService.deletePokemonById(pokemonId)
      return res.send(pokemon)
    } catch (error) {
      next(error)
    }
  }
    async getAllCommentsByPokemonId(req, res, next) {
        try {
            const pokemonId = req.params.pokemonId
            const comments = await commentsService.getAllCommentsByPokemonId(pokemonId)
            res.send(comments)
        } catch (error) {
            next(error)
     }
    }


  async editPokemon(req, res, next) {
    try {
      const pokemonData = req.body
      const pokemonId = req.params.pokemonId
      const pokemon = await pokemonsService.editPokemon(pokemonData, pokemonId)
      return res.send(pokemon)
    } catch (error) {
      next(error)
    }
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