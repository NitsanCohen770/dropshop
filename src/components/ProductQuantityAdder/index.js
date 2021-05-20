import React, { useContext, useState } from 'react';
import { ProductQuantityAdderWrapper } from './styles';
import { Button } from '../Button';
import { Input } from '../Input';
import CartContext from '../../context/CartContext';

export const ProductQuantityAdder = ({ variantId, available }) => {
  const [quantity, setQuantity] = useState(1);
  const { updateLineItem } = useContext(CartContext);
  const handleQuantityChange = event => {
    if (event.target.value < 1) {
      setQuantity(1);
      return;
    }
    setQuantity(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    updateLineItem({ variantId, quantity: parseInt(quantity, 10) });
  };

  return (
    <ProductQuantityAdderWrapper>
      <strong>Quantity</strong>
      <form onSubmit={handleSubmit}>
        <Input type="number" value={quantity} onChange={handleQuantityChange} />
        <Button fullWidth>Add to cart</Button>
      </form>
    </ProductQuantityAdderWrapper>
  );
};
