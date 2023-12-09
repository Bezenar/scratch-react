import { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import CharacterCard from '.';

const meta: Meta<typeof CharacterCard> = {
    title: 'Organisms/CharacterCard',
    component: CharacterCard,
    argTypes: {
        id: {
            control: 'number',
            description: 'This value goes as router params',
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
        image: {
            control: 'text',
            description: 'Image url',
            table: {
                type: {
                    summary: '`https://rickandmortyapi.com/api/${string}`',
                },
            },
            type: {
                name: 'string',
                required: true,
            },
        },
        name: {
            control: 'text',
            description: 'Also used as image alt',
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
    },
};

export default meta;

export const Default: StoryObj<typeof CharacterCard> = {
    args: {
        id: 1,
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        name: 'image-name',
    },
    render: (args) => (
        <BrowserRouter>
            <CharacterCard {...args} />
        </BrowserRouter>
    ),
};
