import React from 'react'
import * as Progress from './levelxp'

interface Props {
  color: string;
  width: number;
}

const LevelXP: React.FC<Props> = ({ width }) => {
  return (
    <Progress.ProgressBar>
      <Progress.BarProgress color="green" width={ width }/>
    </Progress.ProgressBar>
  )
}

export default LevelXP