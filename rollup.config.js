import { visualizer } from 'rollup-plugin-visualizer';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import image from '@rollup/plugin-image';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

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
      file: `dist/index.min.${m.format}.js`,
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
    external: ['uuid', 'classnames', 'prop-types', 'react', 'react-dom', /@babel\/runtime/],
    plugins: [
      terser(),
      babel({
        exclude: 'node_modules/**',
        plugins: ['@babel/transform-runtime', '@babel/plugin-proposal-nullish-coalescing-operator'],
        babelHelpers: 'runtime',
      }),
      postcss({
        extensions: ['.css'],
        minimize: true,
        plugins: [],
      }),
      visualizer(),
      resolve(),
      image(),
    ],
  };
  config.push(conf);
});

export default [
  ...config,
];
