import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import {pluginModuleFederation} from "@module-federation/rsbuild-plugin";

export default defineConfig({
  plugins: [
      pluginVue(),
      pluginModuleFederation({
        name: 'federation_consumer',
        remotes: {
          federation_producer:
            'federation_producer@http://localhost:3000/mf-manifest.json',
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
    port: 2000,
  }
});
