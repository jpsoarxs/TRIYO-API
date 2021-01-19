/* eslint-disable no-unused-vars */
import Joi from '@hapi/joi';
import 'dotenv/config';
import schema from './validationSchema';

const options = { language: { key: '{{key}} ' } };

export default {
  validateUserDetails(user) {
    return Joi.validate(user, schema.createUserSchema, options);
  },

  errorResponse(res, status, code, message, field = undefined) {
    if (field !== undefined) {
      return res.status(status).json({
        error: {
          status,
          code,
          message,
          field: field || null
        }
      });
    }
    return res.status(status).json({
      error: {
        status,
        code,
        message,
      }
    });
  },
};
