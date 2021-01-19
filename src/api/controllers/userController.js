/* eslint-disable no-underscore-dangle */
import User from '../../models/user';
import helpers from '../../helpers/utils';

const {
  errorResponse,
  validateUserDetails
} = helpers;
/**
   * @export
   * @class UserController
   * @description Performs operations on the user
   */
class UserController {
  /**
    * @description -This method registers a product
    * @param {object} req - The request payload
    * @param {object} res - The response payload sent back from the method
    * @returns {object} - user object
    */
  static async create(req, res) {
    try {
      const { error } = validateUserDetails(req.body);

      if (error) {
        const errorField = error.details[0].context.key;
        const errorMessage = error.details[0].message;
        return errorResponse(res, 400, 'user_01', errorMessage, errorField);
      }

      const user = await User.create(req.body);

      const serializedUser = {
        id: user._id,
        name: user.name,
        address: user.address,
        phone: user.phone,
        dependent: user.dependent,
        createdAt: user.createdAt
      };

      return res.status(201).json({ return: serializedUser });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  /**
    * @description -This method registers a product
    * @param {object} req - The request payload
    * @param {object} res - The response payload sent back from the method
    * @returns {Array} - all user array
    */
  static async list(req, res) {
    try {
      const user = await User.find();

      return res.status(200).json({
        length: user.length,
        return: user
      });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  /**
    * @description -This method registers a product
    * @param {object} req - The request payload
    * @param {object} res - The response payload sent back from the method
    * @returns {object} - user object
    */
  static async findById(req, res) {
    const { id } = req.params;
    try {
      const user = await User.findOne({ _id: id });

      if (!user) {
        return errorResponse(res, 400, 'user_02', 'user not found');
      }

      return res.status(200).json({
        return: user
      });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default UserController;
