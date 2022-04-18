import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import path from 'path';
import jsx from "acorn-jsx"
import vue from 'rollup-plugin-vue'
import babel from "rollup-plugin-babel"

const extensions = [".ts", ".js", ".tsx"];
// const inputs = getPackagesSync().map(pck => pck.name).filter(name => name.includes('@useless-ui'));
export default {
  input: path.resolve(__dirname, `../packages/useless-ui/index.ts`),
  output: {
    format: 'es',
    file: `lib/index.js`,
  },
  acornInjectPlugins: [jsx()],
  plugins: [
    nodeResolve(),
    vue({
      target: 'browser'
    }),
    typescript({
      tsconfigOverride: {
        compilerOptions: { declaration: true },
        exclude: [
          'node_modules',
          'website'
        ]
      }
    }),
    babel({ extensions }),
  ],
  external(id) { // 排除vue本身
    return /^vue/.test(id)
  },
}
