import Card from "../ui/Card.js";

import styles from "./RecipeItem.module.scss";

function RecipeItem(props) {
	function showDetailsHandler() {
		console.log("clicked");
		alert("Clicked Details Button");
	}

	return (
		<li className={styles.recipe}>
			<Card>
				<div className={styles.image}>
					<img src={props.image} alt={props.label} />
				</div>
				<div className={styles.content}>
					<h2>{props.label}</h2>
					<p>"{props.cuisineType}"</p>
					<p>"{props.dishType}"</p>
					<p>"{props.source}"</p>
					Source: {props.url}
				</div>
				<div className={styles.actions}>
					<button onClick={showDetailsHandler}>Show Recipe Details</button>
				</div>
			</Card>
		</li>
	);
}

export default RecipeItem;
