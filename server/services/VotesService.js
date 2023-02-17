import { dbContext } from "../db/DbContext.js"

class VotesService{
    async increasePokemonVote(pokemonData) {
        const voter = await dbContext.Votes.create(pokemonData)
        return voter
    }
}

export const votesService = new VotesService()