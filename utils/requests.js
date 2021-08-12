const API_KEY = process.env.API_KEY;

export default {
	// Trending: {
	// 	title: "Trending",
	// 	url:`/trending/all/week?api_key=${API_KEY}&language=en-US`
	// },
	toprated: {
		title: "Top rated",
		url:`/movie/top_rated?api_key=${API_KEY}&language=en-US`
	},
	action: {
		title: "Action",
		url:`/discover/movie?api_key=${API_KEY}&with_genres=28`
	},
	comedy: {
		title: "Comedy",
		url:`/discover/movie?api_key=${API_KEY}&with_genres=35`
	},
	horror: {
		title: "Horror",
		url:`/discover/movie?api_key=${API_KEY}&with_genres=27`
	},
	romance: {
		title: "Romance",
		url:`/discover/movie?api_key=${API_KEY}&with_genres=10749`
	},
	mystery: {
		title: "Mystery",
		url:`/discover/movie?api_key=${API_KEY}&with_genres=9648`
	},
	fantasy: {
		title: "Fantasy",
		url:`/discover/movie?api_key=${API_KEY}&with_genres=14`
	},
	adventure: {
		title: "Adventure",
		url:`/discover/movie?api_key=${API_KEY}&with_genres=12`
	},
	western: {
		title: "Western",
		url:`/discover/movie?api_key=${API_KEY}&with_genres=37`
	},
	music: {
		title: "Music",
		url:`/discover/movie?api_key=${API_KEY}&with_genres=10402`
	},
	drama: {
		title: "Drama",
		url:`/discover/movie?api_key=${API_KEY}&with_genres=18`
	},
	thriller: {
		title: "Thriller",
		url:`/discover/movie?api_key=${API_KEY}&with_genres=53`
	},
	sciencefiction: {
		title: "Sci-fi",
		url:`/discover/movie?api_key=${API_KEY}&with_genres=878`
	},
	// Similar: {
	// 	url:`/similar?api_key=${API_KEY}&language=en-US&page=1`
	// },
}