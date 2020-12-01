const mix = require('laravel-mix');
const { MIX_PROXY_URL } = process.env;

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

mix.react('resources/js/bootstrap.js', 'public/js/app.js')
  .sass('resources/sass/app.scss', 'public/css')
  .browserSync({
    proxy: `${MIX_PROXY_URL}`
  });

if (mix.inProduction()) {
  mix.version();
}
