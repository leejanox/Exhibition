import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import {DepartmentDescription} from '../DepartmentDescription';

const meta: Meta<typeof DepartmentDescription> = {
  title: 'DepartmentDescription/Page',
  component: DepartmentDescription,
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

type Story = StoryObj<typeof DepartmentDescription>;

export const Default: Story = {
  args: {},
  render: () => <DepartmentDescription/>
};