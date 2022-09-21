import { Auth0Provider } from "@bcwdev/auth0provider";
import { birdsService } from "../services/BirdsService.js";
import { watchedBirdsService } from "../services/WatchedBirdsService.js";
import BaseController from "../utils/BaseController.js";

export class BirdsController extends BaseController {
  constructor () {
    super('api/birds')
    this.router
      .get('', this.getBirds)
      .get('/:id/creeps', this.getCreeps)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createBird)
  }
  async getCreeps(req, res, next) {
    try {
      const creeps = await watchedBirdsService.getCreeps(req.params.id)
      return res.send(creeps)
    } catch (error) {
      next(error)
    }
  }
  async createBird(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const bird = await birdsService.createBird(req.body)
      return res.send(bird)
    } catch (error) {
      next(error)
    }
  }
  async getBirds(req, res, next) {
    try {
      const birds = await birdsService.getBirds(req.query)
      return res.send(birds)
    } catch (error) {
      next(error)
    }
  }


}