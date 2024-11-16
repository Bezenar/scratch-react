import type { StorybookConfig } from "@storybook/react-webpack5";

const path = require('path');

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)", "../src/**/*.mdx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config, { configType }) => {
    config.module?.rules?.push({
      test: /\.scss$/,
      use: [
        'style-loader', {
          loader: 'css-loader',
          options: {
              modules: {
                  localIdentName: '[name]__[local]',
              },
          },
        },
        'sass-loader',
      ],
      include: path.resolve(__dirname, '../'),
    });

    config.resolve!.alias = {
      '@atoms': path.resolve(__dirname, '../src/components/atoms/'),
      '@icons': path.resolve(__dirname, '../src/components/icons/'),
      '@molecules': path.resolve(__dirname, '../src/components/molecules/'),
      '@organisms': path.resolve(__dirname, '../src/components/organisms/'),
      '@templates': path.resolve(__dirname, '../src/components/templates/'),
      '@pages': path.resolve(__dirname, '../src/pages'),
      '@hooks': path.resolve(__dirname, '../src/hooks/'),
      '@utils': path.resolve(__dirname, '../src/utils/'),
      '@store': path.resolve(__dirname, '../src/store/'),
      '@img': path.resolve(__dirname, '../src/assets/img/'),
      '@mocks': path.resolve(__dirname, '../src/_mocks_/'),
      '@t': path.resolve(__dirname, '../src/types/'),
    }

    return config;
  }
};
export default config;
