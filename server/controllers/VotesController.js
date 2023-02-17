import BaseController from "../utils/BaseController";
import { Auth0Provider } from "@bcwdev/auth0provider";
import { votesService } from "../services/VotesService.js";

export class VotesController extends BaseController {
constructor(){
  super('api/votes')
  this.router
  .use(Auth0Provider.getAuthorizedUserInfo)
  .post('', this.increasePokemonVote)
}


async increasePokemonVote(req, res, next) {
  try {
    const user = req.userInfo
    req.body.trainerId = user.id 
    const voter = await votesService.increasePokemonVote(req.body)
    return res.send(voter)
  } catch (error) {
    next(error)
  }
}
}