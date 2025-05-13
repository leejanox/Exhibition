import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import {DeSection4} from './index';

const meta: Meta<typeof DeSection4> = {
    title: 'DepartmentDescription/DeSection4',
    component: DeSection4,
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

type Story = StoryObj<typeof DeSection4>;

export const Default: Story = {
    args: {},
    render: () => <DeSection4 />
};