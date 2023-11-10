import { Meta, StoryObj } from '@storybook/react';
import Button from '.';

const meta: Meta<typeof Button> = {
    title: 'Atoms/Button',
    component: Button,
    argTypes: {
        children: {
            control: 'text',
            table: {
                type: {
                    summary: 'ReactNode',
                },
            },
            type: {
                name: 'function',
                required: true,
            },
        },
        id: {
            control: 'text',
            description: 'Add id attribute to button',
            table: {
                type: {
                    summary: 'string',
                },
            },
        },
        className: {
            control: 'text',
            description: 'Add additional classnames to button',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'Empty string',
                },
            },
        },
        style: {
            control: 'object',
            description: 'Add additional inline styles to button',
            table: {
                type: {
                    summary: 'CSSProperties',
                },
            },
        },
        disabled: {
            control: 'boolean',
            description: 'Disable button',
            table: {
                type: {
                    summary: 'boolean',
                },
            },
        },
        type: {
            control: 'inline-radio',
            description: 'Button type',
            options: ['button', 'reset', 'submit'],
            table: {
                type: {
                    summary: 'literal type',
                    detail: `"button" | "reset" | "submit"`,
                },
                defaultValue: {
                    summary: 'button',
                },
            },
        },
        withoutBorder: {
            control: 'boolean',
            description: 'Prevent styles for border',
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        onClick: {
            action: 'Button clicked',
            control: null,
            table: {
                type: {
                    summary: '(e: React.MouseEvent<HTMLButtonElement>) => void',
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

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        children: 'Click me',
        id: '',
        className: '',
        style: {},
        disabled: false,
        type: 'button',
        withoutBorder: false,
    },
    render: (args) => <Button {...args} />,
};
