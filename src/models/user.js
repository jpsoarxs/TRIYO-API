import mongoose from '../database/connection';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: false
  },
  dependent: {
    type: Array,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
});

const User = mongoose.model('User', UserSchema);

export default User;
