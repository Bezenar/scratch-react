import { Meta, StoryObj } from '@storybook/react';
import Header from '.';
import { BrowserRouter } from 'react-router-dom';

const meta: Meta<typeof Header> = {
    title: 'Molecules/Header',
    component: Header,
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
    args: {},
    render: () => <BrowserRouter><Header /></BrowserRouter>,
};
