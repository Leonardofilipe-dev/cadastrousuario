import {validate, Joi} from "express-validation"

const validation = {
   body: Joi.object({
     nameUser: Joi.string().required(),  
      email: Joi.string().email().required(),
      password: Joi.string().regex(/[a-zA-Z0-9]{3,30}/).required(),
      photo:Joi.any()
    }),
  }

export default validate(validation)