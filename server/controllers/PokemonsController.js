import { pokemonsService } from "../services/PokemonsService";
import BaseController from "../utils/BaseController";

export class PokemonsController extends BaseController {
  constructor(){
    super('api/pokemon')
    this.router
      .get('', this.getAllPokemons)
  }
  async getAllPokemons(req, res, next) {
    try {
      const pokemons = await pokemonsService.getAllPokemons()
      return res.send(pokemons)
    } catch (error) {
      next(error)
    }
  }
}