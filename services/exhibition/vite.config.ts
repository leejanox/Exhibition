import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'
import glsl from 'vite-plugin-glsl'
import * as path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(),
    glsl({
      include: ['**/*.glsl','**/*.vert','**/*.frag','**/*.vs','**/*.fs'],
    })
  ],
  css:{
    preprocessorOptions:{}
  },
  optimizeDeps:{
    include: ['three','@react-three/drei','@react-three/fiber','leva','postprocessing'],
  },
  server: {
    port: 5000,
    open: true,
  },
  resolve: {
    alias: {
      '@exhibition': path.resolve(__dirname, 'src'),
      '@exhibition/components': path.resolve(__dirname, 'src/components'),
      '@exhibition/pages': path.resolve(__dirname, 'src/pages'),
      '@exhibition/styles': path.resolve(__dirname, 'src/styles'),
      '@exhibition/shaders': path.resolve(__dirname, 'src/shaders'),
      '@exhibition/hooks': path.resolve(__dirname, 'src/hooks'),
      '@utils': path.resolve(__dirname, '../utils/src'),
    },
  },
  build:{
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
    sourcemap: true,
  }
})
