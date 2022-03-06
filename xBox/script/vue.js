const Header = {
	data() {
		return {
			headerLogo: "./images/xbox-logo.svg",
			headerMenu: ["Games", "Consoles", "Community"],
			person: "My XBOX",
		};
	},
};
const Main = {
	data() {
		return {
			gameTitle: "Star Wars",
			gameVersion: "Battlefront II",
			trailer: "Watch Trailer",
			explore: "Explore Games",
			highTitle: "The best value",
			highTitleBottom: "in games and entertainment",
			production: [
				{
					cardStyle: {
						width: "318px",
						backgroundColor: "#fff",
					},
					imgStyle: {
						backgroundImage: "url('./images/xbox-one-x.png')",
					},
					cardTitle: "XBOX ONE X",
					cardDescription: "Faster Processing Smoother Gameplay",
					cardBtn: "Explore Consoles & Accessories",
				},
				{
					cardStyle: {
						width: "318px",
						backgroundColor: "#fff",
					},
					imgStyle: {
						// width: "318px",
						// height: "180px",
						// backgroundColor: "#fafafa",
						backgroundImage: "url('./images/mixer-logo.svg')",
						// backgroundRepeat: "no-repeat",
						// backgroundPosition: "center center",
					},
					cardTitle: "mixer Streaming",
					cardDescription:
						"The Next Generation Of Life Game Streaming",
					cardBtn: "Start Watching mixer",
				},
				{
					imgStyle: {
						backgroundImage:
							"url('./images/1c93fdc8-0f06-4f34-a54c-7ac2a45c58ae.png')",
					},
					cardTitle: "Free Games Every Month",
					cardDescription: "Get up to $700 in free games",
					cardBtn: "Get Free Games",
				},
			],
			gameTitle: "Exclusive games on XBOX",
			gameCard: [
				{
					cardStyle: {
						width: "318px",
						backgroundColor: "#fff",
					},
					imgStyle: {
						backgroundImage: "url('./images/CoD.png')",
					},
					cardTitle: "Call of Duty: WWII",
					cardDescription:
						"The C.O.D.E. Bravery Pack is now available in WWII",
					cardBtn: "See Details",
				},
				{
					cardStyle: {
						width: "318px",
						backgroundColor: "#fff",
					},
					imgStyle: {
						backgroundImage: "url('./images/dest.png')",
					},
					cardTitle: "Destiny 2",
					cardDescription: "",
					cardBtn: "See Details",
				},
				{
					imgStyle: {
						backgroundImage: "url('./images/steep.png')",
					},
					cardTitle: "STEEP",
					cardDescription: "",
					cardBtn: "See Details",
				},
				{
					imgStyle: {
						backgroundImage: "url('./images/Forza.png')",
					},
					cardTitle: "Forza Motorsport 7",
					cardDescription: "",
					cardBtn: "See Details",
				},
			],
			btnStore: "XBOX Store",
			designTitle: "Xbox Design Lab",
			designDesc:
				"Make yours one in a billion with new colors, metallic finishes and rubberized grips.",
			designBtnGray: "Design Yours",
			designBtnGreen: "Explore Consoles & Accessories",
		};
	},
};
const Footer = {
	data() {
		return {
			footerMenu: [
				{
					menuTitle: "XBOX",
					list: [
						"Support",
						"Contact us",
						"Privacy & cookies",
						"Terms of use",
					],
				},
				{
					menuTitle: "Developers",
					list: [
						"Games",
						"Windows 10",
						"Creators Program",
						"Designed for XBOX",
					],
				},
				{
					menuTitle: "Follow Us",
					list: [
						'<img src="./images/Faacebook.svg" alt="">',
						'<img src="./images/Twitter.svg" alt="">',
						'<img src="./images/Instagram.svg" alt="">',
					],
					listStyle: {
						display: "flex",
					},
					itemStyle: {
						marginRight: "20px",
					},
				},
			],
		};
	},
};
Vue.createApp(Header).mount("#head");
Vue.createApp(Main).mount("#main");
Vue.createApp(Footer).mount("#foot");
