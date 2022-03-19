import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()], // 这里使用ElementPlus组件库
      imports: [
        'vue',
        'vue-router',
        {
          vuex: ['useStore']
        }
      ]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
  ],
  resolve: {
    // 设置别名 https://cn.vitejs.dev/config/#resolve-alias
    alias: {
      '~': path.resolve(__dirname, './'),
      '@': path.resolve(__dirname, './src')
    },
    // https://cn.vitejs.dev/config/#resolve-extensions
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
})
