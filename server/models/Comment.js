import { Schema } from "mongoose";

let ObjectId = Schema.Types.ObjectId

export const CommentSchema = new Schema (
    {
        description: { type: String, required: true, minLength: 10, maxLength: 1000 },

        pokemonId: { type: String, ObjectId, ref: 'Pokemon', required: true, },
        trainerId: { type: ObjectId, ref: "Account" },

    }, 
    { timestamps: true, toJSON: {virtuals: true}}
)
CommentSchema.virtual('pokemon', {
    ref: "Pokemon",
    justOne: true,
    localField: "pokemonId",
    foreignField: "_id"
})

CommentSchema.virtual('trainer', {
    ref: "Account",
    justOne: true,
    localField: "trainerId",
    foreignField: "_id"
})