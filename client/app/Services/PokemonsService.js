import { appState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { server } from "./AxiosService.js"

class PokemonsService {
    async getAllPokemon() {
        const res = await server.get('api/pokemon')
        console.log('[HERE ARE ALL THE POKEMON', res.data);
        appState.pokemons = res.data.map(p => new Pokemon(p))
        appState.emit('pokemons')

    }

}

export const pokemonsService = new PokemonsService()