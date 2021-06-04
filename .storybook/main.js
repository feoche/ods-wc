const path = require('path')

module.exports = {
    'stories': [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    'addons': [
        '@storybook/addon-essentials',
        '@storybook/addon-links',
    ],
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.css$/,
            use: [
                {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: [
                                require('postcss-preset-env')(
                                    {
                                        browsers: "last 2 versions",
                                        stage: 3,
                                        features: {
                                            "nesting-rules": true
                                        }
                                    }),
                                require('tailwindcss'),
                            ],
                        },
                    },
                },
            ],
            include: path.resolve(__dirname, '../'),
        })
        return config
    },
};
