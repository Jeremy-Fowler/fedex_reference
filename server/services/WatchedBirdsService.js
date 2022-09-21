import { dbContext } from "../db/DbContext.js"
import { birdsService } from "./BirdsService.js"

class WatchedBirdsService {
  async getCreeps(birdId) {
    const creeps = await dbContext.WatchedBirds.find({ birdId }).populate('creep', 'name picture')
    return creeps
  }
  async watchBird(body) {
    const foundBird = await dbContext.WatchedBirds.findOne(body)
    if (foundBird) {
      await foundBird.delete()
      return 'Deleted that bird, bud'
    }
    else {
      await birdsService.getBird(body.birdId)
      const bird = await dbContext.WatchedBirds.create(body)
      await bird.populate('bird')
      return bird
    }
  }


}

export const watchedBirdsService = new WatchedBirdsService()