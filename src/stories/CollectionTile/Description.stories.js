import React from 'react';

import { Description } from '../../components/CollectionTile/styles';

export default {
  title: 'Collection Tile/Description',
  component: Description,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = args => <Description {...args} />;

export const WithText = Template.bind({});
WithText.args = {
  children: 'Hello',
  label: 'Description',
};
