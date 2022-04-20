import joi from 'joi'

export const createListValidationSchema = joi.object({
  boardId: joi.string().required(),
  title: joi.string().required(),
})
