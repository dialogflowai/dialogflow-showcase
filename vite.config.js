import { fileURLToPath, URL } from 'node:url'

import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

import UnoCSS from 'unocss/vite'

import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { visualizer } from "rollup-plugin-visualizer";
import viteImagemin from 'vite-plugin-imagemin'
// import { chunkSplitPlugin } from 'vite-plugin-chunk-split'

const pathSrc = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default ({ command, mode }) => {
  const env = loadEnv(mode, __dirname)
  return defineConfig({
    // resolve: {
    //   alias: {
    //     '@': pathSrc,
    //   },
    // },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    plugins: [
      UnoCSS(),
      vue(),
      visualizer(),
      AutoImport({
        resolvers: [
          // `importStyle: 'sass'` is required here too, not just in Components()
          // below. AutoImport handles functional components (ElMessageBox,
          // ElMessage, ...); leaving it on the default 'css' would give those
          // the precompiled blue theme while the rest of the site is indigo.
          ElementPlusResolver({ importStyle: 'sass' }),
          IconsResolver({
            prefix: 'Icon',
          }),
        ],
        dts: path.resolve(pathSrc, 'auto-imports.d.ts'),
      }),
      Components({
        resolvers: [
          ElementPlusResolver({ importStyle: 'sass' }),
          IconsResolver({
            enabledCollections: ['ep'],
          }),
        ],
        dts: path.resolve(pathSrc, 'components.d.ts'),
      }),
      Icons({
        autoInstall: true,
      }),
      viteImagemin({
        gifsicle: {
          optimizationLevel: 7,
          interlaced: false,
        },
        optipng: {
          optimizationLevel: 7,
        },
        mozjpeg: {
          quality: 70,
        },
        pngquant: {
          quality: [0.8, 0.9],
          speed: 4,
        },
        svgo: {
          plugins: [
            {
              name: 'removeViewBox',
            },
            {
              name: 'removeEmptyAttrs',
              active: false,
            },
          ],
        },
      }),
      // chunkSplitPlugin({
      //   customSplitting: {
      //     'canvas': [/\/node_modules\/@antv\//]
      //   }
      // }),
    ],
    define: {
      // 'process.env': env,
    },
    css: {
      preprocessorOptions: {
        scss: {
          // Injected into every SCSS entry so Element Plus picks up our theme.
          // `src/styles/element/index.scss` only does `@forward ... with`, and
          // is itself reached through Sass's own @use resolution (not as a Vite
          // entry), so this cannot recurse into itself.
          additionalData: `@use "@/styles/element/index.scss" as *;`,
        },
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            /*
            if (id.includes('vue') || id.includes('element-plus')) {
              return 'vue';
            }
            else if (id.includes('lodash')) {
              return 'lodash';
            }
            // else if (id.includes('element-plus')) {
            //   return 'element-plus';
            // }
            else if (id.includes('codemirror')) {
              return 'codemirror';
            }
            else if (id.includes('lezer')) {
              return 'lezer';
            }
            // else if (id.includes('node_modules')) {
            //   return id.toString().split('node_modules/')[1].split('/')[0].toString();
            // }
            else {
              return 'index';
            }
            */
            // Split vendor code per package. pnpm stores real packages under
            // `node_modules/.pnpm/<name>@<version>/node_modules/<name>/...`, so
            // the naive "first segment after node_modules" would lump every
            // dependency into one giant `.pnpm` chunk. Match the innermost
            // package directory instead, which handles both layouts.
            const pnpm = id.match(/node_modules\/\.pnpm\/[^/]+\/node_modules\/((?:@[^/]+\/)?[^/]+)/);
            if (pnpm) {
              return pnpm[1];
            }
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
          }
          // dir: 'dist',
          // entryFileNames: 'index.js',
          // manualChunks,
          // chunkFilename: 'vendor_locale_[name].js',
          // manualChunks: {
          //   'canvas': ['@antv/x6', '@antv/x6-vue-shape']
          // }
        },
      },
      minify: 'terser', // <-- add
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
    esbuild: {
      drop: ['console', 'debugger'],
    },
    server: {
      port: env.VITE_PORT,
      open: false,
    },
    ssr: {
      noExternal: ['element-plus']
    }
  })
}
