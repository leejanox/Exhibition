import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import {DeSection3} from './index';

const meta: Meta<typeof DeSection3> = {
    title: 'DepartmentDescription/DeSection3',
    component: DeSection3,
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

type Story = StoryObj<typeof DeSection3>;

export const Default: Story = {
    args: {},
    render: () => <DeSection3 />
};