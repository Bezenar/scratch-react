import { Meta, StoryObj } from '@storybook/react';
import Text from '.';

const SIZES = `
lg -> 1.375rem\n
md -> 1rem\n
sm -> 0.75rem\n
xs -> 0.5rem\n
`;

const meta: Meta<typeof Text> = {
    title: 'Atoms/Text',
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
                    detail: '"white" | "black" | "primary" | "secondary" | "red"',
                },
                defaultValue: {
                    summary: 'primary',
                },
            },
        },
        size: {
            control: 'inline-radio',
            options: ['lg', 'md', 'sm', 'xs'],
            description: SIZES,
            table: {
                type: {
                    summary: 'Literal type',
                    detail: '"lg" | "md" | "sm" | "xs"',
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
