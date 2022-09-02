import { Fragment } from "react";
import styles from "./SearchBar.module.scss";

function SearchBar() {
	return (
		<Fragment>
			<input className={styles.search} type='search' name='searchBar' id='searchBar' />
			<br />
		</Fragment>
	);
}

export default SearchBar;
