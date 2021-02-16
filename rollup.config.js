import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import eslint from '@rollup/plugin-eslint';
import css from 'rollup-plugin-css-only';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const external = Object.keys(pkg.peerDependencies || {});
external.push(/@babel\/runtime/);
export default {
  input: pkg.source,
  output: [
    { file: pkg.main, format: 'esm' },
  ],
  external,
  plugins: [
    eslint(),
    babel({
      babelHelpers: 'runtime',
      exclude: '**/node_modules/**',
    }),
    resolve(),
    commonjs(),
    terser(),
    css({ output: 'style.css' }),
  ],
};
