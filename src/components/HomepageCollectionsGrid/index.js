import React from 'react';
import { RemainingCollections } from './styles';
import { CollectionTile } from '../CollectionTile';
export const HomepageCollectionsGrid = ({ collections }) => {
  const saleCollection = collections.find(
    collection => collection.title === 'Sale'
  );
  const remainingCollections = collections.filter(
    collection => collection.title !== 'Sale'
  );
  return (
    <div>
      {!!saleCollection && (
        <CollectionTile
          sale
          title={saleCollection.title}
          description={saleCollection.description}
          backgroundImage={saleCollection.image.localFile.childImageSharp.fluid}
        />
      )}
      <RemainingCollections>
        {remainingCollections.map(collection => (
          <CollectionTile
            key={collection.shopifyId}
            title={collection.title}
            description={collection.description}
            backgroundImage={collection.image.localFile.childImageSharp.fluid}
          />
        ))}
      </RemainingCollections>
    </div>
  );
};
