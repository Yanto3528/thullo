import { Image as ImageIcon, Search } from 'react-feather'

import { Button, Dropdown, Text, Input, Grid } from '@/ui-components'
import { generateId } from '@/utils'

import { Wrapper, StyledImage } from './styles'

const tempImageSrc =
  'https://images.unsplash.com/photo-1569098644584-210bcd375b59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'

const images = Array(12)
  .fill(null)
  .map(() => generateId())

export const CoverAction = () => {
  return (
    <Dropdown
      width='25rem'
      content={
        <Button bg='lightGray' color='gray3' width='100%'>
          <ImageIcon size='1.2rem' /> Cover
        </Button>
      }
    >
      <Wrapper>
        <div>
          <Text weight={500}>Photo Search</Text>
          <Text color='gray3'>Search Unsplash for photos</Text>
        </div>
        <Input placeholder='Keyword...' rightElement={<Search size='1.4rem' />} />
        <Grid gap='0.8rem' columns={4}>
          {images.map((imageId) => (
            <StyledImage key={imageId} src={tempImageSrc} width={50} height={50} />
          ))}
        </Grid>
      </Wrapper>
    </Dropdown>
  )
}
