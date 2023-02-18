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

function _drawPokemonComments() {
    let template = ''
    appState.activePokemonComments.forEach(c => template += c.commentsTemplate)
    setHTML('pokemonComments', template)
}

export class PokemonsController {
    constructor() {
        console.log('Hello from the Pokemons Controller');
        this.getAllPokemon()
        appState.on('pokemons', _drawPokemonsCards)
        appState.on('activePokemon', _drawActivePokemon)
        console.log(appState.account)
        appState.on('activePokemonComments', _drawPokemonComments)
    }

    async createComment() {
        try {
            // @ts-ignore
            window.event.preventDefault()
            // @ts-ignore
            const form = window.event.target
            const formData = getFormData(form)
            await pokemonsService.createComment(formData)
            console.log(formData)
            // @ts-ignore
            form.reset()
        } catch (error) {
            Pop.error(error.message)
            console.error(error)
        }
    }


    async getComments() {
        try {
            // @ts-ignore
            await pokemonsService.getComments(appState.activePokemon.id)
        } catch (error) {
            Pop.error(error)
        }
    }

    async getAllPokemon() {
        try {
            await pokemonsService.getAllPokemon()
        } catch (error) {
            Pop.error(error)
        }
    }

    async addVoteToPokemon(pokemonId) {
        try {
            await pokemonsService.addVoteToPokemon(pokemonId)
        } catch (error) {
            Pop.error(error.message)
            console.error(error)
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
            // @ts-ignore
            form.reset()
        } catch (error) {
            Pop.error(error.message)
        }
    }

    async setActivePokemon(pokemonId) {
        try {
            await pokemonsService.setActivePokemon(pokemonId)
            this.getComments()
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