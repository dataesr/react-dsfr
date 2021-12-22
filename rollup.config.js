import { visualizer } from 'rollup-plugin-visualizer';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';

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
    external: ['uuid', 'classnames', 'prop-types', 'react', 'react-dom', /@babel\/runtime/],
    plugins: [
      babel({
        exclude: 'node_modules/**',
        plugins: ['@babel/transform-runtime', '@babel/plugin-proposal-nullish-coalescing-operator'],
        babelHelpers: 'runtime',
      }),
      postcss({
        plugins: [],
      }),
      visualizer(),
      resolve(),
    ],
  };
  config.push(conf);
});

config.push({
  input: 'src/index.d.ts',
  output: [{ file: 'dist/index.d.ts', format: 'es' }],
  plugins: [dts()],
});

export default [...config];
