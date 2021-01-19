'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable no-underscore-dangle */


var _user = require('../../models/user');

var _user2 = _interopRequireDefault(_user);

var _utils = require('../../helpers/utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var errorResponse = _utils2.default.errorResponse,
    validateUserDetails = _utils2.default.validateUserDetails;
/**
   * @export
   * @class UserController
   * @description Performs operations on the user
   */

var UserController = function () {
  function UserController() {
    _classCallCheck(this, UserController);
  }

  _createClass(UserController, null, [{
    key: 'create',

    /**
      * @description -This method registers a product
      * @param {object} req - The request payload
      * @param {object} res - The response payload sent back from the method
      * @returns {object} - user object
      */
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var _validateUserDetails, error, errorField, errorMessage, user, serializedUser;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _validateUserDetails = validateUserDetails(req.body), error = _validateUserDetails.error;

                if (!error) {
                  _context.next = 6;
                  break;
                }

                errorField = error.details[0].context.key;
                errorMessage = error.details[0].message;
                return _context.abrupt('return', errorResponse(res, 400, 'user_01', errorMessage, errorField));

              case 6:
                _context.next = 8;
                return _user2.default.create(req.body);

              case 8:
                user = _context.sent;
                serializedUser = {
                  id: user._id,
                  name: user.name,
                  address: user.address,
                  phone: user.phone,
                  dependent: user.dependent,
                  createdAt: user.createdAt
                };
                return _context.abrupt('return', res.status(201).json({ return: serializedUser }));

              case 13:
                _context.prev = 13;
                _context.t0 = _context['catch'](0);

                res.status(500).json({ error: 'Internal Server Error' });

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 13]]);
      }));

      function create(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return create;
    }()

    /**
      * @description -This method registers a product
      * @param {object} req - The request payload
      * @param {object} res - The response payload sent back from the method
      * @returns {Array} - all user array
      */

  }, {
    key: 'list',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var user;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _user2.default.find();

              case 3:
                user = _context2.sent;
                return _context2.abrupt('return', res.status(201).json({
                  length: user.length,
                  return: user
                }));

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2['catch'](0);

                res.status(500).json({ error: 'Internal Server Error' });

              case 10:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 7]]);
      }));

      function list(_x3, _x4) {
        return _ref2.apply(this, arguments);
      }

      return list;
    }()

    /**
      * @description -This method registers a product
      * @param {object} req - The request payload
      * @param {object} res - The response payload sent back from the method
      * @returns {object} - user object
      */

  }, {
    key: 'findById',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        var id, user;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                id = req.params.id;
                _context3.prev = 1;
                _context3.next = 4;
                return _user2.default.findOne({ _id: id });

              case 4:
                user = _context3.sent;

                if (user) {
                  _context3.next = 7;
                  break;
                }

                return _context3.abrupt('return', errorResponse(res, 400, 'user_02', 'user not found'));

              case 7:
                return _context3.abrupt('return', res.status(201).json({
                  return: user
                }));

              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3['catch'](1);

                res.status(500).json({ error: 'Internal Server Error' });

              case 13:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 10]]);
      }));

      function findById(_x5, _x6) {
        return _ref3.apply(this, arguments);
      }

      return findById;
    }()
  }]);

  return UserController;
}();

exports.default = UserController;