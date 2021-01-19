'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _joi = require('@hapi/joi');

var _joi2 = _interopRequireDefault(_joi);

require('dotenv/config');

var _validationSchema = require('./validationSchema');

var _validationSchema2 = _interopRequireDefault(_validationSchema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = { language: { key: '{{key}} ' } }; /* eslint-disable no-unused-vars */
exports.default = {
  validateUserDetails: function validateUserDetails(user) {
    return _joi2.default.validate(user, _validationSchema2.default.createUserSchema, options);
  },
  errorResponse: function errorResponse(res, status, code, message) {
    var field = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;

    if (field !== undefined) {
      return res.status(status).json({
        error: {
          status: status,
          code: code,
          message: message,
          field: field || null
        }
      });
    }
    return res.status(status).json({
      error: {
        status: status,
        code: code,
        message: message
      }
    });
  }
};