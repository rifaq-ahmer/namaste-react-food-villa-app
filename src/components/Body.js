import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
	const [restaurants, setRestaurants] = useState([]);
	const [searchInput, setSearchInput] = useState("");
	const filteredData = (searchInput, restaurants) => {
		return restaurants?.filter((restaurant) =>
			restaurant?.name?.includes(searchInput)
		);
	};

	useEffect(() => {
		getRestaurants();
	}, []);
	async function getRestaurants() {
		const data = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.237343&lng=73.1255529&page_type=DESKTOP_WEB_LISTING"
		);
		const json = await data.json();

		setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
	}
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
					return (
						<RestaurantCard {...restaurant.data} key={restaurant.data.id} />
					);
				})}
			</div>
		</>
	);
};
export default Body;
