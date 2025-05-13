import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import styles from '@exhibition/pages/styles/ExhibitionDescription.module.scss';
import {Header, DescriptionHeader, DepartmentHeader} from './index';

const meta: Meta<typeof Header> = {
  title: 'Common/Header',
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
      page='exhibition'
    />
  },
  render: (args) => <Header {...args} />
};

export const Department: Story = {
  args: {
    children: <DepartmentHeader 
      title='인공지능SW융합과'
      subtitle='Artificial Intelligence Software Convergence'
      location='한국 폴리텍 대학 춘천캠퍼스 본관 2층'
      page='department'
    />
  },
  render: (args) => <Header {...args} />
};

