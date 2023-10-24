import { Meta, StoryObj } from '@storybook/react';
import Button from '.';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
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
            table: {
                type: {
                    summary: 'string',
                },
            },
        },
        className: {
            control: 'text',
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
            table: {
                type: {
                    summary: 'CSSProperties',
                },
            },
        },
        disabled: {
            control: 'boolean',
            table: {
                type: {
                    summary: 'boolean',
                },
            },
        },
        type: {
            control: 'inline-radio',
            options: ['button', 'reset', 'submit'],
            table: {
                type: {
                    summary: 'literal type',
                    detail: `"button" | "reset" | "submit"`,
                },
                defaultValue: {
                    summary: 'button',
                }
            },
        },
        onClick: {
            control: null,
            table: {
                type: {
                    summary: '(e: React.MouseEvent<HTMLButtonElement>) => void',
                }
            },
            type: {
                name: 'function',
                required: true,
            }
        }
    },
}

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
        onClick: (e) => console.log(e),
    },
    render: (args) => <Button {...args} />
}