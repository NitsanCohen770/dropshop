import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
  {
    allShopifyCollection(sort: { fields: title, order: ASC }) {
      edges {
        node {
          products {
            ...ShopifyProductFields
            handle
            priceRange {
              minVariantPrice {
                amount
              }
            }
          }
          title
          description
          shopifyId
          image {
            id
            localFile {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;

const defaultState = {
  products: [],
};

const ProductContext = React.createContext(defaultState);
export default ProductContext;

export function ProductContextProvider({ children }) {
  const { allShopifyCollection } = useStaticQuery(query);

  return (
    <ProductContext.Provider
      value={{
        products: [],
        collections: [allShopifyCollection.edges.map(({ node }) => node)],
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
