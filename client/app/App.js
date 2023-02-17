import { AuthController } from './Controllers/AuthController.js';
import { PokemonsController } from './Controllers/PokemonsController.js';
import { ValuesController } from './Controllers/ValuesController.js';

class App {
  authController = new AuthController();
  // valuesController = new ValuesController();
  pokemonsController = new PokemonsController();
}
// @ts-ignore
window.app = new App()
