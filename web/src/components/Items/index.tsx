import React from 'react'
import * as Box from './item'

interface Item {
  index: number
  img?: string
}

const Items: React.FC<Item> = ({ index, img }) => {
  return (
    <Box.Container>
      <Box.Index>{ index }</Box.Index>
      <img src={img} alt="Item" />
    </Box.Container>
  )
}

export default Items