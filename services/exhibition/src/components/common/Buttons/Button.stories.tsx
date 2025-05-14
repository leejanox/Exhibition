import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import {Button} from './index';

const meta: Meta<typeof Button> = {
    title: 'Common/Buttons',
    component: Button,
    parameters:{
        layout: 'fullscreen',
    },
    decorators: [
        (Story) => (
        <BrowserRouter>
            <div style={{width:'100vw',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#1D1C1E'}}>
                <Story />
            </div>
        </BrowserRouter>
        )
    ],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        children:<span>Button</span>      
    },
    render: (args) => <Button {...args} />
};

export const Disabled: Story = {
    args: {
        children:<span>Button</span>,
        disabled:true
    },
    render: (args) => <Button {...args} />
};

export const LongText: Story = {
    args: {
        children:<span>Button with long text</span>
    },
    render: (args) => <Button {...args} />
};

