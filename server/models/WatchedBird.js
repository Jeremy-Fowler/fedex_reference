import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const WatchedBirdSchema = new Schema(
  {
    birdId: { type: Schema.Types.ObjectId, ref: 'Bird', required: true },
    creepId: { type: Schema.Types.ObjectId, ref: 'Account', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

WatchedBirdSchema.virtual('creep', {
  localField: 'creepId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})
WatchedBirdSchema.virtual('bird', {
  localField: 'birdId',
  foreignField: '_id',
  justOne: true,
  ref: 'Bird'
})
