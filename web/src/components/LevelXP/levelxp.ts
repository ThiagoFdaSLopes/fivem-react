import styled from 'styled-components';

interface LevelUp {
  width: number;
}

export const ProgressBar = styled.div`
  background-color: black;
  width: 100%;
  height: 20px;
  line-height:34px;
  text-align: center;
  font-size: 24px;
`

export const BarProgress = styled.div<LevelUp>`
  background-color: ${(props) => props.color};
  width: ${(props) => `${props.width}%`};
  height: 20px;
  line-height:34px;
  text-align: center;
  font-size: 24px;
`