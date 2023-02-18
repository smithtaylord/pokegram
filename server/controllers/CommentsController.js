import { Logger } from "sass";
import { commentsService } from "../services/CommentsService";
import BaseController from "../utils/BaseController";

export class CommentsController extends BaseController {
    constructor() {
        super('api/comments')
        this.router
        .get('', this.getAllCommentsByPokemonId)
        .post('', this.createComment)

    }

    async getAllCommentsByPokemonId(req, res, next) {
        try {
            const comments = await commentsService.getAllCommentsByPokemonId()
            res.send(comments)
        } catch (error) {
            next(error)
        }
    }

    async createComment(req, res, next) {
        try {
            // const trainer = req.userInfo
            // req.body.trainerId = trainer.trainer.Id
            const newComment = req.body
            const postedComment = await commentsService.createComment(newComment)
            return res.send(postedComment)
        } catch (error) {
            next(error)
        }
    }
}