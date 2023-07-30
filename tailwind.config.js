/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	mode: "jit",
	theme: {
		extend: {
			colors: {
				"dark-gray": "#20232f",
			},
			fontFamily: {
				playfair: ["Playfair Display", "serif"],
				opensans: ["Open Sans", "sans-serif"],
			},
			screens: {
				xs: "320px",
				sm: "375px",
				md: "425px",
				lg: "768px",
				xl: "1024px",
			},
		},
	},
	plugins: [],
};
