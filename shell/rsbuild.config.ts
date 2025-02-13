import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import {pluginModuleFederation} from "@module-federation/rsbuild-plugin";

export default defineConfig({
  plugins: [
      pluginVue(),
      pluginModuleFederation({
        name: 'shell',
        remotes: {
          header: 'header@http://localhost:3000/mf-manifest.json',
        },
        shared: ['vue']
      })
  ],
  server: {
    port: 2000,
  }
});
