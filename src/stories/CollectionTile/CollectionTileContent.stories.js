import React from 'react';

import { CollectionTileContent } from '../../components/CollectionTile/styles';

export default {
  title: 'Collection Tile/CollectionTileContent',
  component: CollectionTileContent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = args => <CollectionTileContent {...args} />;

export const WithText = Template.bind({});
WithText.args = {
  children: 'Hello',
  label: 'CollectionTileContent',
};
