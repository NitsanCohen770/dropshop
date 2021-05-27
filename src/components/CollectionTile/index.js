import React from 'react';
import PropTypes from 'prop-types';

export const CollectionTile = ({ description, title, backgroundImage }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

CollectionTile.propTypes = {};
