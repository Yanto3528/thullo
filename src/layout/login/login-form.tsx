import { Mail, Lock } from 'react-feather'
import Image from 'next/image'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

import { Text, Heading, Input, Button, Flex, Label } from '@/ui-components'
import { useLoginUserMutation } from '@/lib/react-query/mutation'

import { Wrapper, CardFormWrapper } from './styles'
import { FormValues } from './types'
import { emailValidator, passwordValidator } from './validators'

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  const mutation = useLoginUserMutation()

  const onSubmit = (data: FormValues) => {
    mutation.mutate(data)
  }

  return (
    <Wrapper>
      <Image src='/images/Logo.svg' width={85} height={29} alt='thullo logo' />
      <CardFormWrapper onSubmit={handleSubmit(onSubmit)}>
        <Heading as='h2' align='center' weight={600}>
          Welcome back
        </Heading>
        <Text color='gray2' align='center' mt='1rem' mb='2rem'>
          Enter your credentials to access your account
        </Text>
        <Flex direction='column' alignItems='stretch' gap='2rem'>
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
        <Text>Don&apos;t have an account yet?</Text>
        <Link href='/signup'>
          <a>Sign up here</a>
        </Link>
      </Flex>
    </Wrapper>
  )
}
