import React from 'react';
import {
  CollectionTileWrapper,
  CollectionTileContent,
  Title,
  Description,
} from './styles';
import BackgroundImage from 'gatsby-background-image';
export const CollectionTile = ({
  description,
  title,
  backgroundImage,
  sale,
}) => {
  return (
    <CollectionTileWrapper>
      <BackgroundImage fluid={backgroundImage} />
      <CollectionTileContent>
        <div>
          <Title sale={sale}>{title}</Title>
          <Description sale={sale}>{description}</Description>
        </div>
      </CollectionTileContent>
    </CollectionTileWrapper>
  );
};
