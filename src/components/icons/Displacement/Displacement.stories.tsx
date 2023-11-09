import { Meta, StoryObj } from '@storybook/react';
import Displacement from '.';

const meta: Meta<typeof Displacement> = {
    title: 'Icons/Displacement',
    component: Displacement,
    argTypes: {        },
};

export default meta;

type Story = StoryObj<typeof Displacement>;

export const Default: Story = {
    args: {
        size: 'lg',
        color: 'primary',
        direction: 'right',
    },
    render: (args) => <Displacement {...args} />,
};
