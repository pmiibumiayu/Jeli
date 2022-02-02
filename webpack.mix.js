const mix = require('laravel-mix');

const resourcesAssets = 'resources/';
const dest = 'public/';
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .vue().copy(`${resourcesAssets}img`, `${dest}images`, false)
    .sass('resources/sass/app.scss', 'public/css');
