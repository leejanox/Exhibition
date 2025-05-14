import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import {ProfileCard} from './index';

const meta: Meta<typeof ProfileCard> = {
    title: 'Common/ProfileCard',
    component: ProfileCard,
    parameters:{
        layout: 'fullscreen',
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'dark', value: '#000000' },
                { name: 'light', value: '#ffffff' },
            ],
        },
        docs: {
            description: {
                component: '프로필 카드 컴포넌트입니다.',
            },
        },
    },
    decorators: [
        (Story) => (
            <BrowserRouter>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'}}>
                    <Story />
                </div>
            </BrowserRouter>
        )
    ],
};

export default meta;

type Story = StoryObj<typeof ProfileCard>;

export const Default: Story = {
    args: {
        name: '김고은  |  Kim Go Eun',
        image: '/profile.jpg',
        oneline: '안녕하세요. 전시회 웹 개발을 맡은 김고은입니다.',
        grade: '인공지능SW융합 2405110202',
        github: 'https://github.com/leejanox',
        profileType: 'default',
    },
    render: (args) => <ProfileCard {...args} />
};

export const Extended: Story = {
    args: {
        name: '김용중',
        alias: '교수',
        image: '/profile.jpg',
        grade: '인하대학교 전자공학 박사',
        subjects: ['프로그래밍 언어실습','컴퓨터 네트워크'],
        personalHistory: ['(주)한진정보통신 연구원(SI 사업부)', '한림대학교 정보통신공학부 전임강사'],
        profileType: 'extended',
    },
    render: (args) => <ProfileCard {...args} />
};