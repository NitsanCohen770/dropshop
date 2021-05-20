import React, { useContext } from 'react';
import { CartWrapper } from './styles';
import { FaShoppingCart } from 'react-icons/fa';
import { Icon } from '@iconify/react';
import ilsIcon from '@iconify-icons/fa/ils';
import CartContext from '../../context/CartContext';

export const Cart = () => {
  const { checkout } = useContext(CartContext);
  console.log(checkout);
  let totalQuantity = 0;
  if (checkout) {
    checkout.lineItems.forEach(lineItem => {
      totalQuantity += lineItem.quantity;
    });
  }
  return (
    <CartWrapper>
      <FaShoppingCart size="1.5em" />
      <div>
        {totalQuantity} item(s) / {checkout?.totalPrice || '0.00'}{' '}
        <Icon icon={ilsIcon} />
      </div>
    </CartWrapper>
  );
};
