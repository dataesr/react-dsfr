/**
 * dsfr styles
 */
import '@gouvfr/dsfr/dist/dsfr.css';
import '@gouvfr/dsfr/dist/utility/icons/icons-system/icons-system.min.css';

/**
 * react-dsfr styles
 */
import './../src/style/color.css';
import './../src/style/custom.css';
import './../src/style/reset-dsfr.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: 'alphabetical'
    }
  },
  viewMode: 'docs'
}
