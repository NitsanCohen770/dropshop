import React, { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { CartItem, CartHeader, CartFooter } from './styles';
import { QuantityAdjuster } from '../QuantityAdjuster';
import { RemoveLineItem } from '../RemoveLineItem';
import { Icon } from '@iconify/react';
import ilsIcon from '@iconify-icons/fa/ils';

export const CartContents = () => {
  const { checkout, updateLineItem } = useContext(CartContext);
  const handleAdjustQuantity = ({ quantity, variantId }) => {
    updateLineItem({ quantity, variantId });
  };
  return (
    <section>
      <h1>Your cart</h1>
      <CartHeader>
        <div>Product</div>
        <div>Unit Price</div>
        <div>Quantity</div>
        <div>Amount</div>
      </CartHeader>
      {checkout?.lineItems?.map(lineItem => (
        <CartItem key={lineItem.variant.id}>
          <div>
            <div>{lineItem.title}</div>
            <div>
              {lineItem.variant.title === 'Default Title'
                ? ''
                : lineItem.variant.title}
            </div>
          </div>
          <div>
            {lineItem.variant.price} <Icon icon={ilsIcon} />
          </div>
          <div>
            <QuantityAdjuster item={lineItem} onAdjust={handleAdjustQuantity} />
          </div>
          <div>
            {(lineItem.quantity * lineItem.variant.price).toFixed(2)}{' '}
            <Icon icon={ilsIcon} />
          </div>
          <div>
            <RemoveLineItem lineItemId={lineItem.id} />
          </div>
        </CartItem>
      ))}
      <CartFooter>
        <div>
          {' '}
          <strong>Total:</strong>
        </div>
        <div>
          <span>
            {checkout?.totalPrice} <Icon icon={ilsIcon} />
          </span>
        </div>
      </CartFooter>
    </section>
  );
};
