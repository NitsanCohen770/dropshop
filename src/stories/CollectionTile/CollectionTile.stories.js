import React from 'react';

import { CollectionTile } from '../../components/CollectionTile/';
import * as CollectionTileWrapperStories from './CollectionTileWrapper.stories';
export default {
  title: 'Collection Tile/CollectionTile',
  component: CollectionTile,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = args => <CollectionTile {...args} />;

export const WithText = Template.bind({});
WithWrapper.args = {
  ...CollectionTileWrapperStories,
};
