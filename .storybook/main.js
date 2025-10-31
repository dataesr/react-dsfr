module.exports = {
  "stories": ["../src/components/**/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": [
    "@storybook/addon-links",
    "@storybook/preset-create-react-app",
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-webpack5-compiler-babel"
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
