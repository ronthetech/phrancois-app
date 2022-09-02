const URL = "https://edamam-recipe-search.p.rapidapi.com/search?q="; //recipe api to get recipes from
//find out their json response type by making calls to api using INSOMNIA

const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "7e6b7f77fbmshf14f864bf520cb0p1a0faajsn3d2531e9ed38",
		"X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com",
	},
};

export const getRecipes = (pathName) => {
	// fetch("https://edamam-recipe-search.p.rapidapi.com/search?q=chicken", options)
	return (
		fetch(`${URL}${pathName}`, options)
			.then((response) => response.json())
			//.then((response) => console.log(response))
			.catch((err) => {
				console.log("error reading data:", err);
			})
	);
};
