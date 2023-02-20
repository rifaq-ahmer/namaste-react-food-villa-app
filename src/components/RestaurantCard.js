const RestaurantCard = ({ name, imageURL, rating, cuisine }) => {
	return (
		<div className="card">
			<img src={imageURL} alt="Food Image" />
			<h2>{name}</h2>
			<h3>{cuisine?.join(", ")}</h3>
			<h4>{`${rating} Stars`}</h4>
		</div>
	);
};

export default RestaurantCard;
