# DigitalTolk UI Setup

## Registry Configuration

To use the DigitalTolk UI component library, you must configure your package manager to use the private registry for the @dtolk scope.
# DigitalTolk UI Setup

## Registry Configuration

To use the DigitalTolk UI component library, you must configure your package manager to use the private registry for the @dtolk scope.

Add a `.pnpmrc` (or `.npmrc`) file to the root of your project with the following content:

```
@dtolk:registry=https://gitlab.digitaltolk.net/api/v4/packages/npm/
```

This ensures that packages under the `@dtolk` scope are installed from the correct registry.

## Installation

After configuring the registry, install the DigitalTolk UI library by running:

```
pnpm add @dtolk/digitaltolk-ui
```

This will add the `@dtolk/digitaltolk-ui` package to your project dependencies.

## Vite/Nuxt Configuration

To enable auto-import and component resolution for DigitalTolk UI, update your Vite or Nuxt configuration as follows:

### For Vite (vite.config.ts or vite.config.js)

```js
import Components from 'unplugin-vue-components/vite'
import DigitalTolkUIResolver from '@dtolk/digitaltolk-ui/resolvers'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    Components({
      dirs: ['src/components', 'src/modules'],
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [DigitalTolkUIResolver],
      dts: 'src/components.d.ts'
    }),
    AutoImport({
      imports: ['vue', 'vue-router', {
        "@dtolk/digitaltolk-ui": [
          "useDialog",
          "useMessage",
          "useNotification",
          "useLoadingBar",
        ],
      }],
      dts: 'src/auto-imports.d.ts',
      dirs: ['src/composables', 'src/stores', 'src/constants'],
      vueTemplate: true
    })
  ]
})
```

### For Nuxt (nuxt.config.ts)

> **Note:** For PWA support in Nuxt 3, always use the official `@vite-pwa/nuxt` module. Do not use `vite-plugin-pwa` directly in Nuxt 3 projects.

You can use the same plugins via Nuxt modules or with `vite.plugins` in your `nuxt.config.ts`:

```ts
import Components from 'unplugin-vue-components/vite'
import DigitalTolkUIResolver from '@dtolk/digitaltolk-ui/resolvers'
import AutoImport from 'unplugin-auto-import/vite'

export default defineNuxtConfig({
  modules: [
    '@vite-pwa/nuxt',
    // ...other modules
  ],
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Nuxt App',
      short_name: 'NuxtApp',
      description: 'A Nuxt 3 app with PWA support',
      theme_color: '#ffffff',
      icons: [
        {
          src: '/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
  },
  vite: {
    plugins: [
      Components({
        resolvers: [DigitalTolkUIResolver],
        dts: 'components.d.ts'
      }),
      AutoImport({
        imports: ['vue', 'vue-router', {
          "@dtolk/digitaltolk-ui": [
            "useDialog",
            "useMessage",
            "useNotification",
            "useLoadingBar",
          ],
        }],
        dts: 'auto-imports.d.ts',
        vueTemplate: true
      })
    ]
  }
})
```

**Note:** Adjust the `dirs` and `dts` options as needed for your project structure.
