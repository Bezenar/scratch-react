import { Meta, StoryObj } from '@storybook/react';
import Row from '.';
import cn from '../../../helpers/cn';

const meta: Meta<typeof Row> = {
    title: 'Molecules/Row',
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
                    detail: `
                        'start' - justify-content: start;
                        'end' - justify-content: end;
                        'center' - justify-content: center;
                        'sa' - justify-content: space-around;
                        'sb' - justify-content: space-between;
                        'se' - justify-content: space-evenly;
                    `,
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
                    detail: `
                        'start' - align-items: start;
                        'end' - align-items: end;
                        'center' - align-items: center;
                        'stretch - align-items: stretch;
                    `,
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
