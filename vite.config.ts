/*
 * @Author: wy
 * @Date: 2024-03-10 12:13:35
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-03-23 17:40:27
 * @Description: 描述
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { visualizer } from "rollup-plugin-visualizer";
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    visualizer({
      open: true,
    }),
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, "./src"),
      },
    ],
    extensions: [".mjs", ".js", ".jsx", ".json", ".less", ".sass", ".scss"],
  },
  css: {
    preprocessorOptions: {
      css: { charset: false },
      less: {
        additionalData: '@import "./src/assets/css/selfAdaption.less";',
      },
    },
  },
  build: {
    chunkSizeWarningLimit: 2000,
    cssCodeSplit: true,
    sourcemap: false,
    minify: false,
    assetsInlineLimit: 5000,
  },
});
