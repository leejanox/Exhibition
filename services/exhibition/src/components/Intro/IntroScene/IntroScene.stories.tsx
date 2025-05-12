import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import {IntroScene} from './index';

const meta: Meta<typeof IntroScene> = {
  title: 'Intro/IntroScene',
  component: IntroScene,
  parameters:{
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <div style={{width:'100vw',height:'100vh',backgroundColor:'#000'}}>
          <Story />
        </div>
      </BrowserRouter>
    )
  ],
};

export default meta;

type Story = StoryObj<typeof IntroScene>;

export const Default: Story = {
  args: {},
  render: () => <IntroScene/>
};