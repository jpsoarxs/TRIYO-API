import Joi from '@hapi/joi';

const createUserSchema = {
  name: Joi.string().required(),
  address: Joi.string().required(),
  phone: Joi.string().required(),
  dependent: Joi.array().items(
    Joi.object().keys({
      name: Joi.string(),
      age: Joi.number(),
      type: Joi.string()
    })
  )
};

export default {
  createUserSchema,
};
