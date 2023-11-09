import { Meta, StoryObj } from '@storybook/react';
import PrintString from '.';

const SIZES = `
lg -> 1.375rem\n
md -> 1rem\n
sm -> 0.75rem\n
xs -> 0.5rem\n
`;

const meta: Meta<typeof PrintString> = {
    title: 'Molecules/PrintString',
    component: PrintString,
    argTypes: {
        value: {
            control: 'text',
            description: 'String to print',
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
        printSpeed: {
            control: 'number',
            description: 'Print speed for 1 letter. 1letter/printSpeed ms',
            table: {
                type: {
                    summary: 'number',
                },
                defaultValue: {
                    summary: '300',
                },
            },
        },
        onPrintComplete: {
            action: 'Print complete',
            control: 'null',
            description: 'Callback function, called when print complete',
            table: {
                type: {
                    summary: '() => void',
                },
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof PrintString>;

export const Default: Story = {
    args: {
        value: 'lorem ipsum',
        color: 'primary',
        size: 'md',
        printSpeed: 300,
        //@ts-expect-error
        onPrintComplete: true,
    },
    render: (args) => <PrintString {...args} />,
};
