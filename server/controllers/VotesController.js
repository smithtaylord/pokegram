import BaseController from "../utils/BaseController";
import { Auth0Provider } from "@bcwdev/auth0provider";

export class VotesController extends BaseController {
constructor(){
  super('api/votes')
  this.router
  .use(Auth0Provider.getAuthorizedUserInfo)
}
}