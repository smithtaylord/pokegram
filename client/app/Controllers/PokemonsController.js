import { appState } from "../AppState.js";
import { pokemonsService } from "../Services/PokemonsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawPokemonsCards() {
    let template = ''
    appState.pokemons.forEach(p => template += p.PokemonCardsTemplate)
    setHTML('pokemon-cards', template)
}

function _drawActivePokemon() {
    // @ts-ignore
    setHTML('activePokemon', appState.activePokemon.activePokemonTemplate)

}

export class PokemonsController {
    constructor() {
        console.log('Hello from the Pokemons Controller');
        this.getAllPokemon()
        appState.on('pokemons', _drawPokemonsCards)
        appState.on('activePokemon', _drawActivePokemon)
    }

    async getAllPokemon() {
        try {
            await pokemonsService.getAllPokemon()
        } catch (error) {
            Pop.error(error)
        }
    }

    async createPokemon() {
        try {
            // @ts-ignore
            window.event.preventDefault();
            // @ts-ignore
            let form = window.event.target;
            let newPokemon = getFormData(form);
            // console.log(newPokemon);
            // @ts-ignore
            if (newPokemon.isStarter == "on") {
                // @ts-ignore
                newPokemon.isStarter = true
            } else {
                // @ts-ignore
                newPokemon.isStarter = false
            }
            await pokemonsService.createPokemon(newPokemon)
        } catch (error) {
            Pop.error(error.message)
        }
    }

    async setActivePokemon(pokemonId) {
        try {
            await pokemonsService.setActivePokemon(pokemonId)
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }

    async deletePokemon(pokemonId) {
        try {
            if (await Pop.confirm('Are you sure you want to set this pokemon free?')) {
                await pokemonsService.deletePokemon(pokemonId)
            }
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }

}