import React from 'react';

import { CartItemContainer, ItemDetailsContainer, Item } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <img src={imageUrl} alt='item' />
    <ItemDetailsContainer>
      <Item>{name}</Item>
      <Item> - {quantity} * ${price}</Item>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;