import { Meta, StoryObj } from '@storybook/react';
import Pagination from '.';

const meta: Meta<typeof Pagination> = {
    title: 'Molecules/Pagination',
    component: Pagination,
    argTypes: {
        active: {
            control: 'number',
            description: 'Current active page',
            table: {
                type: {
                    summary: 'number',
                },
            },
            type: {
                name: 'number',
                required: true,
            },
        },
        totalPages: {
            control: 'number',
            description: 'Total pages count',
            table: {
                type: {
                    summary: 'number',
                },
            },
            type: {
                name: 'number',
                required: true,
            },
        },
        visiblePages: {
            control: 'number',
            description: 'Visible page button in row. (Only numbered)',
            table: {
                type: {
                    summary: 'number',
                },
                defaultValue: {
                    summary: '5',
                },
            },
        },
        onChange: {
            control: null,
            table: {
                type: {
                    summary: '(page: number) => void',
                },
            },
            type: {
                name: 'function',
                required: true,
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
    args: {
        active: 1,
        totalPages: 10,
        visiblePages: 4,
    },
    render: (args) => <Pagination {...args} />,
};
