import React, { useContext } from 'react';
import { Layout, SEO, HomepageCollectionsGrid } from '../components';
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
    </Layout>
  );
};

export default IndexPage;
