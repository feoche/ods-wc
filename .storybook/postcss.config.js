module.exports = {
    plugins: [
        // PostCSS Preset Env includes autoprefixer and browsers option will be passed to it automatically.
        require('postcss-preset-env'),
        require('postcss-import'),
        require('postcss-nested'),
        require('tailwindcss')('./tailwind.config.js'),
    ],
};
