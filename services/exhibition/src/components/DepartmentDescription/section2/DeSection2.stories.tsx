import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import {DeSection2} from './index';

const meta: Meta<typeof DeSection2> = {
    title: 'DepartmentDescription/DeSection2',
    component: DeSection2,
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

type Story = StoryObj<typeof DeSection2>;

export const Default: Story = {
    args: {},
    render: () => <DeSection2 />
};