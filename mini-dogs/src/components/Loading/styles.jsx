import styled, { keyframes } from "styled-components";

const run = keyframes`
  to {
    transform: translateX(-400px);
  }
`;

export const Loading = styled.div`
  transform: translateX(-1000px);
  width: 1000%;
  border: 2px dashed black;
  animation: ${run} 0.9s infinite linear;
  margin-bottom: 40px;
`;
