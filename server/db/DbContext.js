import mongoose from 'mongoose';
import { AccountSchema } from '../models/Account';
import { CommentSchema } from '../models/Comment';
import { PokemonSchema } from "../models/Pokemon";
import { ValueSchema } from '../models/Value';
import { VoteSchema } from '../models/Vote.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);



  Pokemons = mongoose.model('Pokemon', PokemonSchema);

  Votes = mongoose.model('Vote', VoteSchema);

  Comments = mongoose.model('Comment', CommentSchema);
}

export const dbContext = new DbContext()
