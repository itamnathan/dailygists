const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            colors: {
                'greenish': '#02b290',
                'yellowish': '#ffe57b',
                'blueish': '#3d556c',
                'it-text': '#6b727e',
                'it-h1': '#004d82',
                'successish': '#99cc33',
                'warningish': '#ff9966',
                'dangerish': '#cc3300',
                'infoish': '#ffcc00',
            },
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
