import styles from 'rollup-plugin-styles';
import babel from '@rollup/plugin-babel';
import pkg from './package.json';

const autoprefixer = require('autoprefixer');

const MODE = [
  {
    format: 'cjs',
  },
  {
    format: 'esm',
  },
];

const config = [];

MODE.forEach((m) => {
  const conf = {
    input: pkg.source,
    output: {
      name: '@dataesr/react-dsfr',
      file: `dist/index.${m.format}.js`,
      format: m.format,
      exports: 'auto',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'prop-types': 'PropTypes',
        classnames: 'classNames',
        uuid: 'uuid',
        '@babel/runtime/helpers/slicedToArray': '_slicedToArray',
        '@babel/runtime/helpers/defineProperty': '_defineProperty',
        '@babel/runtime/helpers/objectWithoutProperties': '_objectWithoutProperties',
      },
    },
    external: ['uuid', 'classnames', 'prop-types', 'react', 'react-dom', /@babel\/runtime/, 'remixicon/fonts/remixicon.css'],
    plugins: [
      babel({
        exclude: 'node_modules/**',
        plugins: ['@babel/transform-runtime'],
        babelHelpers: 'runtime',
      }),
      styles({
        postcss: {
          plugins: [
            autoprefixer(),
          ],
        },
      }),
    ],
  };
  config.push(conf);
});

export default [
  ...config,
];
