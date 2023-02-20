import { useState } from "react";
import { RestaurantList } from "./constant";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
	const [restaurants, setRestaurants] = useState(RestaurantList);
	const [searchInput, setSearchInput] = useState("");
	const filteredData = (searchInput, restaurants) => {
		return restaurants?.filter((restaurant) =>
			restaurant?.name?.includes(searchInput)
		);
	};
	return (
		<>
			<div className="search-container">
				<input
					type="text"
					className="search-input"
					placeholder="Search"
					value={searchInput}
					onChange={(event) => {
						setSearchInput(event.target.value);
					}}
				/>
				<button
					className="search-btn"
					onClick={() => {
						const data = filteredData(searchInput, restaurants);
						setRestaurants(data);
					}}
				>
					Search
				</button>
			</div>
			<div className="restaurent-list">
				{restaurants?.map((restaurant) => {
					return <RestaurantCard {...restaurant} key={restaurant?.id} />;
				})}
			</div>
		</>
	);
};
export default Body;
