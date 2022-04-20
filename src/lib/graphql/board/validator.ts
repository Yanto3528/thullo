import joi from 'joi'

export const createBoardValidationSchema = joi.object({
  title: joi.string().required(),
  visibility: joi.string().required(),
})
