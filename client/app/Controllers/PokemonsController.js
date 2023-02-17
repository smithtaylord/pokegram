import { appState } from "../AppState.js";
import { pokemonsService } from "../Services/PokemonsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawPokemonsCards() {
    let template = ''
    appState.pokemons.forEach(p => template += p.PokemonCardsTemplate)
    setHTML('pokemon-cards', template)
}

export class PokemonsController {
    constructor() {
        console.log('Hello from the Pokemons Controller');
        this.getAllPokemon()
        appState.on('pokemons', _drawPokemonsCards)
    }

    async getAllPokemon() {
        try {
            await pokemonsService.getAllPokemon()
        } catch (error) {
            Pop.error(error)
        }
    }

}