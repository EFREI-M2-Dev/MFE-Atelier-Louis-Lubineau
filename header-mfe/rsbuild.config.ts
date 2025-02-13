import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import {pluginModuleFederation} from "@module-federation/rsbuild-plugin";

export default defineConfig({
  plugins: [
      pluginVue(),
      pluginModuleFederation({
        name: 'header',
        exposes: {
          './button': './src/Button.vue',
        },
        shared: {
          vue: {
            singleton: true,
            requiredVersion: '^3.0.0',
          },
        }
      })
  ],
  server: {
    port: 3000,
  }
});
