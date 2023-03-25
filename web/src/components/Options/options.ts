import styled from 'styled-components';

export const Box = styled.div`
  width: 58rem;
  height: 30rem;
  margin: 4px 4px 4px 4px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 5px;
`