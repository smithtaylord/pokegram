import { Logger } from "sass";
import { commentsService } from "../services/CommentsService";
import BaseController from "../utils/BaseController";
import { Auth0Provider } from "@bcwdev/auth0provider";

export class CommentsController extends BaseController {
    constructor() {
        super('api/comments')
        this.router
        .use(Auth0Provider.getAuthorizedUserInfo)
        // .get('/:pokemonId/comments', this.getAllCommentsByPokemonId)
        .post('', this.createComment)

    }



    async createComment(req, res, next) {
        try {
            // const pokemonId = req.params.pokemonId
            const user = req.userInfo
            req.body.trainerId = user.id
            const newComment = req.body
            const postedComment = await commentsService.createComment(newComment)
            return res.send(postedComment)
        } catch (error) {
            next(error)
        }
    }
}