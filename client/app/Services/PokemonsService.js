import { appState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { server } from "./AxiosService.js"

class PokemonsService {
    async deletePokemon(pokemonId) {
        const res = await server.delete(`api/pokemon/${pokemonId}`)
        console.log('[delete pokemon]', res.data);
        let pokemonIndex = appState.pokemons.findIndex(p => p.id == pokemonId)
        appState.pokemons.splice(pokemonIndex, 1)
        appState.emit('pokemons')

    }
    async setActivePokemon(pokemonId) {
        let pokemon = appState.pokemons.find(p => p.id == pokemonId)
        // @ts-ignore
        appState.activePokemon = pokemon
        console.log(appState.activePokemon);

    }
    async createPokemon(newPokemon) {
        const res = await server.post('api/pokemon', newPokemon)
        // console.log(res.data, 'CREATED POKEMAN :)))');
        appState.pokemons.push(new Pokemon(res.data))
        appState.emit('pokemons')
    }
    async getAllPokemon() {
        const res = await server.get('api/pokemon')
        console.log('[HERE ARE ALL THE POKEMON', res.data);
        appState.pokemons = res.data.map(p => new Pokemon(p))
        appState.emit('pokemons')

    }

}

export const pokemonsService = new PokemonsService()