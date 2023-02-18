
import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"

class CommentsService {


   async getAllCommentsByPokemonId(pokemonId) {

      const comments = await dbContext.Comments.find({ pokemonId }).populate('trainer')
      if (!comments) {
         throw new BadRequest("bad pokemon ID")
      }
      return comments
   }

   async createComment(newComment) {
      //    const pokemon = await dbContext.Pokemons.findById(newComment.pokemonId) 
      //    if (!pokemon) {
      //     throw new BadRequest('there is no pokemon with this ID')
      //    }

      const comment = await dbContext.Comments.create(newComment)
      await comment
      .populate('trainer', 'name')
      return comment


   }

}

export const commentsService = new CommentsService()