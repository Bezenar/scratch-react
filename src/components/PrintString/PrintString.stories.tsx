import { Meta, StoryObj } from '@storybook/react';
import PrintString from '.';

const meta: Meta<typeof PrintString> = {
    title: 'Components/PrintString',
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
            description: 'Text color',
            options: ['white', 'black', 'primary', 'secondary', 'red'],
            table: {
                type: {
                    summary: 'Literal type',
                },
                defaultValue: {
                    summary: 'primary',
                },
            },
        },
        size: {
            control: 'inline-radio',
            description: 'Text size',
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
