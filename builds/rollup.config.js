import path from 'path';
import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { getPackagesSync } from '@lerna/project';
import jsx from "acorn-jsx"
import vue from 'rollup-plugin-vue'
import babel from "rollup-plugin-babel"
const extensions = [".ts", ".js", ".tsx"];

const inputs = getPackagesSync().map(pck => pck.name).filter(name => name.includes('@useless-ui'));
export default inputs.map(name => {
  const pckName = name.split('@useless-ui')[1]
  return {
    input: path.resolve(__dirname, `../packages/${pckName}/index.ts`),
    output: {
      format: 'es',
      file: `lib/${pckName}/index.js`,
    },
    plugins: [
      nodeResolve(),
      vue({
        target: 'browser'
      }),
      typescript({
        tsconfigOverride: {
          compilerOptions: { // 打包单个组件的时候不生成ts声明文件
            declaration: false,
          },
          exclude: ['node_modules'],
        }
      }),
      babel({ extensions }),
    ],
    acornInjectPlugins: [jsx()],
    external(id) { // 对vue本身 和 自己写的包 都排除掉不打包
      return /^vue/.test(id) || /^@useless-ui/.test(id)
    },
  }
})
