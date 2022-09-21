import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const BirdSchema = new Schema(
  {
    name: { type: String, required: true, maxLength: 20, minLength: 2 },
    imgUrl: { type: String, required: true, maxLength: 200 },
    creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

BirdSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})
BirdSchema.virtual('timesWatched', {
  localField: '_id',
  foreignField: 'birdId',
  ref: 'WatchedBird',
  count: true
})
