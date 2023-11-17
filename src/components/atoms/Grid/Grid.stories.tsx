import { Meta, StoryObj } from '@storybook/react';
import Grid from '.';

const meta: Meta<typeof Grid> = {
    title: 'Atoms/Grid',
    component: Grid,
    argTypes: {
        colCount: {
            control: 'number',
            description: 'Set columns count for grid',
            table: {
                type: {
                    summary: 'number',
                },
            },
            type: {
                name: 'number',
                required: true,
            },
        },
        gap: {
            control: { type: 'range', min: 1, max: 10 },
            description: 'Set space between elements. 1 step equal 0.125 rem',
            table: {
                type: {
                    summary: 'number',
                },
            },
        },
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
    },
};

export default meta;

export const Default: StoryObj<typeof Grid> = {
    args: {
        colCount: 2,
        gap: 5,
    },
    render: (args) => (
        <Grid {...args}>
            <div className="text--primary text--center" style={{ border: '1px solid var(--primary)' }}>
                Children 1
            </div>
            <div className="text--primary text--center" style={{ border: '1px solid var(--primary)' }}>
                Children 2
            </div>
            <div className="text--primary text--center" style={{ border: '1px solid var(--primary)' }}>
                Children 3
            </div>
            <div className="text--primary text--center" style={{ border: '1px solid var(--primary)' }}>
                Children 4
            </div>
            <div className="text--primary text--center" style={{ border: '1px solid var(--primary)' }}>
                Children 5
            </div>
            <div className="text--primary text--center" style={{ border: '1px solid var(--primary)' }}>
                Children 6
            </div>
        </Grid>
    ),
};
