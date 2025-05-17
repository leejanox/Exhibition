import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import {GuestBook} from './GuestBook';

const meta: Meta<typeof GuestBook> = {
  title: 'ExhibitionDescription/GuestBook',
  component: GuestBook,
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

type Story = StoryObj<typeof GuestBook>;

export const Default: Story = {
  args: {},
  render: () => <GuestBook />
};