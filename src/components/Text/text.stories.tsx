import { Meta, StoryObj } from '@storybook/react';
import Text from '.';

const meta: Meta<typeof Text> = {
    title: 'Components/Text',
    component: Text,
    argTypes: {
        children: {
            control: 'text',
            table: {
                type: {
                    summary: 'ReactNode',
                },
            },
        },
        value: {
            control: 'text',
            table: {
                type: {
                    summary: 'ReactNode',
                },
            },
        },
        className: {
            control: 'text',
            description: 'Add additional classnames to text element',
            table: {
                type: {
                    summary: 'ReactNode',
                },
                defaultValue: {
                    summary: 'Empty string',
                },
            },
        },
        color: {
            control: 'inline-radio',
            options: ['white', 'black', 'primary', 'secondary', 'red'],
            table: {
                type: {
                    summary: 'Literal type',
                },
                defaultValue: {
                    summary: 'md',
                },
            },
        },
        size: {
            control: 'inline-radio',
            options: ['lg', 'md', 'sm', 'xs'],
            table: {
                type: {
                    summary: 'Literal type',
                },
                defaultValue: {
                    summary: 'md',
                },
            },
        },
        paragraph: {
            control: 'boolean',
            description: 'Control which element to render. Inline - span, or Block - p',
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'false',
                },
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
    args: {
        children: 'value',
        value: '',
        className: '',
        color: 'primary',
        size: 'md',
        paragraph: false,
    },
    render: (args) => <Text {...args} />,
};
