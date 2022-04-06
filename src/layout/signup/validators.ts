import { validateEmail } from '@/utils'

export const nameValidator = {
  required: 'Name is required',
}

export const emailValidator = {
  required: 'Email is required',
  validate: (value: string) => {
    if (!validateEmail(value)) {
      return 'Please enter a valid email'
    }

    return true
  },
}

export const passwordValidator = {
  required: 'Password is required',
  minLength: {
    value: 6,
    message: 'Password must be between 6 and 20 characters',
  },
  maxLength: {
    value: 20,
    message: 'Password must be between 6 and 20 characters',
  },
}
