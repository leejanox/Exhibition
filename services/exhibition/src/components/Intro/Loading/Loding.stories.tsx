import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import {Loading} from './index';

const meta: Meta<typeof Loading> = {
    title: 'Intro/Loading',
    component: Loading,
    parameters:{
        layout: 'fullscreen',
    },
    decorators: [
        (Story) => (
        <BrowserRouter>
            <div style={{width:'100vw',height:'100vh',backgroundColor:'#fff',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <Story />
            </div>
        </BrowserRouter>
        )
    ],
};

export default meta;

type Story = StoryObj<typeof Loading>;

export const Default: Story = {
    args: {
        handleLoading:()=>{}
    },
    render: (args) => <Loading {...args} />
};