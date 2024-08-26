/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "selector",
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                p_Lime_Green: "hsl(163, 72%, 41%)",
                p_Bright_Red: "hsl(356, 69%, 56%)",
                p_Fb: "hsl(208, 92%, 53%)",
                p_Twitter: "hsl(203, 89%, 53%)",
                p_Ig1: "hsl(37, 97%, 70%)",
                p_Ig2: "hsl(329, 70%, 58%)",
                p_YouTube: "hsl(348, 97%, 39%)",
                toggle_dark1: "hsl(210, 78%, 56%)",
                toggle_dark2: "hsl(146, 68%, 55%)",
                toggle_light: "hsl(230, 22%, 74%)",
                dark_bg_Very_Dark_Blue: "hsl(230, 17%, 14%)",
                dark_bg_top_pattern_Very_Dark_Blue: "hsl(232, 19%, 15%)",
                dark_card_bg_Dark_Desaturated_Blue: "hsl(228, 28%, 20%)",
                dark_text_Desaturated_Blue: "hsl(228, 34%, 66%)",

                light_bg_White: "hsl(0, 0%, 100%)",
                light_bg_top_pattern_Very_Pale_Blue: "hsl(225, 100%, 98%)",
                light_card_bg_Light_Grayish_Blue: "hsl(227, 47%, 96%)",
                light_text_Dark_Grayish_Blue: "hsl(228, 12%, 44%)",
                light_text_Very_Dark_Blue: "hsl(230, 17%, 14%)",
            },
            fontFamily: {
                inter: ["Inter", "sans-serif"]
            }
        },
    },
    plugins: [],
}

