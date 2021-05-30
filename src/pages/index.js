import React, { useContext } from 'react';
import { Layout, SEO, HomepageCollectionGrid } from '../components';
import ProductContext from '../context/ProductContext';
const IndexPage = () => {
  const { collections } = useContext(ProductContext);
  console.log(collections);
  return (
    <Layout>
      <HomepageCollectionGrid collections={collections} />
    </Layout>
  );
};

export default IndexPage;
