import { Auth0Provider } from "@bcwdev/auth0provider";
import { watchedBirdsService } from "../services/WatchedBirdsService.js";
import BaseController from "../utils/BaseController.js";

export class WatchedBirdsController extends BaseController {
  constructor () {
    super('api/watchedBirds')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.watchBird)
  }
  async watchBird(req, res, next) {
    try {
      req.body.creepId = req.userInfo.id
      const bird = await watchedBirdsService.watchBird(req.body)
      return res.send(bird)
    } catch (error) {
      next(error)
    }
  }
}