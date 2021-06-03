module.exports = {
    purge: [
        '../**/*.html',
    ],
    darkMode: false,
    theme: {
        variables: {
            DEFAULT: {
                colors: {
                    g: {
                        050: 'hsla(0, 0%, 95%, 1)',
                        100: 'hsla(0, 0%, 90%, 1)',
                        200: 'hsla(0, 0%, 80%, 1)',
                        300: 'hsla(0, 0%, 70%, 1)',
                        400: 'hsla(0, 0%, 60%, 1)',
                        500: 'hsla(0, 0%, 50%, 1)',
                        600: 'hsla(0, 0%, 40%, 1)',
                        700: 'hsla(0, 0%, 30%, 1)',
                        800: 'hsla(0, 0%, 20%, 1)',
                        900: 'hsla(0, 0%, 10%, 1)',
                    },
                    p: {
                        000: 'hsla(0, 0%, 100%, 1)',
                        100: 'hsla(193, 100%, 87%, 1)',
                        200: 'hsla(198, 97%, 76%, 1)',
                        500: 'hsla(218, 100%, 42%, 1)',
                        700: 'hsla(235, 100%, 31%, 1)',
                        800: 'hsla(225, 100%, 18%, 1)',
                        900: 'hsla(215, 100%, 6%, .25)',
                    },
                    ae: {
                        100: 'hsla(344, 100%, 95%, 1)',
                        400: 'hsla(357, 63%, 67%, 1)',
                        500: 'hsla(0, 75%, 43%, 1)',
                    },
                    aw: {
                        100: 'hsla(50, 97%, 88%, 1)',
                        500: 'hsla(20, 88%, 32%, 1)',
                    },
                    as: {
                        100: 'hsla(84, 66%, 92%, 1)',
                        500: 'hsla(104, 96%, 26%, 1)',
                    },
                    promotion: {
                        500: 'hsla(327, 65%, 41%, 1)',
                    },
                    delivery: {
                        500: 'hsla(104, 96%, 26%, 1)',
                    },
                },
            }
        },
        extend: {
            spacing: {
                '112': '28rem',
                '128': '32rem',
            },
            animation: {
                'spin-slow': 'spin 10s linear infinite',
            },
        },
    },
    plugins: [
        require('@mertasan/tailwindcss-variables')
    ]
};
