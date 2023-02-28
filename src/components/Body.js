import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./shimmerUI";

const Body = () => {
	const [allRestaurants, setAllRestaurants] = useState([]);

	const [filteredRestaurants, setFilteredRestaurants] = useState([]);
	const [searchInput, setSearchInput] = useState("");
	const filteredData = (searchInput, restaurants) => {
		console.log("searchInput", searchInput);
		console.log("restaurants", restaurants);
		return restaurants?.filter((restaurant) =>
			restaurant?.data?.name
				?.toLowerCase()
				?.includes(searchInput?.toLowerCase())
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
		setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
		setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
	}
	return filteredRestaurants?.length === 0 ? (
		<ShimmerUI />
	) : (
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
						const data = filteredData(searchInput, allRestaurants);
						console.log(data, "Filtered Data");
						setFilteredRestaurants(data);
					}}
				>
					Search
				</button>
			</div>
			<div className="restaurent-list">
				{filteredRestaurants?.map((restaurant) => {
					return (
						<RestaurantCard {...restaurant.data} key={restaurant.data.id} />
					);
				})}
			</div>
		</>
	);
};
export default Body;
