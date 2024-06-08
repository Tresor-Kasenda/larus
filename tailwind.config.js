import defaultTheme from 'tailwindcss/defaultTheme';
import {components, palettes, rounded, shade} from "@tailus/themer"
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
        './node_modules/@tailus/themer/dist/components/**/*.{js,ts}'
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: palettes.oz,
        },
    },
    plugins: [shade, rounded, components],
};
