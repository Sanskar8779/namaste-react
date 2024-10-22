import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
	//Local state variable - Super powerful variable
	//Whenever a state variable changes, React re-renders the component
	const [listOfRestaurants, setListOfRestaurants] = useState([]);
	const [filteredRestaurant, setFilteredRestaurant] = useState([]);
	const [searchText, setSearchText] = useState("");
	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
		);
		const json = await data.json();
		// console.log(json);
		setListOfRestaurants(
			json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
		setFilteredRestaurant(
			json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
	};

	// Conditional rendering
	// if (listOfRestaurants.length === 0) {
	// 	return <Shimmer />;
	// }

	// using ternary for above condition
	return listOfRestaurants.length === 0 ? (
		<Shimmer />
	) : (
		<div className="body">
			<div className="filter">
				<div className="search">
					<input
						className="search-box"
						type="text"
						value={searchText}
						onChange={(e) => {
							setSearchText(e.target.value);
						}}
					/>

					<button
						className="search-btn"
						onClick={() => {
							console.log(searchText);
							const filteredList = listOfRestaurants.filter((res) =>
								res.info.name.toLowerCase().includes(searchText.toLowerCase())
							);
							setFilteredRestaurant(filteredList);
						}}
					>
						Search
					</button>
				</div>
				<button
					className="filter-btn"
					onClick={() => {
						const filteredRestaurants = listOfRestaurants.filter(
							(res) => res.info.avgRating > 4
						);
						setFilteredRestaurant(filteredRestaurants);
					}}
				>
					Top Rated Restaurants
				</button>
			</div>
			<div className="res-container">
				{/* // Map filter reduce in JS */}
				{filteredRestaurant.map((resturant) => (
					<ResturantCard
						key={resturant.info.id} /*This is the unique key*/
						resData={resturant}
					/>
				))}
			</div>
		</div>
	);
};

export default Body;
