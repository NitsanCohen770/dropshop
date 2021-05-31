import React from 'react';

import {
  CollectionTileWrapper,
  Title,
} from '../../components/CollectionTile/styles';
import * as TitleStories from './CollectionTileWrapper.stories';
export default {
  title: 'Collection Tile/CollectionTileWrapper',
  component: CollectionTileWrapper,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = args => <CollectionTileWrapper {...args} />;

export const WithText = Template.bind({});
WithText.args = {
  children: <Title />,
  label: 'CollectionTileWrapper',
};
