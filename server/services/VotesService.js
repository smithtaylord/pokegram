import { dbContext } from "../db/DbContext.js"

class VotesService{
    async getAllVotes() {
        const votes = await dbContext.Votes.find()
        return votes
    }

    async createPokemonVote(pokemonData) {
        const voter = await dbContext.Votes.create(pokemonData)
        return voter
    }
}

export const votesService = new VotesService()