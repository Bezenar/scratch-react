import { Meta, StoryObj } from '@storybook/react';
import Card from '.';

const meta: Meta<typeof Card> = {
    title: 'Atoms/Card',
    component: Card,
    argTypes: {
        children: {
            control: null,
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
        className: {
            control: 'text',
            description: 'Apply classnames to main div tag',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: '<Empty string>',
                },
            },
        },
    },
};

export default meta;

export const Default: StoryObj<typeof Card> = {
    args: {
        className: '',
        children: (
            <>
                <div className="text--primary">Children 1</div>
                <div className="text--primary">Children2</div>
            </>
        ),
    },
    render: (args) => <Card {...args} />,
};
