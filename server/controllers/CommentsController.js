import { commentsService } from "../services/CommentsService";
import BaseController from "../utils/BaseController";

export class CommentsController extends BaseController {
    constructor() {
        super('api/comments')
        this.router
        .get('', this.getAllCommentsByPokemonId)
        // .

    }

    async getAllCommentsByPokemonId(req, res, next) {
        try {
            const comments = await commentsService.getAllCommentsByPokemonId()
        } catch (error) {
            next(error)
        }
    }
}