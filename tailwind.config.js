/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./DOM delete-item/history-cust.html",
		"./js/history.js",
		"./Fetch users/users.html",
		"./js/fetch.js",
		"./DOM get-show-add-item/profile.html",
		"./js/profile.js",
	],
	theme: {
		extend: {
			colors: {
				"first-black": "#0b132a",
				"second-black": "#0B132A",
				"first-white": "#F8F8F8",
				"second-white": "rgba(255, 255, 255, 0.7)",
				"first-gray": "#4F5665",
				"second-gray": "#AFB5C0",
				"third-gray": "#C4C4C4",
				"fourth-gray": "#9F9F9F",
				"first-brown": "#6A4029",
				"second-brown": "#895537",
				"first-yellow": "#FFBA33",
				//tokyo night palette
				"tokyo-aqua": "#00ffd2",
				"tokyo-pink": "#ff4499",
				"tokyo-purple": "#0a0047",
				"tokyo-blue": "#004687",
				"tokyo-white": "#c0caf5",
			},
			fontFamily: {
				rubik: ["Rubik", "sans-serif"],
				poppins: ["Poppins", "sans-serif"],
			},
			animation: {
				border: "border 4s ease infinite",
				text: "text 2s ease infinite",
			},
			keyframes: {
				border: {
					"0%, 100%": { backgroundPosition: "0% 50%" },
					"50%": { backgroundPosition: "100% 50%" },
				},
				text: {
					"0%, 100%": {
						"background-size": "200% 200%",
						"background-position": "left center",
					},
					"50%": {
						"background-size": "200% 200%",
						"background-position": "right center",
					},
				},
			},
		},
	},
	plugins: [],
};
