'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _userController = require('../controllers/userController');

var _userController2 = _interopRequireDefault(_userController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userRouter = (0, _express.Router)();

userRouter.post('/', _userController2.default.create);
userRouter.get('/', _userController2.default.list);
userRouter.get('/:id', _userController2.default.findById);

exports.default = userRouter;