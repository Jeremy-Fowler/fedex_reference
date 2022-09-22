import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class BirdsService {
  async createBird(body) {
    const bird = await dbContext.Birds.create(body)
    await bird.populate('creator', 'name picture')
    return bird
  }
  async getBirds(query) {
    const birds = await dbContext.Birds.find({ query }).populate('timesWatched').populate('creator', 'name picture')
    return birds
  }

  async getBird(id) {
    const bird = await dbContext.Birds.findById(id).populate('creator', 'name picture')
    if (!bird) {
      throw new BadRequest('No Bird Found')
    }
    return bird
  }

}

export const birdsService = new BirdsService()