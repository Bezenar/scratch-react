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
      '@icons': path.resolve(__dirname, 'src/components/icons'),
      '@molecules': path.resolve(__dirname, '../src/components/molecules/'),
      '@hooks': path.resolve(__dirname, '../src/hooks/'),
      '@helpers': path.resolve(__dirname, '../src/helpers/'),
      '@img': path.resolve(__dirname, '../src/assets/img/'),
      '@mocks': path.resolve(__dirname, '../src/_mocks_/'),
      '@t': path.resolve(__dirname, '../src/types/'),
    }

    return config;
  }
};
export default config;
