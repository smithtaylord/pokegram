import { BadRequest } from "@bcwdev/auth0provider/lib/Errors"
import { dbContext } from "../db/DbContext"

class CommentsService {
 

   async getAllCommentsByPokemonId() {

       const comments = await dbContext.Comments.find()
       return comments
   }

async createComment(newComment) {
   const pokemon = await dbContext.Pokemons.findById(newComment.pokemonId) 
   if (!pokemon) {
    throw new BadRequest('there is no pokemon with this ID')
   }

   const comment = await dbContext.Comments.create(newComment)
   return comment


}

}

export const commentsService = new CommentsService()