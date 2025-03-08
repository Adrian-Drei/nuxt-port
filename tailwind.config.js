/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "selector",
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
        "./vendor/robsontenorio/mary/src/View/Components/**/*.php",
    ],
    theme: {
        screens: {
            xxs: "430px",
            xs: "450px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
        extend: {
            colors: {
                primary: "#FF6C21",
                primaryDark: "#CB0200",
                secondary: "#191919",
                secondaryDark: "#A71419",
                orange: "#DD8E32",
                veryLightGray: "#ACACAC",
                lightGray: "#767F84",
                midGray: "#313131",
                blueishDark: "#282D3B",
                slate: "#E8E8EB",
            },
            container: {
                screens: {
                    sm: "576px",
                    md: "768px",
                    lg: "992px",
                    xl: "1200px",
                },
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                nobel: ["NobelUno", "sans-serif"],
            },
        },
    },
    plugins: [],
};

