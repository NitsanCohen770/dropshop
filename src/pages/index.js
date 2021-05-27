import React, { useContext } from 'react';
import { Layout, SEO, HomepageCollectionGrid } from 'components';
import ProductContext from '../context/ProductContext';
const IndexPage = () => {
  const { collections } = useContext(ProductContext);
  return (
    <Layout>
      <HomepageCollectionGrid
        collections={collections.filter(
          collection => collection.title !== 'Featured products on our store'
        )}
      />
    </Layout>
  );
};

export default IndexPage;
