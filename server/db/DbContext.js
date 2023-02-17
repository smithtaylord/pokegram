import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { PokemonSchema } from "../models/Pokemon";
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Pokemons = mongoose.model('Pokemon', PokemonSchema)
}

export const dbContext = new DbContext()
