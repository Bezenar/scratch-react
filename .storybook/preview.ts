import type { Preview } from '@storybook/react';
import '!style-loader!css-loader!sass-loader!../src/assets/styles/main.scss';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        backgrounds: {
            default: 'dark',
            values: [{ name: 'dark', value: '#000000' }],
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
