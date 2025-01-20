import esbuild from 'rollup-plugin-esbuild'
import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';

export default [
  createBundle('src/server.ts', 'bundle/server.js'),
]

function createBundle(inputFilePath, outputFilePath) {
  return {
    input: inputFilePath,
    output: {
      file: outputFilePath,
      format: 'es',
      sourcemap: true,
    },
    plugins: [
      resolve(),
      alias({
        entries: [
        ]
      }),
      esbuild({
        target: 'esnext',
      }),
    ],
    // We don't want to bundle any of the node_module deps
    // as we want to keep them as external dependencies
    external: /node_modules/,
  }
}
