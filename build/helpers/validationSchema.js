'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _joi = require('@hapi/joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createUserSchema = {
  name: _joi2.default.string().required(),
  address: _joi2.default.string().required(),
  phone: _joi2.default.string().required(),
  dependent: _joi2.default.array().items(_joi2.default.object().keys({
    name: _joi2.default.string(),
    age: _joi2.default.number(),
    type: _joi2.default.string()
  }))
};

exports.default = {
  createUserSchema: createUserSchema
};