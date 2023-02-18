import { dbContext } from "../db/DbContext"

class CommentsService {
 

   async getAllCommentsByPokemonId() {

       const comments = await dbContext.Comments.find()
       return comments
   }



}

export const commentsService = new CommentsService()