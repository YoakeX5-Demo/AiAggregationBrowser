import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// UnoCSS
import UnoCSS from "unocss/vite";
// 自动引入
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
// 饿了么UI
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// svg
import svgLoader from "vite-svg-loader";
// path
import * as path from "path";
// 打包单文件
import { viteSingleFile } from "vite-plugin-singlefile";
// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  server: {
    proxy: {
      "/ai": {
        target: "http://localhost:8888/ai",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ai/, ""),
      },
    },
  },
  resolve: {
    alias: {
      // 这里就是需要配置resolve里的别名
      "@src": path.join(__dirname, "src"),
      "@api": path.join(__dirname, "src/utils/api"),
      "@store": path.join(__dirname, "src/utils/store"),
    },
  },
  plugins: [
    // 打包单文件
    viteSingleFile(),
    // vue
    vue(),
    // 原子化CSS
    UnoCSS(),
    // svg
    svgLoader(),
    AutoImport({
      /// 饿了么UI
      resolvers: [ElementPlusResolver()],
      imports: ["vue", "vue-router", "pinia"],
      dts: "./.auto-imports.d.ts",
      eslintrc: {
        // 已存在文件设置默认 false，需要更新时再打开，防止每次更新都重新生成
        enabled: false,
        // 生成文件地址和名称
        filepath: "./.eslintrc-auto-import.json",
        globalsPropValue: true,
      },
    }),
    Components({
      dts: "./.components.d.ts",
      // 饿了么UI
      resolvers: [ElementPlusResolver()],
      // 自动导入的组件位置
      dirs: ["src/common"],
    }),
  ],
});
