import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import styles from '@exhibition/pages/styles/ExhibitionDescription.module.scss';
import {Header, DescriptionHeader} from './index';

const meta: Meta<typeof Header> = {
  title: 'ExhibitionDescription/Header',
  component: Header,
  parameters:{
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <div className={styles.container}>
            <Story />
        </div>
      </BrowserRouter>
    )
  ],
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    children: <h1>바텀 헤더</h1>
  },
  render: (args) => <Header {...args} />
};

export const Exhibition: Story = {
  args: {
    children: <DescriptionHeader 
      title='2025 AI INFINITY'
      category='AI EXHIBITION DESCRIPTION'
      location='Seoul, Korea'
      date='2025.05.12'
    />
  },
  render: (args) => <Header {...args} />
};

