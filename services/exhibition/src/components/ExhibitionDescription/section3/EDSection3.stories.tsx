import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import {EDSection3} from './index';

const meta: Meta<typeof EDSection3> = {
  title: 'ExhibitionDescription/Section3',
  component: EDSection3,
  parameters:{
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    )
  ],
};

export default meta;

type Story = StoryObj<typeof EDSection3>;

export const Default: Story = {
  args: {},
  render: () => <EDSection3 />
};