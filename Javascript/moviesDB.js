var movies = [{
		title: "Pitch Black",
		hasWatched: true,
		rating: 3.5
	},
	{
		title: "Sisterhood of the traveling pants",
		hasWatched: false,
		rating: 4.5
	},
	{
		title: "John Wick",
		hasWatched: true,
		rating: 4
	},
	{
		title: "Pets 2",
		hasWatched: false,
		rating: 4.6
	}]

movies.forEach(function(movie){
	var result = "You have ";
	if(movie.hasWatched){
		result += "watched ";
	} else {
		result += "not seen ";
	}
	result += "\"" + movie.title + "\" - ";
	result += movie.rating;
	console.log(result)
})
