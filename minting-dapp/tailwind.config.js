const colors = require('tailwindcss/colors');

module.exports = {
    mode: 'jit',
    content: [
        './src/**/*.tsx',
        './public/index.html',
    ],
    theme: {
        extend: {
            colors: {
                popupsbg: colors.white,
                neutral: colors.slate,
                primary: colors.orange,
                primarytxt: colors.white,
                warning: colors.orange,
                warningtxt: colors.black,
                error: colors.red,
                errortxt: colors.white,
            },
        },
    },
    variants: {},
    plugins: [],
};
