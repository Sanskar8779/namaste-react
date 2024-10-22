import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
	//Local state variable - Super powerful variable
	//Whenever a state variable changes, React re-renders the component
	const [listOfRestaurants, setListOfRestaurants] = useState(resList);

	return (
		<div className="body">
			<div className="filter">
				<button
					className="filter-btn"
					onClick={() => {
						const filteredRestaurants = listOfRestaurants.filter(
							(res) => res.info.avgRating > 4
						);
						setListOfRestaurants(filteredRestaurants);
					}}
				>
					Top Rated Restaurants
				</button>
			</div>
			<div className="res-container">
				{/* // Map filter reduce in JS */}
				{listOfRestaurants.map((resturant) => (
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
