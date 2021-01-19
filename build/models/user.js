'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _connection = require('../database/connection');

var _connection2 = _interopRequireDefault(_connection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserSchema = new _connection2.default.Schema({
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
  }
});

var User = _connection2.default.model('User', UserSchema);

exports.default = User;