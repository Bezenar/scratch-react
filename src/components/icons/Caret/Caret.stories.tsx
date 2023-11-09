import { Meta, StoryObj } from '@storybook/react';
import Caret from '.';

const Sizes = `
lg -> 1.5rem\n
md -> 1.125rem\n
sm -> 0.75rem\n
`;

const meta: Meta<typeof Caret> = {
    title: 'Icons/Caret',
    component: Caret,
    argTypes: {
        direction: {
            control: 'inline-radio',
            options: ['up', 'down', 'left', 'right'],
            table: {
                type: {
                    summary: 'up | down | left | right',
                },
            },
            type: {
                name: 'string',
                required: true,
            }
        },
        color: {
            control: 'inline-radio',
            options: ['primary', 'secondary', 'white', 'black', 'red'],
            table: {
                type: {
                    summary: 'keyof I_RootColors',
                    detail:
                        'interface I_RootColors {\n' +
                        '    primary: string;\n' +
                        '    secondary: string;\n' +
                        '    white: string;\n' +
                        '    black: string;\n' +
                        '    red: string;\n' +
                        '}',
                },
                defaultValue: {
                    summary: 'primary',
                },
            },
        },
        size: {
            control: 'inline-radio',
            options: ['sm', 'md', 'lg'],
            description: Sizes,
            table: {
                type: {
                    summary: 'sm | md | lg',
                },
                defaultValue: {
                    summary: 'md',
                },
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Caret>;

export const Default: Story = {
    args: {
        size: 'lg',
        color: 'primary',
        direction: 'right',
    },
    render: (args) => <Caret {...args} />,
};
