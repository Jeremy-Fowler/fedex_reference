import { AuthController } from './Controllers/AuthController.js';
import { BirdsController } from './Controllers/BirdsController.js';
import { ValuesController } from './Controllers/ValuesController.js';

class App {
  authController = new AuthController();
  valuesController = new ValuesController();
  birdsController = new BirdsController()
}

// @ts-ignore
window.app = new App()
