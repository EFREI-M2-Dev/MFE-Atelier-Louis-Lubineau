import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [
      pluginVue(),
      pluginModuleFederation({
        name: 'federation_producer',
        exposes: {
          './header': './src/components/Header.vue',
        },
        shared: {
          vue: {
            singleton: true,
            requiredVersion: '^3.5.3',
            eager: true,
          }
        }
      })
  ],
  server: {
    port: 3000,
  }
});
