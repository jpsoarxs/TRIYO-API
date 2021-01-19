'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv/config');

// mongosse.connect(
//   `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
//   { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
// );


_mongoose2.default.connect('mongodb+srv://admins:258079@cluster0.dldco.mongodb.net/projeto?authSource=admin&replicaSet=atlas-kg3qha-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true', {
  useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true
});

_mongoose2.default.Promise = global.Promise;

exports.default = _mongoose2.default;