import { Meta, StoryObj } from '@storybook/react';
import Image from '.';

const meta: Meta<typeof Image> = {
    title: 'Atoms/Image',
    component: Image,
    argTypes: {
        src: {
            control: 'text',
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
        alt: {
            control: 'text',
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
        children: {
            control: 'text',
            description: 'Pass children into figcaption element',
            table: {
                type: {
                    summary: 'string',
                },
            },
        },
        loading: {
            control: 'radio',
            options: ['lazy', 'eager'],
            description: 'Control img loading attribute',
            table: {
                type: {
                    summary: 'Literal type',
                    detail: '"lazy" | "eager"',
                },
                defaultValue: {
                    summary: 'eager',
                },
            },
        },
        srcset: {
            control: 'object',
            description: 'Map source tags inside figure element, and add media and src attribute',
            table: {
                type: {
                    summary: 'I_SrcSet',
                    detail: `interface I_SrcSet {\n  media: string;\n  srcset: string;\n}\n`,
                },
            },
        },
        className: {
            control: 'text',
            description: 'Classnames which applied to figure element',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'Empty string',
                },
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Image>;

export const Default: Story = {
    args: {
        src: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        alt: 'Rick Sanchez',
        children: '',
        loading: 'eager',
        //@ts-expect-error
        srcset: [{}],
        className: '',
    },
    render: (args) => <Image {...args} />,
};
