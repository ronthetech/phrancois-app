import RecipeItem from "./RecipeItem";
import styles from "./RecipeList.module.scss";

function RecipeList(props) {
	return (
		<ul className={styles.list}>
			{props.recipes.map((recipe) => (
				<RecipeItem
					key={recipe.recipe.uri}
					id={recipe.recipe.uri}
					cuisineType={recipe.recipe.cuisineType}
					dishType={recipe.recipe.dishType}
					image={recipe.recipe.image}
					label={recipe.recipe.label}
					source={recipe.recipe.source}
					url={recipe.recipe.url}
				/>
			))}
		</ul>
	);
}

export default RecipeList;
