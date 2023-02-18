import { appState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { server } from "./AxiosService.js"
import { Comment } from "../Models/Comment.js";

class PokemonsService {
    async createComment(formData) {
        formData.pokemonId = appState.activePokemon.id
        // console.log(formData)
        // console.log(appState.activePokemon)
        let res = await server.post(`/api/comments`, formData) 
        let newComment = new Comment(res.data)
        console.log(res.data)
        appState.activePokemonComments.push(newComment)
        appState.emit('activePokemonComments')
    }

    async getComments(pokemonId) {
        console.log(pokemonId)
        let res = await server.get(`api/pokemon/${pokemonId}/comments`)
        console.log('[This is what the comments data looks like]', res.data)
        appState.activePokemonComments = res.data.map(c => new Comment(c))
        console.log(appState.activePokemonComments)

    }

    async addVoteToPokemon(pokemonId) {
        let res = await server.post('api/votes', {pokemonId})
        let pokemon = appState.pokemons.find(p => p.id == pokemonId)
        if(pokemon) {
            pokemon.voteCount++
        }
        appState.emit('pokemons')        

    }

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