import { Meta, StoryObj } from '@storybook/react';
import Radio from '.';

const meta: Meta<typeof Radio> = {
    title: 'Atoms/Radio',
    component: Radio,
    argTypes: {
        checked: {
            control: 'boolean',
            table: {
                type: {
                    summary: 'boolean',
                },
            },
            type: {
                name: 'boolean',
                required: true,
            },
        },
        onChange: {
            control: null,
            table: {
                summary: '(isChecked: boolean) => void',
            },
            type: {
                name: 'function',
                required: true,
            },
            action: 'Toggled',
        },
        id: {
            control: 'text',
            description:
                'Apply this value as "id" attribute for input element and as "for" attribute for label element',
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
        children: {
            control: null,
            description: 'Pass React children as input label text',
            table: {
                type: {
                    summary: 'ReactNode',
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
        required: {
            control: 'boolean',
            table: {
                type: {
                    summary: 'boolean',
                },
            },
        },
        prepend: {
            control: 'boolean',
            description: 'Control position for React children',
            table: {
                type: {
                    summary: 'boolean',
                },
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
    args: {
        checked: false,
        children: true,
        id: 'radio',
        name: '',
        disabled: false,
        required: false,
        prepend: false,
    },
    render: (args) => <Radio {...args} />,
};

export const WithLabel: Story = {
    args: {
        checked: false,
        id: 'radio',
        name: '',
        disabled: false,
        required: false,
        prepend: false,
    },
    render: (args) => (
        <Radio {...args}>
            <span className="text--primary">Children</span>
        </Radio>
    ),
};
