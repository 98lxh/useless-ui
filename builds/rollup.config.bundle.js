import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import path from 'path';
import jsx from "acorn-jsx"
import vue from 'rollup-plugin-vue'

//获取当前package目录下的package.json
// const inputs = getPackagesSync().map(pck => pck.name).filter(name => name.includes('@useless-ui'));
export default {
  input: path.resolve(__dirname, `../packages/useless-ui/index.ts`),
  output: {
    format: 'es',
    file: `lib/index.esm.js`,
  },
  acornInjectPlugins: [jsx()],
  plugins: [
    nodeResolve(),
    vue({
      target: 'browser'
    }),
    typescript({ //默认调用tsconfig.json 生成声明文件
      tsconfigOverride: {
        exclude: [
          'node_modules',
          'website'
        ]
      }
    }),
    ["@vue/babel-plugin-jsx"]
  ],
  external(id) { // 排除vue本身
    return /^vue/.test(id)
  },
}
