module.exports = {
  "stories": ["../src/components/**/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],

  "framework": {
    name: "@storybook/react-webpack5",
    options: {}
  },

  staticDirs: ['../public'],

  docs: {
    autodocs: true
  }
};
