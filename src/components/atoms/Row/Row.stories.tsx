import { Meta, StoryObj } from '@storybook/react';
import Row from '.';
import cn from '@utils/cn';

const meta: Meta<typeof Row> = {
    title: 'Atoms/Row',
    component: Row,
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
        className: {
            control: 'text',
            description: 'Add additional classnames to flex element',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'Empty string',
                },
            },
        },
        jc: {
            control: 'radio',
            description: 'Flex element justify content property',
            options: ['start', 'end', 'center', 'sa', 'sb', 'se'],
            table: {
                type: {
                    summary: 'Literal type',
                    detail: `'start' - justify-content: start;\n'end' - justify-content: end;\n'center' - justify-content: center;\n'sa' - justify-content: space-around;\n'sb' - justify-content: space-between;\n'se' - justify-content: space-evenly;\n`,
                },
            },
        },
        ai: {
            control: 'radio',
            description: 'Flex element align items property',
            options: ['start', 'end', 'center', 'stretch'],
            table: {
                type: {
                    summary: 'Literal type',
                    detail: `'start' - align-items: start;\n'end' - align-items: end;\n'center' - align-items: center;\n'stretch - align-items: stretch;\n`,
                },
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Row>;

export const Default: Story = {
    args: {
        className: undefined,
        dir: undefined,
        jc: undefined,
        ai: undefined,
        nowrap: false,
    },
    render: (args) => {
        return (
            <div className="wid-100" style={{ height: 300 }}>
                <Row {...args} className={args.ai ? 'h-full' : ''}>
                    <div className={cn('bg--black text--white pa-5', { ['wid-50 mr-5']: !!args.nowrap })}>
                        Children 1
                    </div>
                    <div className={cn('bg--black text--white pa-5', { ['wid-50 mr-5']: !!args.nowrap })}>
                        Children 2
                    </div>
                </Row>
            </div>
        );
    },
};
