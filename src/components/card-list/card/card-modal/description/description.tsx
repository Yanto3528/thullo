import { FileText, Edit2 } from 'react-feather'

import { Button, Flex, Text } from '@/ui-components'
import { Wrapper } from './styles'

export const Description = () => {
  return (
    <Wrapper>
      <Flex gap='1.5rem' margin='0 0 1rem 0'>
        <Text color='gray3' size='1.2rem'>
          <FileText size='1.2rem' /> Description
        </Text>
        <Button>
          <Edit2 size='1.2rem' /> Edit
        </Button>
      </Flex>
      <div>
        <Text lineHeight={1.5}>
          Ideas are created and share here through a card. Here you can describe what you&apos;d like to accomplish. For
          example you can follow three simple questions to create the card related to your idea: <br />* Why ? (Why do
          you wish to do it ?) <br />* What ? (What it is it, what are the goals, who is concerned) <br />* How ? (How
          do you think you can do it ? What are the required steps ?) <br /> <br />
          After creation, you can move your card to the todo list
        </Text>
      </div>
    </Wrapper>
  )
}
