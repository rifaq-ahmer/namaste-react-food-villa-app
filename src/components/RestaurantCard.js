const RestaurantCard = ({
	name,
	cuisines,
	cloudinaryImageId,
	lastMileTravelString,
}) => {
	return (
		<div className="card">
			<img
				src={
					"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
					cloudinaryImageId
				}
				alt="Food Image"
			/>
			<h2>{name}</h2>
			<h3>{cuisines?.join(", ")}</h3>
			<h4>{lastMileTravelString}</h4>
			{/* <h1>{restaurant?.data?.name}</h1> */}
		</div>
	);
};

export default RestaurantCard;
