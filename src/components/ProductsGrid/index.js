import React from 'react';
import { ProductsGridWrapper } from './styles';
import { ProductTile } from '../ProductTile';
export const ProductsGrid = products => {
  return (
    <ProductsGridWrapper>
      {products.products.map(product => (
        <ProductTile
          handle={product.handle}
          key={product.shopifyId}
          title={product.title}
          minPrice={product.priceRange.minVariantPrice.amount}
          description={product.description}
          imageFluid={product.images[0].localFile.childImageSharp.fluid}
        />
      ))}
    </ProductsGridWrapper>
  );
};
