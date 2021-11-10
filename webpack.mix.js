const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/js/app.js", "public/js")
    .vue()
    .postCss("resources/css/app.css", "public/css", [
        require("postcss-import"),
        require("tailwindcss"),
        require("autoprefixer"),
    ])
    .webpackConfig(require("./webpack.config"));

mix.js(
    "resources/views/franklinhenrique/assets/js/script.js",
    "public/franklinhenrique/assets/js/script.js"
).sass(
    "resources/views/franklinhenrique/assets/css/style.scss",
    "public/franklinhenrique/assets/css/style.css"
).js(
    "resources/views/painel/assets/js/script.js",
    "public/painel/assets/js/script.js"
).sass(
    "resources/views/painel/assets/css/style.scss",
    "public/painel/assets/css/style.css"
);

if (mix.inProduction()) {
    mix.version();
}
