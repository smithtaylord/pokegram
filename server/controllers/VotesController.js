import BaseController from "../utils/BaseController";
import { Auth0Provider } from "@bcwdev/auth0provider";
import { votesService } from "../services/VotesService.js";

export class VotesController extends BaseController {
constructor(){
  super('api/votes')
  this.router
  .use(Auth0Provider.getAuthorizedUserInfo)
  .post('', this.createPokemonVote)
  .get('', this.getAllVotes)
  // .delete('/:voteId', this.deletePokemonVote)
}

// async deletePokemonVote(req, res, next) {
//   try {
//     const voteId = req.params.voteId
//   } catch (error) {
//     next(error)
//   }
// }

async getAllVotes(req, res, next) {
  try {
    const votes = await votesService.getAllVotes()
    return res.send(votes)
  } catch (error) {
    next(error)
  }
}

async createPokemonVote(req, res, next) {
  try {
    const user = req.userInfo
    req.body.trainerId = user.id 
    const voter = await votesService.createPokemonVote(req.body)
    return res.send(voter)
  } catch (error) {
    next(error)
  }
}
}