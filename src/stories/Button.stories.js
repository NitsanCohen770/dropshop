import React from 'react';

import { Button } from '../components/Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = args => <Button {...args} />;

export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true,
  label: 'Button',
};

export const Regular = Template.bind({});
Regular.args = {
  label: 'Button',
};

export const WithText = Template.bind({});
WithText.args = {
  children: 'Testing',
  label: 'Button',
};
