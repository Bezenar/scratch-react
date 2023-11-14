import { Meta, StoryObj} from '@storybook/react';
import Nav from '.';
import { BrowserRouter } from 'react-router-dom';

const meta: Meta<typeof Nav> = {
    title: 'Atoms/Nav',
    component: Nav,
    argTypes: {}
}

export default meta;

type Story = StoryObj<typeof Nav>;

export const Default: Story = {
    args: {},
    render: () => <BrowserRouter><Nav /></BrowserRouter>
}
