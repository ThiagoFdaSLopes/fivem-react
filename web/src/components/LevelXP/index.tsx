import React from 'react'
import * as Progress from './levelxp'

interface Props {
  color: string;
}


const LevelXP: React.FC<Props> = ({ color }) => {
  return (
    <Progress.ProgressBar color={color}/>
  )
}

export default LevelXP