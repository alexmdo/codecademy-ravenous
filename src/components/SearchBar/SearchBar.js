import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
    return (
        <div className={styles['search-bar']}>
            <div className={styles['search-inputs']}>
                <input type="text" placeholder="Search Businesses" />
                <input type="text" placeholder="Location" />
            </div>
            <div className={styles['search-buttons']}>
                <button className={styles['search-button']}>Search</button>
                <button className={styles['search-button']}>Best Match</button>
                <button className={styles['search-button']}>Highest Rated</button>
                <button className={styles['search-button']}>Most Reviewed</button>
            </div>
        </div>
    );
};

export default SearchBar;