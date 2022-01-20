import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import shebang from 'rollup-plugin-preserve-shebang';

export default {
  input: 'src/index.js',
  output: {
    file: 'bin/index.js',
    format: 'cjs'
  },
  plugins: [
    // used to preserve "#!/usr/bin/env node", which is invalid in javascript
    shebang(),
    nodeResolve(),
    commonjs(),
  ]
}
