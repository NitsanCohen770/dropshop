import React, { useContext } from 'react';
import {
  Layout,
  SEO,
  HomepageCollectionsGrid,
  FeaturedProducts,
} from '../components';
import ProductContext from '../context/ProductContext';
const IndexPage = () => {
  const { collections } = useContext(ProductContext);
  console.log(collections);
  return (
    <Layout>
      <HomepageCollectionsGrid
        collections={collections[0].filter(
          collection => collection.title !== 'Featured products on our store'
        )}
      />
      {!!collections[0].find(
        collection => collection.title === 'Featured products on our store'
      ) && <FeaturedProducts />}
    </Layout>
  );
};

export default IndexPage;
