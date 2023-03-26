import React from 'react'
import * as Box from './item'

interface Item {
  index: number
  img?: string
  onclick?: () => void
}

const Items: React.FC<Item> = ({ index, img, onclick }) => {
  return (
    <Box.Container onClick={onclick}>
      <Box.Index>{ index }</Box.Index>
      <img src={img} alt="Item" />
    </Box.Container>
  )
}

export default Items