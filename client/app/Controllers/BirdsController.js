import { appState } from "../AppState.js"
import { birdsService } from "../Services/BirdsService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"

function _drawBirds() {
  let template = ''
  appState.birds.forEach(b => template += b.Template)
  setHTML('birds', template)
}

export class BirdsController {
  constructor () {
    this.getBirds()
    appState.on('birds', _drawBirds)
  }

  async getBirds() {
    try {
      await birdsService.getBirds()
    } catch (error) {
      console.error(error)
      Pop.error(error.message)
    }
  }
}