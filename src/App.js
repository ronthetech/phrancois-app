import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "./Components/ui/Navbar";
import RecipeList from "./Components/recipes/RecipeList";
import { getRecipes } from "./services/recipes";

import "./styles.scss";
import SearchBar from "./Components/ui/SearchBar";

const DUMMY_RECIPES = [
	{
		id: "http://www.edamam.com/ontologies/edamam.owl#recipe_be3ba087e212f13672b553ecfa876333",
		uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_be3ba087e212f13672b553ecfa876333",
		image: "https://edamam-product-images.s3.amazonaws.com/web…fd375a37556eaa10ef21b309e41e90ff0355e779f83d4e27d",
		label: "Baked Chicken",
		cuisineType: ["american"],
		dishType: ["main course"],
		source: "Martha Stewart",
		url: "http://www.marthastewart.com/318981/baked-chicken",
	},
];

function App(props) {
	const location = useLocation();

	const [loadedRecipes, setLoadedRecipes] = useState([]);

	useEffect(() => {
		// 	getRecipes(location.pathname).then((data) => {
		// 		setLoadedRecipes(data);
		// 	});
		getRecipes("chicken").then((data) => {
			console.log(data.hits);
			//console.log(data.hits[0].recipe.label);
			//const { recipesData } = data;
			//const { count } = recipesData;
			//console.log("Type is: ", typeof recipesData);
			setLoadedRecipes(DUMMY_RECIPES);
			//setLoadedRecipes(data.hits);
		});
		//console.log(location.pathname);
	}, [location.pathname]);
	// 	setLoadedRecipes(DUMMY_RECIPES);
	// }, []);

	return (
		<div className='App'>
			<Navbar />
			<main className='main'>
				<SearchBar />
				<RecipeList recipes={loadedRecipes} />
				{/* <RecipeList recipes={props.recipes} /> */}
			</main>
		</div>
	);
}

export default App;
