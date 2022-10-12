const path = require('path');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;

const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = {
    core: {
        builder: {
            name: "webpack5",
            options: {
                fsCache: true,
                lazyCompilation: true,
            },
        },
    },
    webpackFinal: async (config, { configType }) => {
        config.module.rules.push({
            test: /\.tsx?$/,
            loader: 'ts-loader',
            options: {
                getCustomTransformers: () => ({ before: [styledComponentsTransformer] })
            }
        });
        return config;
    },
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-measure",
        "@storybook/addon-viewport",
        "@storybook/addon-essentials",
        "storybook-addon-pseudo-states",
        "@storybook/addon-interactions"
    ],
    stories: [
        "../src/stories/**/*.stories.mdx",
        "../src/stories/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    features: {
        storyStoreV7: true
    },
    framework: "@storybook/react",
    staticDirs: ["../src/"]
}