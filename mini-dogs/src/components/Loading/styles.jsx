import styled, { keyframes } from "styled-components";

const run = keyframes`
  to {
    transform: translateX(400px);
  }
`;

export const Loading = styled.div`
  width: 100%;
  height: 4px;
  border-radius: 4px;
  background-color: black;

  margin: 40px 0;
  overflow: hidden;

  &::after {
    content: "";
    display: block;
    height: 4px;
    width: 25%;
    background-color: white;
    border-radius: 4px;
    animation: ${run} 0.6s linear infinite;
  }
`;
