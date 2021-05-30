import React, { useContext } from 'react';
import ProductContext from '../../context/ProductContext';
import { ProductsGrid } from '../../components';
export const FeaturedProducts = () => {
  const { collections } = useContext(ProductContext);
  console.log(collections);
  const featuredCollection = collections[0].find(
    collections => collections.title === 'Featured products on our store'
  );
  console.log(featuredCollection.products);
  return (
    <section>
      <h1>{featuredCollection.title}</h1>
      <ProductsGrid products={featuredCollection.products}></ProductsGrid>
    </section>
  );
};
