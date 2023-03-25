import styled from 'styled-components';

interface LevelUp {
  color: string;
}

export const ProgressBar = styled.div<LevelUp>`
  background-color: ${(props) => props.color};
  height: 20px;
  line-height:34px;
  text-align: center;
  font-size: 24px;
`