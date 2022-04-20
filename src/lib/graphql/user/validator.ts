import joi from 'joi'

export const signupValidationSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).max(20).required(),
})

export const loginValidationSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(6).max(20).required(),
})
