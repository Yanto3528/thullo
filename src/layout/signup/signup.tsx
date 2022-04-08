import { Mail, Lock, User as UserIcon } from 'react-feather'
import Image from 'next/image'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

import { Text, Heading, Input, Button, Flex, Label } from '@/ui-components'
import { useSignupUserMutation } from '@/lib/react-query/mutation'

import { Wrapper, CardFormWrapper } from './styles'
import { FormValues } from './types'
import { nameValidator, emailValidator, passwordValidator } from './validators'

export const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  const mutation = useSignupUserMutation()

  const onSubmit = async (data: FormValues) => {
    mutation.mutate(data)
  }

  return (
    <Wrapper>
      <Image src='/images/Logo.svg' width={85} height={29} alt='thullo logo' />
      <CardFormWrapper onSubmit={handleSubmit(onSubmit)}>
        <Heading as='h2' align='center' weight={600}>
          Create your account today
        </Heading>
        <Text color='gray2' align='center' mt='1rem' mb='2rem'>
          It&apos;s free and easy
        </Text>
        <Flex direction='column' alignItems='stretch' gap='2rem'>
          <div>
            <Label htmlFor='name'>Name</Label>
            <Input
              type='text'
              id='name'
              placeholder='Enter your name'
              leftElement={<UserIcon size='1.4rem' />}
              {...register('name', nameValidator)}
            />
            {errors.name && (
              <Text color='red' size='1.2rem'>
                {errors.name.message}
              </Text>
            )}
          </div>
          <div>
            <Label htmlFor='email'>Email</Label>
            <Input
              type='email'
              id='email'
              placeholder='Enter your email'
              leftElement={<Mail size='1.4rem' />}
              {...register('email', emailValidator)}
            />
            {errors.email && (
              <Text color='red' size='1.2rem'>
                {errors.email.message}
              </Text>
            )}
          </div>
          <div>
            <Label htmlFor='password'>Password</Label>
            <Input
              type='password'
              id='password'
              placeholder='Enter your password'
              leftElement={<Lock size='1.4rem' />}
              {...register('password', passwordValidator)}
            />
            {errors.password && (
              <Text color='red' size='1.2rem'>
                {errors.password.message}
              </Text>
            )}
          </div>
          <Button justify='center' padding='1rem 2.4rem'>
            Login
          </Button>
        </Flex>
      </CardFormWrapper>
      <Flex gap='1rem' margin='2rem 0 0 0'>
        <Text>Already have an account?</Text>
        <Link href='/login'>
          <a>Login here</a>
        </Link>
      </Flex>
    </Wrapper>
  )
}
