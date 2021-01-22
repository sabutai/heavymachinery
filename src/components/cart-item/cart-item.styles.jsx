import styled, { css } from 'styled-components';

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 70px;
  margin-bottom: 5px;

  img {
    width: 40%;
    height: 80%;
  }
`;

export const ItemDetailsContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;

export const Item = styled.span`
  font-size: 16px;
`;
