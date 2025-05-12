import type { StorybookConfig } from '@storybook/react-vite';
import glsl from "vite-plugin-glsl"
import { join, dirname } from "path"

/**
* This function is used to resolve the absolute path of a package.
* It is needed in projects that use Yarn PnP or are set up within a monorepo.
*/
function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, 'package.json')))
}
const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "staticDirs": [
    "../public"
  ],
  "addons": [
    getAbsolutePath('@storybook/addon-essentials'),
  ],
  "framework": {
    "name": getAbsolutePath('@storybook/react-vite'),
    "options": {}
  },
  viteFinal: async (config) => {
    config.plugins = config.plugins || [];
    config.plugins.push(glsl({
      include:[
        "**/*.glsl",
        "**/*.vert",
        "**/*.frag",
        "**/*.gltf",
        "**/*.glb",
        "**/*.png",
        "**/*.jpg",
      ]
    }));
    return config;
  }
};
export default config;