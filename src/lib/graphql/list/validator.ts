import joi from 'joi'

export const createListValidationSchema = joi.object({
  title: joi.string().required(),
})
