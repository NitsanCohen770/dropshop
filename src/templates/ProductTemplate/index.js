/* eslint-disable  jsx-a11y/no-onchange */
import React, { useContext, useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import { Layout, ImageGallery, ProductQuantityAdder } from '../../components';
import { Grid, SelectWrapper, Price } from './styles';
import CartContext from '../../context/CartContext';
import { navigate, useLocation } from '@reach/router';
import queryString from 'query-string';

export const query = graphql`
  query ProductQuery($shopifyId: String) {
    shopifyProduct(shopifyId: { eq: $shopifyId }) {
      shopifyId
      title
      description
      images {
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
const ProductTemplate = props => {
  const { getProductById } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const { search, origin, pathname } = useLocation();
  const variantId = queryString.parse(search).variant;
  useEffect(() => {
    getProductById(props.data.shopifyProduct.shopifyId).then(result => {
      // console.log(result);
      setProduct(result);
      setSelectedVariant(
        result.variants.find(({ id }) => id === variantId) || result.variants[0]
      );
    });
  }, [getProductById, props.data.shopifyProduct.shopifyId, variantId]);

  const handleVariantChange = event => {
    event.preventDefault();
    const newVariant = product?.variants.find(v => v.id === event.target.value);
    setSelectedVariant(newVariant);
    navigate(
      `${origin}${pathname}?variant=${encodeURIComponent(newVariant.id)}`,
      { replace: true }
    );
  };

  return (
    <Layout>
      <Grid>
        <div>
          <ImageGallery
            selectedVariantId={selectedVariant?.image.id}
            images={props.data.shopifyProduct.images}
          />
        </div>
        <div>
          <h1>{props.data.shopifyProduct.title}</h1>
          <p>{props.data.shopifyProduct.description}</p>
          {product?.availableForSale && !!selectedVariant && (
            <>
              {product?.variants.length > 1 && (
                <SelectWrapper>
                  <strong>Variant</strong>
                  <select
                    value={selectedVariant.id}
                    onChange={handleVariantChange}
                  >
                    {product?.variants.map(v => {
                      return (
                        <option key={v.id} value={v.id}>
                          {v.title}
                        </option>
                      );
                    })}
                  </select>
                </SelectWrapper>
              )}
              {!!selectedVariant && (
                <>
                  <Price>
                    {selectedVariant?.priceV2.amount}
                    {'      '}
                    {selectedVariant?.priceV2.currencyCode}
                    <ProductQuantityAdder
                      variantId={selectedVariant.id}
                      available={selectedVariant.available}
                    />
                  </Price>
                </>
              )}
            </>
          )}
        </div>
      </Grid>
    </Layout>
  );
};

export default ProductTemplate;
