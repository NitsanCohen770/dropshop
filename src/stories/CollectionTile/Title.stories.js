import React from 'react';

import { Title } from '../../components/CollectionTile/styles';

export default {
  title: 'Collection Tile/Title',
  component: Title,
  argTypes: {
    children: { control: 'string' },
  },
};

const Template = args => <Title {...args} />;

export const WithText = Template.bind({});
WithText.args = {
  children: 'Hello World',
  label: 'Title',
};
