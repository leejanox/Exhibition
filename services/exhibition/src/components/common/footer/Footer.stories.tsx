import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import {Footer} from './index';

const meta: Meta<typeof Footer> = {
  title: 'Common/Footer',
  component: Footer,
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

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {},
  render: () => <Footer/>
};