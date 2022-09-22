import { appState } from "../AppState.js";
import { Bird } from "../Models/Bird.js";
import { server } from "./AxiosService.js"

class BirdsService {
  async getBirds() {
    const res = await server.get('api/birds')
    console.log(res.data);
    appState.birds = res.data.map(b => new Bird(b))
  }

}

export const birdsService = new BirdsService()