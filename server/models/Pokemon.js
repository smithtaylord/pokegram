import { Schema } from "mongoose";

export const PokemonSchema = new Schema(
  {
    name: {type: String, required: true, minLength: 2, maxLength: 30},
    imgUrl: {type: String, required: true, maxLength: 1000},
    isStarter: {type: Boolean, default: false}
  }, {timestamps: true, toJSON: {virtuals: true}}
)

PokemonSchema.virtual('voteCount', {
  localField: '_id',
  foreignField: 'pokemonId',
  ref: 'Vote',
  count: true
})