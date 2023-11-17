import { Meta, StoryObj } from '@storybook/react';
import Scroll from '.';

const meta: Meta<typeof Scroll> = {
    title: 'Atoms/Scroll',
    component: Scroll,
    argTypes: {
        height: {
            control: 'text',
            description: 'Set height to element',
            table: {
                type: {
                    summary: 'string | number',
                },
            },
            type: {
                name: 'string',
                required: true,
            },
        },
        children: {
            control: null,
            table: {
                type: {
                    summary: 'ReactNode',
                },
            },
        },
    },
};

export default meta;

export const Default: StoryObj<typeof Scroll> = {
    args: {
        height: '100px',
    },
    render: (args) => (
        <div className="wid-25" style={{ height: 200 }}>
            <Scroll {...args}>
                <p className="text--primary">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium quidem, minus aliquam nesciunt
                    cupiditate neque reiciendis alias ducimus, aliquid ex fugiat voluptatibus eius. Fugit nemo sed, id
                    illo repellendus perferendis maiores, deserunt nihil cumque, non perspiciatis atque qui suscipit
                    quia?
                </p>
            </Scroll>
        </div>
    ),
};
