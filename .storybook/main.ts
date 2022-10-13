const path = require('path');

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
    babel: async (options) => ({
        ...options,
        plugins: ["babel-plugin-styled-components"]
    }),
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
        storyStoreV7: true,
    },
    framework: "@storybook/react",
    staticDirs: ["../src/"]
}