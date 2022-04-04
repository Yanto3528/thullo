import { Tag as TagIcon } from 'react-feather'

import { Flex, Button, Text, Dropdown, Input, Grid, Badge } from '@/ui-components'
import { theme } from '@/styles/theme'

import { Wrapper, LabelColor } from './styles'
import { labelColors } from './constants'

export const LabelAction = () => {
  return (
    <Dropdown
      width='24.5rem'
      content={
        <Button bg='lightGray' color='gray3' width='100%'>
          <TagIcon size='1.2rem' /> Labels
        </Button>
      }
    >
      <Wrapper>
        <Flex direction='column' gap='0.5rem' alignItems='flex-start'>
          <Text size='1.4rem' weight={500}>
            Label
          </Text>
          <Text size='1.4rem' weight={500} color='gray3' family='Noto Sans'>
            Select a name and color
          </Text>
        </Flex>
        <Input placeholder='Enter label name...' />
        <Grid gap='0.8rem' columns={4}>
          {labelColors.map((labelColor) => (
            <LabelColor key={labelColor.name} color={labelColor.name} />
          ))}
        </Grid>
        <Flex gap='0.5rem'>
          <TagIcon size='1.2rem' color={theme.colors.gray3} />
          <Text color='gray3' size='1.2rem'>
            Available
          </Text>
        </Flex>
        <Flex gap='1.2rem'>
          <Badge colorScheme='primary'>Technology</Badge>
          <Badge colorScheme='green'>Design</Badge>
        </Flex>
        <Flex justify='center'>
          <Button padding='1rem 2.7rem'>Add</Button>
        </Flex>
      </Wrapper>
    </Dropdown>
  )
}
