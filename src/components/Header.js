import { LOGO_URL } from "./constant";
import { Link } from "react-router-dom";

const Title = () => (
	<Link to="/">
		<img className="logo" src={LOGO_URL} alt="Food Villa Logo" />
	</Link>
);

const Header = () => {
	return (
		<div className="header">
			<Title />
			<div className="nav-items">
				<ul>
					<Link to="/">
						<li>Home</li>
					</Link>
					<Link to="/about">
						<li>About</li>
					</Link>
					<Link to="/contact-us">
						<li>Contact</li>
					</Link>
					<li>Cart</li>
				</ul>
			</div>
		</div>
	);
};
export default Header;
