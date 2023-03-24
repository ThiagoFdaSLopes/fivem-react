import styled from 'styled-components';

export const HeaderBoxPassContainer = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 7.5rem;
  border-radius: 10px;
  /* background-color: rgb(244, 149, 25); */

  img {
    width: 120px;
    margin-left: 2rem;
  }
`

export const PBattlePass = styled.p`
  font-style: normal;
  font-weight: 900;
  font-size: 52px;
  padding: 0;
  margin: 0;
  text-align: center;
  color: white;
`

export const SeasonPassP = styled.p`
  padding: 0;
  margin: 0;
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  text-align: center;
  color: white;

  span {
    color: aqua;
  }
`

export const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  /* background-color: rgb(244, 149, 25); */
`

export const TagsPDiv = styled.div`
  width: max-content;
  height: max-content;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`