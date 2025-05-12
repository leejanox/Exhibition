import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import {Intro} from '../Intro';

const meta: Meta<typeof Intro> = {
  title: 'Intro/Intro',
  component: Intro,
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

type Story = StoryObj<typeof Intro>;

export const Default: Story = {
  args: {},
  render: () => <Intro />
};