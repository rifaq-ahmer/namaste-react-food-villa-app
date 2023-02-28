import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { async } from "regenerator-runtime";
import { IMAGE_CDN_URL } from "./constant";
import Shimmer from "./shimmerUI";
const RestaurantMenu = () => {
	const [restaurantMenu, setRestaurantMenu] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		getRestaurantMenu();
	}, []);
	async function getRestaurantMenu() {
		const data = await fetch(
			"https://www.swiggy.com/dapi/menu/v4/full?lat=19.237343&lng=73.1255529&menuId=" +
				id
		);
		const menu = await data.json();
		setRestaurantMenu(menu.data);
	}
	return !restaurantMenu ? (
		<Shimmer />
	) : (
		<div className="restaurant-menu-container">
			<div>
				<h3>{`Restaurabt Id : ${id}`}</h3>
				<h1>{`Name : ${restaurantMenu?.name}`}</h1>
				<img
					src={IMAGE_CDN_URL + restaurantMenu?.cloudinaryImageId}
					alt="Restaurant-Image"
				/>
				<h1>{"Location : " + restaurantMenu?.area}</h1>
				<h1>{"City : " + restaurantMenu?.city}</h1>
				<h1>{"Rating : " + restaurantMenu?.avgRating}</h1>
			</div>
			<div>
				<h1>Menu</h1>
				<ul>
					{Object.values(restaurantMenu?.menu?.items).map((item) => (
						<li>{item.name}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default RestaurantMenu;
