import { Schema } from "mongoose";
let objectId = Schema.Types.ObjectId
export const VoteSchema = new Schema (
  {
    pokemonId: {type: objectId, required: true, ref: 'Pokemon'},
    trainerId: {type: objectId, required: true, ref: 'Account'}
  }, {timestamps: true, toJSON: {virtuals: true}}
)

VoteSchema.virtual('trainer',{
  localField: 'trainerId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})

VoteSchema.index({pokemonId: 1, trainerId: 1},{unique: true} )