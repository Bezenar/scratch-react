import { Meta, StoryObj } from '@storybook/react';
import TextField from '.';

const meta: Meta<typeof TextField> = {
    title: 'Components/TextField',
    component: TextField,
    argTypes: {
        value: {
            description: 'input value',
            control: 'text',
            table: {
                type: {
                    summary: 'string',
                },
            },
            type: {
                name: 'function',
                required: true,
            },
        },
        onChange: {
            control: null,
            description: 'Will called after debounce time',
            table: {
                type: {
                    summary: '(value: string) => void',
                },
            },
            type: {
                name: 'function',
                required: true,
            },
        },
        id: {
            control: 'text',
            description: 'Apply value to input id attribute',
            table: {
                type: {
                    summary: 'string',
                },
            },
        },
        name: {
            control: 'text',
            description: 'Apply value to input name attribute',
            table: {
                type: {
                    summary: 'string',
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
        maxLength: {
            control: 'number',
            table: {
                type: {
                    summary: 'number',
                },
            },
        },
        placeholder: {
            control: 'string',
            table: {
                type: {
                    summary: 'string',
                },
            },
        },
        required: {
            control: 'boolean',
            table: {
                type: {
                    summary: 'boolean',
                },
            },
        },
        debounce: {
            control: 'number',
            description: 'Time in ms, after which be called "onChange"',
            table: {
                type: {
                    summary: 'number',
                },
            },
        },
        onFocus: {
            control: null,
            table: {
                type: {
                    summary: '(e: React.FocusEvent<HTMLInputElement>) => void',
                },
            },
        },
        onBlur: {
            control: null,
            table: {
                type: {
                    summary: '(e: React.FocusEvent<HTMLInputElement>) => void',
                },
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {
    args: {
        value: '',
        id: '',
        name: '',
        disabled: false,
        maxLength: undefined,
        placeholder: 'placeholder',
        required: false,
        debounce: 300,
    },
    render: (args) => <TextField {...args} />,
};
