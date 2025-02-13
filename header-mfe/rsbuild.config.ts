import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import {pluginModuleFederation} from "@module-federation/rsbuild-plugin";

export default defineConfig({
  plugins: [
      pluginVue(),
      pluginModuleFederation({
        name: 'federation_provider',
        exposes: {
          './button': './src/Button.vue',
        },
        shared: ['vue']
      })
  ],
  server: {
    port: 3000,
  }
});
