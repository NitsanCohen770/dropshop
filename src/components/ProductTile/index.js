import React from 'react';
import { ProductTileWrapper, Description, Title, Price } from './styles';
import { StyledLink } from '../StyledLink';
import Img from 'gatsby-image';
import { Icon } from '@iconify/react';
import ilsIcon from '@iconify-icons/fa/ils';

export const ProductTile = ({
  title,
  imageFluid,
  description,
  minPrice,
  handle,
}) => {
  return (
    <ProductTileWrapper>
      <Img fluid={imageFluid} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Price>
        from <Icon icon={ilsIcon} /> {parseFloat(minPrice).toFixed(2)}{' '}
      </Price>
      <StyledLink to={`/products/${handle}`}>View product</StyledLink>
    </ProductTileWrapper>
  );
};
