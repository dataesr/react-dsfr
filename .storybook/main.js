module.exports = {
  "stories": ["../src/components/**/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
    "@chromatic-com/storybook"
  ],

  "framework": {
    name: "@storybook/react-webpack5",
    options: {}
  },

  staticDirs: ['../public'],

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};
