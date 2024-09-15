import { defineConfig } from "vite";
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  plugins: [
    AutoImport({
      include: [
        /\.[tj]sx?$/
      ],
      imports: [
        {
          '@ineka/engine': [
            "Engine",
            "Time",
            "TreeNode",
            "InnerNode",
            "OuterNode",
            "EngineError",
            "EngineOptions",
            "EngineErrorCode",
          ]
        }
      ],
      viteOptimizeDeps: true,
      injectAtEnd: true,
      dts: './.dev/auto-imports.d.ts',
    })
  ],













  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  //
  // 1. prevent vite from obscuring rust errors
  clearScreen: false,
  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
    watch: {
      // 3. tell vite to ignore watching `src-tauri`
      ignored: ["**/src-tauri/**"],
    },
  },
}));
