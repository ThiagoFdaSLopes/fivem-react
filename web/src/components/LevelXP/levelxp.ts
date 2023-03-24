import styled from 'styled-components';

export const ProgressBar = styled.div`
  --s:20px; /* define the curve (make bigger to increase the curve, smaller to reduce)*/
  --p:50;   /* percentage of the progress without unit */
  --c:#1EA614; /* color */
  
  height: 20px;
  line-height:34px;
  background: 
     linear-gradient(to bottom right,var(--c) 49%,transparent 50%) 
        calc(1%*var(--p) + var(--p,0)/100*var(--s)) 0 / var(--s) 100%,
     linear-gradient(var(--c) 0 0) 
        0 / calc(1%*var(--p)) 100%,
     #0C0C0C;
  background-repeat:no-repeat;
  text-align: center;
  font-size: 24px;
  color:#fff;
  margin:5px;
`