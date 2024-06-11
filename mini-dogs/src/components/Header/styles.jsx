import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  margin-bottom: 40px;

  h1 {
    font-size: 1rem;
  }
`;

export const Logout = styled.button`
  background-color: red;
  border: 2px solid black;
  border-radius: 50%;
  width: 8px;
  height: 8px;
  cursor: pointer;
  pointer-events: none;

  &[data-logged="true"] {
    background-color: #5cb85c;
    pointer-events: auto;
  }
`;
