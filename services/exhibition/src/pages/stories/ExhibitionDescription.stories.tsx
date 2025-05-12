import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import {ExhibitionDescription} from '../ExhibitionDescription';

const meta: Meta<typeof ExhibitionDescription> = {
    title: 'ExhibitionDescription/ExhibitionDescription',
    component: ExhibitionDescription,
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

type Story = StoryObj<typeof ExhibitionDescription>;

export const Default: Story = {
  args: {},
  render: () => <ExhibitionDescription />
};