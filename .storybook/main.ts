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

    return config;
  }
};
export default config;
