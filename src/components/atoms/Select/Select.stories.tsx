import { Meta, StoryObj } from '@storybook/react';
import Select from '.';

const meta: Meta<typeof Select> = {
    title: 'Atoms/Select',
    component: Select,
    argTypes: {
        selected: {
            control: 'text',
            table: {
                type: {
                    summary: 'string',
                },
            },
            type: {
                name: 'string',
                required: true,
            },
        },
        options: {
            control: 'object',
            description: 'Data to display in list',
            table: {
                type: {
                    summary: 'Array<I_Option>',
                    detail: `
                        interface I_Option {\n
                            id: number;\n
                            value: string;\n
                        }\n
                    `,
                },
            },
            type: {
                name: 'array',
                required: true,
                value: { name: 'string' },
            },
        },
        placeholder: {
            control: 'text',
            table: {
                type: {
                    summary: 'string',
                },
            },
        },
        onSelect: {
            control: null,
            table: {
                type: {
                    summary: '(opt: I_Option) => void',
                    detail: `
                        interface I_Option {\n
                            id: number;\n
                            value: string;\n
                        }\n
                    `,
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

type Story = StoryObj<typeof Select>;

export const Default: Story = {
    args: {
        selected: '',
        options: [
            { id: 1, value: 'value-1' },
            { id: 2, value: 'value-2' },
        ],
        placeholder: '',
    },
    render: (args) => <Select {...args} />,
};
