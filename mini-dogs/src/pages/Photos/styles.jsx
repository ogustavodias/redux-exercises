import styled from "styled-components";

export const Photos = styled.ul`
  display: grid;
  gap: 20px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  background-color: #f5f5f5;
  border-radius: 4px;

  img {
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 4px;
  }

  span {
    &:nth-of-type(1) {
      font-size: 1.125rem;
      font-weight: bold;
    }

    &:nth-of-type(2) {
      font-size: 0.875rem;
      color: gray;
      margin: 0 15px 0 auto;
    }
  }
`;
