import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import {EDSection1} from './index';

const meta: Meta<typeof EDSection1> = {
  title: 'ExhibitionDescription/Section1',
  component: EDSection1,
  parameters:{
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <div style={{width: '100%', height: '100%', border: '1px solid white'}}>
          <Story />
        </div>
      </BrowserRouter>
    )
  ],
};

export default meta;

type Story = StoryObj<typeof EDSection1>;

export const Default: Story = {
  args: {},
  render: () => <EDSection1/>
};