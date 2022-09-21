import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { BirdSchema } from '../models/Bird.js';
import { ValueSchema } from '../models/Value'
import { WatchedBirdSchema } from '../models/WatchedBird.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Birds = mongoose.model('Bird', BirdSchema);
  WatchedBirds = mongoose.model('WatchedBird', WatchedBirdSchema)
}

export const dbContext = new DbContext()
