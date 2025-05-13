import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import {EDSection2} from './index';

const meta: Meta<typeof EDSection2> = {
    title: 'ExhibitionDescription/Section2',
    component: EDSection2,
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

type Story = StoryObj<typeof EDSection2>;

export const Default: Story = {
    args: {},
    render: () => <EDSection2 />
};

export const English: Story = {
    args: {
        language: 'english'
    },
    render: () => <EDSection2 language='english' />
};

